import { describe, expect, it } from 'vitest'

import { siteUrl } from '@/data/site'

import robots from './robots'

describe('robots.txt', () => {
  it('allows crawling and points at the sitemap on the real origin', () => {
    const result = robots()

    expect(result.rules).toEqual({ userAgent: '*', allow: '/' })
    expect(result.sitemap).toBe(`${siteUrl}/sitemap.xml`)
  })

  /**
   * Guard for a mistake that is easy to make and hard to notice: blocking a page here
   * *and* marking it noindex means the crawler never reads the noindex. Exclusion from
   * the index is done with metadata only - see .agents/08.
   */
  it('does not disallow anything', () => {
    expect(JSON.stringify(robots())).not.toContain('disallow')
  })
})
