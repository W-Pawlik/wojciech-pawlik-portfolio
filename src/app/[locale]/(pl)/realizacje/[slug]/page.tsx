import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import EnglishCaseStudyRoute from '@/app/[locale]/work/[slug]/page'
import { PROJECTS, projectBySlug, projectRoute } from '@/data/projects'
import { isLocale } from '@/i18n/config'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ locale: 'pl', slug: project.slugs.pl }))
}

export async function generateMetadata(
  props: PageProps<'/[locale]/realizacje/[slug]'>,
): Promise<Metadata> {
  const { locale, slug } = await props.params
  if (!isLocale(locale) || locale !== 'pl') notFound()

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

export default async function PolishCaseStudyRoute(
  props: PageProps<'/[locale]/realizacje/[slug]'>,
) {
  const { locale } = await props.params
  if (!isLocale(locale) || locale !== 'pl') notFound()
  return <EnglishCaseStudyRoute params={props.params} searchParams={Promise.resolve({})} />
}

export const dynamicParams = false
