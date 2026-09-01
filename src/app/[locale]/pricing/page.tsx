import type { Metadata } from 'next'

import { PricingPage as PricingRouteContent } from '@/components/pages/pricing-page'
import { ROUTE_PATHS } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.pricing[locale],
    localizedPaths: ROUTE_PATHS.pricing,
    title: dict.pricing.label,
    description: dict.pricing.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

export default async function PricingPage() {
  return <PricingRouteContent />
}
