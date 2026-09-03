import { describe, expect, it } from 'vitest'

import { siteUrl } from '@/data/site'
import { locales } from '@/i18n/config'

import { buildMetadata } from './metadata'

describe('buildMetadata', () => {
  it('uses the dictionary title on the home page', () => {
    const metadata = buildMetadata({ locale: 'pl' })

    expect(metadata.title).toBeTruthy()
    expect(metadata.alternates?.canonical).toBe('/pl')
  })

  it('brands a page-specific title and keeps the locale prefix on the canonical', () => {
    const metadata = buildMetadata({ locale: 'pl', title: 'Kontakt', path: '/kontakt' })

    expect(metadata.title).toContain('Kontakt')
    expect(metadata.alternates?.canonical).toBe('/pl/kontakt')
  })

  /**
   * Guard: the hreflang set here has to match the one in sitemap.ts, and `x-default`
   * has to point at the canonical Polish fallback.
   */
  it('emits every locale plus x-default in the alternates', () => {
    const languages = buildMetadata({ locale: 'pl', path: '/kontakt' }).alternates?.languages ?? {}

    for (const locale of locales) {
      expect(languages[locale]).toBe(`/${locale}/kontakt`)
    }
    expect(languages['x-default']).toBe('/pl/kontakt')
  })

  it('keeps Open Graph and Twitter consistent', () => {
    const metadata = buildMetadata({ locale: 'pl', title: 'Usługi', description: 'Opis.' })

    expect(metadata.openGraph?.title).toBe(metadata.title)
    expect(metadata.twitter?.title).toBe(metadata.title)
    expect(metadata.openGraph?.description).toBe('Opis.')
    expect(metadata.twitter?.description).toBe('Opis.')
  })

  it('declares the shared social image on both card types', () => {
    const metadata = buildMetadata({ locale: 'pl' })

    expect(metadata.openGraph?.images).toEqual([
      { url: `${siteUrl}/images/brand/og-default.jpg`, width: 1200, height: 630 },
    ])
    expect(metadata.twitter?.images).toEqual([`${siteUrl}/images/brand/og-default.jpg`])
  })

  it('resolves a relative image path against the site origin', () => {
    const metadata = buildMetadata({ locale: 'pl', image: '/images/brand/og-default.jpg' })
    const images =
      metadata.openGraph && 'images' in metadata.openGraph ? metadata.openGraph.images : undefined

    expect(JSON.stringify(images)).toContain('http')
  })
})
