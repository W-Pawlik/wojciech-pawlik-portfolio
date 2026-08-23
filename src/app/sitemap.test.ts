import { describe, expect, it } from 'vitest'

import { INDEXABLE_ROUTES, ROUTES } from '@/data/routes'
import { siteUrl } from '@/data/site'
import { locales } from '@/i18n/config'

import sitemap from './sitemap'

const entries = sitemap()

describe('sitemap', () => {
  it('emits one entry per route per locale', () => {
    expect(entries).toHaveLength(INDEXABLE_ROUTES.length * locales.length)
  })

  it('uses absolute URLs on the configured origin', () => {
    for (const entry of entries) {
      expect(entry.url.startsWith(siteUrl)).toBe(true)
    }
  })

  /** hreflang in the sitemap and in the page metadata must be the same set. */
  it('lists every locale plus x-default in the alternates', () => {
    for (const entry of entries) {
      const languages = entry.alternates?.languages ?? {}

      for (const locale of locales) {
        expect(languages[locale]).toBeTruthy()
      }
      expect(languages['x-default']).toBeTruthy()
    }
  })

  /**
   * The internal design-system page is excluded from the index by metadata. It must not
   * be advertised here — a sitemap entry is an invitation to crawl.
   */
  it('never advertises the internal system page', () => {
    expect(entries.some((entry) => entry.url.includes(ROUTES.system))).toBe(false)
  })

  /** No lastModified from the build clock: that would fake freshness on every deploy. */
  it('does not claim a modification date', () => {
    for (const entry of entries) {
      expect(entry.lastModified).toBeUndefined()
    }
  })
})
