import { describe, expect, it } from 'vitest'

import { formatDecimal, formatOrdinal, formatPrice, formatPriceFrom } from './format'

/** The whole point of these helpers is the invisible characters, so assert on them. */
const NBSP = ' '

describe('formatPrice', () => {
  it('groups thousands and never lets the price wrap', () => {
    const formatted = formatPrice(1600, 'pl')

    expect(formatted).toBe(`1${NBSP}600${NBSP}zł`)
    expect(formatted).not.toContain(' ')
  })

  /**
   * Guard: Polish CLDR would drop the separator for four-digit numbers, which puts two
   * conventions in one price column. `useGrouping: 'always'` is what prevents it.
   */
  it('groups four-digit prices the same way as five-digit ones', () => {
    expect(formatPrice(1600, 'pl')).toContain(`1${NBSP}600`)
    expect(formatPrice(12000, 'pl')).toContain(`12${NBSP}000`)
  })

  it('drops fractions', () => {
    expect(formatPrice(99.6, 'pl')).toBe(`100${NBSP}zł`)
  })
})

describe('formatPriceFrom', () => {
  it('joins the prefix with a non-breaking space', () => {
    expect(formatPriceFrom(450, 'pl', 'od')).toBe(`od${NBSP}450${NBSP}zł`)
  })
})

describe('formatOrdinal', () => {
  it('pads a single digit to two', () => {
    expect(formatOrdinal(1)).toBe('01')
  })

  it('leaves two digits alone', () => {
    expect(formatOrdinal(12)).toBe('12')
  })
})

describe('formatDecimal', () => {
  it('uses the locale separator', () => {
    expect(formatDecimal(4.9, 'pl')).toBe('4,9')
    expect(formatDecimal(4.9, 'en')).toBe('4.9')
  })

  it('keeps the requested number of fraction digits, even when they are zero', () => {
    expect(formatDecimal(5, 'pl')).toBe('5,0')
    expect(formatDecimal(5, 'pl', 2)).toBe('5,00')
  })
})
