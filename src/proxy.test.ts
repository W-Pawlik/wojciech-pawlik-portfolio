import type { NextRequest } from 'next/server'
import { describe, expect, it } from 'vitest'

import { defaultLocale } from '@/i18n/config'

import { pickLocale, proxy } from './proxy'

describe('pickLocale', () => {
  it('falls back to the default when the header is absent', () => {
    expect(pickLocale(null)).toBe(defaultLocale)
  })

  it('takes the first supported language in preference order', () => {
    expect(pickLocale('en-GB,en;q=0.9,pl;q=0.8')).toBe('en')
  })

  it('matches on the base tag, not the region', () => {
    expect(pickLocale('pl-PL')).toBe('pl')
  })

  it('skips unsupported languages', () => {
    expect(pickLocale('de-DE,de;q=0.9,pl;q=0.5')).toBe('pl')
  })

  it('falls back when nothing is supported', () => {
    expect(pickLocale('de,fr')).toBe(defaultLocale)
  })
})

/** Minimal stand-in: the proxy only touches `nextUrl` and one header. */
function requestFor(pathname: string, acceptLanguage?: string): NextRequest {
  const url = new URL(`https://example.com${pathname}`)

  return {
    nextUrl: { pathname, clone: () => new URL(url) },
    headers: new Headers(acceptLanguage ? { 'accept-language': acceptLanguage } : {}),
  } as unknown as NextRequest
}

describe('proxy', () => {
  it('leaves an already-prefixed path alone', () => {
    expect(proxy(requestFor('/pl/kontakt'))).toBeUndefined()
  })

  it('redirects the root to the negotiated locale', () => {
    const response = proxy(requestFor('/', 'en'))

    expect(response?.headers.get('location')).toBe('https://example.com/en')
  })

  it('keeps the rest of the path when prefixing', () => {
    const response = proxy(requestFor('/kontakt', 'pl'))

    expect(response?.headers.get('location')).toBe('https://example.com/pl/kontakt')
  })

  /**
   * Guard: the response depends on a request header, so a shared cache must key on it.
   * Without `Vary` a cached redirect sends every later visitor to the same language.
   */
  it('declares Vary: Accept-Language', () => {
    const response = proxy(requestFor('/', 'en'))

    expect(response?.headers.get('vary')).toBe('Accept-Language')
  })

  it('does not treat a path that merely starts with the locale letters as prefixed', () => {
    const response = proxy(requestFor('/planowanie', 'pl'))

    expect(response?.headers.get('location')).toBe('https://example.com/pl/planowanie')
  })
})
