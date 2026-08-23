import { describe, expect, it } from 'vitest'

import { cn } from './cn'

describe('cn', () => {
  it('drops falsy values and keeps the rest', () => {
    expect(cn('a', false && 'b', undefined, 'c')).toBe('a c')
  })

  it('resolves a conflict within a standard Tailwind group, last one wins', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6')
  })

  /**
   * The reason `cn` exists at all instead of plain clsx: without the custom class
   * groups, tailwind-merge treats a font-size token and a colour token as the same
   * `text-*` group and throws one away.
   */
  it('keeps a custom font size and a custom text colour together', () => {
    expect(cn('text-display-section', 'text-accent')).toBe('text-display-section text-accent')
  })

  it('still resolves two custom font sizes against each other', () => {
    expect(cn('text-body', 'text-body-lg')).toBe('text-body-lg')
  })

  it('still resolves two custom text colours against each other', () => {
    expect(cn('text-content', 'text-content-secondary')).toBe('text-content-secondary')
  })

  /** `accent-strong` is the AA-on-light variant of the accent — a colour, not a size. */
  it('treats accent-strong as a text colour, not a font size', () => {
    expect(cn('text-body-sm', 'text-accent-strong')).toBe('text-body-sm text-accent-strong')
    expect(cn('text-accent', 'text-accent-strong')).toBe('text-accent-strong')
  })
})
