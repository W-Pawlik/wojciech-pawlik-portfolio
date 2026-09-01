import { describe, expect, it } from 'vitest'

import { defaultLocale } from '@/i18n/config'

import { pickLocale } from './proxy'

describe('pickLocale', () => {
  it('always uses Polish as the primary market language', () => {
    expect(pickLocale(null)).toBe(defaultLocale)
    expect(pickLocale('en-GB,en;q=0.9')).toBe(defaultLocale)
    expect(pickLocale('de,fr')).toBe(defaultLocale)
  })
})
