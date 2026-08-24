import type { Metadata } from 'next'

import { PricingPage as PricingRouteContent } from '@/components/pages/pricing-page'
import { getDictionary, getLocale } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: '/pricing',
    title: dict.pricing.label,
    description: dict.pricing.pageIntro,
  })
}

export default async function PricingPage() {
  return <PricingRouteContent />
}
