import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { MEDIA_QUERY, useHasFinePointer, useIsDesktop } from './use-media-query'
import { useReducedMotion } from './use-reduced-motion'

/**
 * These three hooks are one-line wrappers, and the thing worth guarding is which query
 * each one asks for: a wrapper pointing at the wrong query silently disables motion
 * accessibility, or enables hover effects on a touch screen.
 */
const original = window.matchMedia

function matchOnly(query: string) {
  const spy = vi.fn().mockImplementation((asked: string) => ({
    matches: asked === query,
    media: asked,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

  window.matchMedia = spy as unknown as typeof window.matchMedia
  return spy
}

afterEach(() => {
  window.matchMedia = original
})

describe('useReducedMotion', () => {
  it('is true only when the reduced-motion query matches', () => {
    matchOnly(MEDIA_QUERY.REDUCED_MOTION)

    expect(renderHook(() => useReducedMotion()).result.current).toBe(true)
  })

  it('is false when the user has expressed no preference', () => {
    matchOnly('(min-width: 1px)')

    expect(renderHook(() => useReducedMotion()).result.current).toBe(false)
  })
})

describe('useIsDesktop', () => {
  it('asks for the desktop breakpoint', () => {
    matchOnly(MEDIA_QUERY.DESKTOP)

    expect(renderHook(() => useIsDesktop()).result.current).toBe(true)
  })
})

describe('useHasFinePointer', () => {
  it('asks for a hover-capable fine pointer, not a viewport width', () => {
    matchOnly(MEDIA_QUERY.FINE_POINTER)

    expect(renderHook(() => useHasFinePointer()).result.current).toBe(true)
    expect(renderHook(() => useIsDesktop()).result.current).toBe(false)
  })
})
