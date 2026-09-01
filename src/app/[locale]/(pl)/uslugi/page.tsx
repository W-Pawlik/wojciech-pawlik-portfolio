import type { Metadata } from 'next'

import EnglishServicesPage from '@/app/[locale]/services/page'
import { ROUTE_PATHS } from '@/data/routes'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'pl' as const
  const copy = dictionaryFor(locale).services
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.services[locale],
    localizedPaths: ROUTE_PATHS.services,
    title: copy.label,
    description: copy.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function PolishServicesPage() {
  return <EnglishServicesPage />
}
