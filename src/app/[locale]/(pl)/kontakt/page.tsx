import type { Metadata } from 'next'

import EnglishContactPage from '@/app/[locale]/contact/page'
import { ROUTE_PATHS } from '@/data/routes'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'pl' as const
  const copy = dictionaryFor(locale).contact
  return buildMetadata({
    locale,
    path: ROUTE_PATHS.contact[locale],
    localizedPaths: ROUTE_PATHS.contact,
    title: copy.pageTitle,
    description: copy.pageIntro,
  })
}

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function PolishContactPage() {
  return <EnglishContactPage />
}
