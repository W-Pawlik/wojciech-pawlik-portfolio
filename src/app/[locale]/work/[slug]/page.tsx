import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyPage } from '@/components/pages/case-study-page'
import { PROJECTS, projectBySlug, projectRoute } from '@/data/projects'
import { isLocale, withLocale } from '@/i18n/config'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ locale: 'en', slug: project.slugs.en }))
}

export async function generateMetadata(
  props: PageProps<'/[locale]/work/[slug]'>,
): Promise<Metadata> {
  const { locale, slug } = await props.params
  if (!isLocale(locale)) notFound()
  const project = projectBySlug(slug, locale)
  if (!project) notFound()
  const copy = dictionaryFor(locale).caseStudies[project.key]

  return buildMetadata({
    locale,
    path: projectRoute(project, locale),
    localizedPaths: {
      pl: projectRoute(project, 'pl'),
      en: projectRoute(project, 'en'),
    },
    title: copy.title,
    description: copy.statement,
  })
}

export default async function CaseStudyRoute(props: PageProps<'/[locale]/work/[slug]'>) {
  const { locale, slug } = await props.params
  if (!isLocale(locale)) notFound()
  const project = projectBySlug(slug, locale)
  if (!project) notFound()
  const nextProject = PROJECTS.find((entry) => entry.slug !== project.slug)

  return (
    <CaseStudyPage
      copy={dictionaryFor(locale).caseStudies[project.key]}
      caseStudyLabel={dictionaryFor(locale).work.caseStudyLabel}
      caseStudyClosing={dictionaryFor(locale).work.caseStudyClosing}
      codebrosLabel={dictionaryFor(locale).work.teamCodebros}
      closeLabel={dictionaryFor(locale).nav.closeMenu}
      liveCta={dictionaryFor(locale).work.liveCta}
      locale={locale}
      project={project}
      nextProject={
        nextProject
          ? {
              href: withLocale(projectRoute(nextProject, locale), locale),
              title: dictionaryFor(locale).work.projects[nextProject.key].title,
            }
          : undefined
      }
    />
  )
}

export const dynamicParams = false
