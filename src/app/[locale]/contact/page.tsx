import type { Metadata } from 'next'

import { ContactPage as ContactRouteContent } from '@/components/pages/contact-page'
import { ROUTE_PATHS } from '@/data/routes'
import { getDictionary } from '@/i18n/server'
import { getLocale } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.contact[locale],
    localizedPaths: ROUTE_PATHS.contact,
    title: dict.contact.pageTitle,
    description: dict.contact.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

export default async function ContactPage() {
  return <ContactRouteContent />
}
