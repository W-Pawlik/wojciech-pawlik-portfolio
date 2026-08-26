import { localeMeta, type Locale } from '@/i18n/config'
import { siteConfig, siteUrl } from '@/data/site'

/** Structured data for the brand and its personal owner. */
export function buildStructuredData(locale: Locale, description: string) {
  const localePath = `/${locale}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}${localePath}`,
        name: siteConfig.name,
        description,
        inLanguage: localeMeta[locale].htmlLang,
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: siteConfig.legalName,
        url: `${siteUrl}${localePath}/about`,
        description,
        brand: {
          '@type': 'Brand',
          name: siteConfig.name,
        },
      },
    ],
  }
}
