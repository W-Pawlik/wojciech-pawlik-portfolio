import type { Metadata } from 'next'

import { LegalPage } from '@/components/pages/legal-page'
import { ROUTE_PATHS } from '@/data/routes'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'pl' as const
  const copy = dictionaryFor(locale).legal.privacy
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.privacy[locale],
    localizedPaths: ROUTE_PATHS.privacy,
    title: copy.title,
    description: copy.intro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default function PolishPrivacyPage() {
  return <LegalPage kind="privacy" />
}
