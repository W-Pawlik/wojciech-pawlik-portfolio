import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useMediaQuery } from './use-media-query'

/**
 * The global stub in vitest.setup.ts always answers `false`. This file needs a stub it
 * can drive, so it installs its own and restores the original afterwards — the setup
 * stub is deliberately conditional so this override survives.
 */
const original = window.matchMedia

type Listener = () => void

function installMatchMedia(initial: boolean) {
  const listeners = new Set<Listener>()
  let matches = initial

  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    get matches() {
      return matches
    },
    media: query,
    onchange: null,
    addEventListener: (_: string, listener: Listener) => listeners.add(listener),
    removeEventListener: (_: string, listener: Listener) => listeners.delete(listener),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia

  return {
    set(value: boolean) {
      matches = value
      for (const listener of listeners) listener()
    },
    get listenerCount() {
      return listeners.size
    },
  }
}

afterEach(() => {
  window.matchMedia = original
})

describe('useMediaQuery', () => {
  it('reports the current match', () => {
    installMatchMedia(true)

    const { result } = renderHook(() => useMediaQuery('(min-width: 64rem)'))

    expect(result.current).toBe(true)
  })

  it('re-renders when the query starts matching', () => {
    const media = installMatchMedia(false)
    const { result } = renderHook(() => useMediaQuery('(min-width: 64rem)'))

    expect(result.current).toBe(false)

    act(() => media.set(true))

    expect(result.current).toBe(true)
  })

  /** A leaked listener keeps a detached component subscribed for the page's lifetime. */
  it('removes its listener on unmount', () => {
    const media = installMatchMedia(false)
    const { unmount } = renderHook(() => useMediaQuery('(min-width: 64rem)'))

    expect(media.listenerCount).toBe(1)

    unmount()

    expect(media.listenerCount).toBe(0)
  })
})
