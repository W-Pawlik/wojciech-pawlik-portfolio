import type { Metadata } from 'next'

import { ContactPage as ContactRouteContent } from '@/components/pages/contact-page'
import { getDictionary } from '@/i18n/server'
import { getLocale } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: '/contact',
    title: dict.contact.pageTitle,
    description: dict.contact.pageIntro,
  })
}

export default async function ContactPage() {
  return <ContactRouteContent />
}
