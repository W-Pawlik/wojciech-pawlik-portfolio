import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyPage } from '@/components/pages/case-study-page'
import { PROJECTS } from '@/data/projects'
import { ROUTES } from '@/data/routes'
import { isLocale } from '@/i18n/config'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata(
  props: PageProps<'/[locale]/work/[slug]'>,
): Promise<Metadata> {
  const { locale, slug } = await props.params
  if (!isLocale(locale)) notFound()
  const project = PROJECTS.find((entry) => entry.slug === slug)
  if (!project) notFound()
  const copy = dictionaryFor(locale).caseStudies[project.key]

  return buildMetadata({
    locale,
    path: `${ROUTES.work}/${project.slug}`,
    title: copy.title,
    description: copy.statement,
  })
}

export default async function CaseStudyRoute(props: PageProps<'/[locale]/work/[slug]'>) {
  const { locale, slug } = await props.params
  if (!isLocale(locale)) notFound()
  const project = PROJECTS.find((entry) => entry.slug === slug)
  if (!project) notFound()
  const nextProject = PROJECTS.find((entry) => entry.slug !== project.slug)

  return (
    <CaseStudyPage
      copy={dictionaryFor(locale).caseStudies[project.key]}
      closeLabel={dictionaryFor(locale).nav.closeMenu}
      liveCta={dictionaryFor(locale).work.liveCta}
      locale={locale}
      project={project}
      nextProject={
        nextProject
          ? {
              slug: nextProject.slug,
              title: dictionaryFor(locale).work.projects[nextProject.key].title,
            }
          : undefined
      }
    />
  )
}
