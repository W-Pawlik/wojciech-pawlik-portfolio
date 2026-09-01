import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import EnglishServiceDetailPage from '@/app/[locale]/services/[service]/page'
import { SERVICE_ROUTE_PATHS } from '@/data/routes'
import { isLocale, type Locale } from '@/i18n/config'
import { dictionaryFor } from '@/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'

const SERVICE_KEYS = ['websites', 'systems', 'ai'] as const
type ServiceKey = (typeof SERVICE_KEYS)[number]

function getServiceKey(value: string, locale: Locale): ServiceKey | undefined {
  return SERVICE_KEYS.find((key) => SERVICE_ROUTE_PATHS[key][locale].endsWith(`/${value}`))
}

export function generateStaticParams() {
  return SERVICE_KEYS.map((service) => ({
    locale: 'pl',
    service: SERVICE_ROUTE_PATHS[service].pl.split('/').pop()!,
  }))
}

export async function generateMetadata(
  props: PageProps<'/[locale]/uslugi/[service]'>,
): Promise<Metadata> {
  const { locale, service } = await props.params
  if (!isLocale(locale) || locale !== 'pl') notFound()

  const key = getServiceKey(service, locale)
  if (!key) notFound()
  const copy = dictionaryFor(locale).servicePages[key]

  return buildMetadata({
    locale,
    path: SERVICE_ROUTE_PATHS[key][locale],
    localizedPaths: SERVICE_ROUTE_PATHS[key],
    title: copy.title,
    description: copy.intro,
  })
}

export default async function PolishServiceDetailPage(
  props: PageProps<'/[locale]/uslugi/[service]'>,
) {
  const { locale } = await props.params
  if (!isLocale(locale) || locale !== 'pl') notFound()
  return <EnglishServiceDetailPage params={props.params} />
}

export const dynamicParams = false
