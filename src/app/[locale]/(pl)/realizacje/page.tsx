import type { Metadata } from 'next'
import EnglishWorkPage from '@/app/[locale]/work/page'
import { ROUTE_PATHS } from '@/data/routes'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'pl' as const
  const dict = dictionaryFor(locale)
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.work[locale],
    localizedPaths: ROUTE_PATHS.work,
    title: dict.work.indexTitle,
    description: dict.work.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function PolishWorkPage() {
  return <EnglishWorkPage />
}
