import { describe, expect, it } from 'vitest'

import { colorToken, readColorTokens } from './color-tokens'

const tokens = readColorTokens()

describe('readColorTokens', () => {
  /**
   * Not a tautological "is accent #XYZ" test: it asserts that the roles the design
   * system depends on exist at all. A renamed token breaks /system and every
   * component that consumes the utility, and nothing else would tell us.
   */
  it.each([
    'canvas',
    'canvas-invert',
    'surface',
    'line',
    'content',
    'content-secondary',
    'content-tertiary',
    'accent',
    'accent-contrast',
    'danger',
  ])('declares the %s role', (name) => {
    expect(tokens[name]).toBeDefined()
  })
})

describe('colorToken', () => {
  it('returns the declared value', () => {
    expect(colorToken(tokens, 'canvas')).toBe(tokens.canvas)
  })

  it('throws for a token that is not declared', () => {
    expect(() => colorToken(tokens, 'nope')).toThrow(/not declared/)
  })
})
