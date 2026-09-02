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
    path: ROUTE_PATHS.terms[locale],
    localizedPaths: ROUTE_PATHS.terms,
    title: dict.legal.terms.title,
    description: dict.legal.terms.intro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

export default function TermsOfServicePage() {
  return <LegalPage kind="terms" />
}
