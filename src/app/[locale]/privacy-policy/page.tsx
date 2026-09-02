import type { Metadata } from 'next'

import { LegalPage } from '@/components/pages/legal-page'
import { ROUTE_PATHS } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.privacy[locale],
    localizedPaths: ROUTE_PATHS.privacy,
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.intro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" />
}
