import { describe, expect, it } from 'vitest'

import {
  defaultLocale,
  isLocale,
  locales,
  localeMeta,
  openGraphLocale,
  stripLocale,
  withLocale,
} from './config'

describe('locale configuration', () => {
  it('includes the default locale in the list', () => {
    expect(locales).toContain(defaultLocale)
  })

  /** A locale without metadata renders an empty language switcher entry and a wrong
   * `lang` attribute - neither fails the build on its own. */
  it.each(locales)('has metadata and an Open Graph tag for %s', (locale) => {
    expect(localeMeta[locale]).toBeDefined()
    expect(openGraphLocale[locale]).toBeTruthy()
  })
})

describe('isLocale', () => {
  it('accepts a known locale and rejects everything else', () => {
    expect(isLocale('pl')).toBe(true)
    expect(isLocale('de')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })
})

describe('stripLocale', () => {
  it.each([
    ['/pl', '/'],
    ['/pl/kontakt', '/kontakt'],
    ['/en/kontakt/x', '/kontakt/x'],
    ['/kontakt', '/kontakt'],
    ['/', '/'],
  ])('%s -> %s', (input, expected) => {
    expect(stripLocale(input)).toBe(expected)
  })

  /** A route that merely starts with the locale letters must not be truncated. */
  it('does not strip a path that only looks like a locale prefix', () => {
    expect(stripLocale('/planowanie')).toBe('/planowanie')
  })
})

describe('withLocale', () => {
  it('swaps one locale prefix for another', () => {
    expect(withLocale('/pl/kontakt', 'en')).toBe('/en/kontakt')
  })

  it('adds a prefix to an unprefixed path', () => {
    expect(withLocale('/kontakt', 'pl')).toBe('/pl/kontakt')
  })

  it('maps the root to a bare locale path', () => {
    expect(withLocale('/', 'pl')).toBe('/pl')
  })
})
