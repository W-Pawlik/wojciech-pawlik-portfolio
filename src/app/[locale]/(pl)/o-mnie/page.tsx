import type { Metadata } from 'next'

import EnglishAboutPage from '@/app/[locale]/about/page'
import { ROUTE_PATHS } from '@/data/routes'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'pl' as const
  const copy = dictionaryFor(locale).about
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.about[locale],
    localizedPaths: ROUTE_PATHS.about,
    title: copy.label,
    description: copy.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function PolishAboutPage() {
  return <EnglishAboutPage />
}
