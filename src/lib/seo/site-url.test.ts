import { describe, expect, it } from 'vitest'

import { resolveSiteUrl } from './site-url'

describe('resolveSiteUrl in development', () => {
  it('falls back to localhost when the variable is missing', () => {
    expect(resolveSiteUrl(undefined, false)).toBe('http://localhost:3000')
  })

  it('accepts a plain http origin', () => {
    expect(resolveSiteUrl('http://192.168.0.10:3000', false)).toBe('http://192.168.0.10:3000')
  })

  it('strips trailing slashes so joined paths never double up', () => {
    expect(resolveSiteUrl('https://example.com//', false)).toBe('https://example.com')
  })
})

describe('resolveSiteUrl in production', () => {
  /**
   * The guard tests: canonical and hreflang are baked into static HTML, so a wrong or
   * missing origin is unfixable after deploy. Failing the build is the only safe answer.
   */
  it('throws when the variable is missing', () => {
    expect(() => resolveSiteUrl(undefined, true)).toThrow(/required for a production build/)
  })

  it('throws when the value has no scheme', () => {
    expect(() => resolveSiteUrl('example.com', true)).toThrow(/must be an absolute URL/)
  })

  it('throws on http', () => {
    expect(() => resolveSiteUrl('http://example.com', true)).toThrow(/must use https/)
  })

  it('accepts an https origin', () => {
    expect(resolveSiteUrl('https://example.com', true)).toBe('https://example.com')
  })
})
