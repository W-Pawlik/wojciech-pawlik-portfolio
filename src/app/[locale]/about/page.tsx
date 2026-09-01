import type { Metadata } from 'next'

import { AboutPage as AboutRouteContent } from '@/components/pages/about-page'
import { ROUTE_PATHS } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.about[locale],
    localizedPaths: ROUTE_PATHS.about,
    title: dict.about.label,
    description: dict.about.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

export default async function AboutPage() {
  return <AboutRouteContent />
}
