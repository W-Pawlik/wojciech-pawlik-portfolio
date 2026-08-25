import { describe, expect, it } from 'vitest'

import { contrastLevel, contrastRatio, parseHex } from './contrast'

describe('parseHex', () => {
  it('reads both the short and the long form', () => {
    expect(parseHex('#fff')).toEqual([255, 255, 255])
    expect(parseHex('#FFFFFF')).toEqual([255, 255, 255])
    expect(parseHex('123456')).toEqual([18, 52, 86])
  })

  /** A silent fallback would certify a colour nobody checked. */
  it('throws on anything that is not a hex colour', () => {
    expect(() => parseHex('rgba(0,0,0,.5)')).toThrow(/Not a hex colour/)
    expect(() => parseHex('#12345')).toThrow(/Not a hex colour/)
  })
})

describe('contrastRatio', () => {
  it('returns the known extremes', () => {
    expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 5)
    expect(contrastRatio('#777777', '#777777')).toBeCloseTo(1, 5)
  })

  it('is symmetric - order of arguments does not matter', () => {
    expect(contrastRatio('#123456', '#eeeeee')).toBeCloseTo(contrastRatio('#eeeeee', '#123456'), 10)
  })
})

describe('contrastLevel', () => {
  it.each([
    [21, 'AAA'],
    [7, 'AAA'],
    [6.9, 'AA'],
    [4.5, 'AA'],
    [4.49, 'AA-large'],
    [3, 'AA-large'],
    [2.99, 'fail'],
    [1, 'fail'],
  ])('maps %s to %s', (ratio, expected) => {
    expect(contrastLevel(ratio)).toBe(expected)
  })
})
