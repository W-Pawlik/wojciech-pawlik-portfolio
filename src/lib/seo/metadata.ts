import type { Metadata } from 'next'

import { siteConfig, siteUrl } from '@/data/site'
import { locales, openGraphLocale, type Locale } from '@/i18n/config'
import { dictionaryFor } from '@/i18n/dictionaries'

type BuildMetadataOptions = {
  locale: Locale
  /** Page-specific title. Omit on the home page to use the branded default. */
  title?: string
  description?: string
  /** Route path **without** the locale prefix, always leading-slash. */
  path?: string
  /** Path to an OG image under /public, or an absolute URL. */
  image?: string
}

/**
 * TODO(brand): 1200 x 630, then set this to '/images/og-default.jpg'. Do not point at a
 * file that does not exist - a broken OG image is worse than none, because the crawler
 * caches the miss.
 */
const DEFAULT_OG_IMAGE: string | undefined = undefined

/**
 * Builds a complete Metadata object so no route has to remember the Open Graph and
 * Twitter boilerplate.
 *
 * Locale is passed explicitly rather than read from `next/root-params`: metadata is
 * generated outside the Server Component render, and an explicit argument keeps it
 * usable from `generateMetadata` in any route.
 *
 * `alternates.languages` is emitted for every locale, which is what tells search
 * engines the pages are translations rather than duplicates. The set here and the one
 * in `sitemap.ts` must agree - two disagreeing sets make both untrustworthy.
 */
export function buildMetadata({
  locale,
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
}: BuildMetadataOptions): Metadata {
  const dict = dictionaryFor(locale)
  const resolvedTitle = title ? `${title} | ${siteConfig.name}` : dict.meta.title
  const resolvedDescription = description ?? dict.meta.description

  const localePath = path === '/' ? `/${locale}` : `/${locale}${path}`
  const imageUrl = image && !image.startsWith('http') ? `${siteUrl}${image}` : image

  return {
    metadataBase: new URL(siteUrl),
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: localePath,
      languages: {
        ...Object.fromEntries(
          locales.map((entry) => [entry, path === '/' ? `/${entry}` : `/${entry}${path}`]),
        ),
        // The unprefixed path negotiates the locale from Accept-Language in the proxy,
        // which is exactly what x-default describes: the URL aimed at no single
        // language. Without it there is no signal for visitors outside our locales.
        'x-default': path,
      },
    },
    openGraph: {
      type: 'website',
      locale: openGraphLocale[locale],
      siteName: siteConfig.legalName,
      url: localePath,
      title: resolvedTitle,
      description: resolvedDescription,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      ...(imageUrl && { images: [imageUrl] }),
    },
  }
}
