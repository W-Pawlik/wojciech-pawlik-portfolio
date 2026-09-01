import type { Metadata } from 'next'

import EnglishPricingPage from '@/app/[locale]/pricing/page'
import { ROUTE_PATHS } from '@/data/routes'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'pl' as const
  const copy = dictionaryFor(locale).pricing
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.pricing[locale],
    localizedPaths: ROUTE_PATHS.pricing,
    title: copy.label,
    description: copy.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function PolishPricingPage() {
  return <EnglishPricingPage />
}
