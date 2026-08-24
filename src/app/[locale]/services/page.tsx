import type { Metadata } from 'next'

import { ServicesIndexPage as ServicesRouteContent } from '@/components/pages/services-index-page'
import { getDictionary, getLocale } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: '/services',
    title: dict.services.label,
    description: dict.services.pageIntro,
  })
}

export default async function ServicesPage() {
  return <ServicesRouteContent />
}
