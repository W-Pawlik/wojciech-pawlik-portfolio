import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useInView } from './use-in-view'

/**
 * The stub in vitest.setup.ts never fires, so this file installs an observer it can drive
 * and restores the original afterwards.
 *
 * The hook is exercised through a component rather than `renderHook`, because the ref has
 * to be attached to a real element while the effect runs — which is exactly the condition
 * that decides whether anything is observed at all.
 */
const original = window.IntersectionObserver

type Callback = (entries: Array<{ isIntersecting: boolean }>) => void

function installObserver() {
  const observer = { callback: undefined as Callback | undefined, disconnects: 0, observed: 0 }

  class ControllableObserver {
    constructor(callback: Callback) {
      observer.callback = callback
    }
    observe = () => {
      observer.observed += 1
    }
    unobserve = vi.fn()
    disconnect = () => {
      observer.disconnects += 1
    }
    takeRecords = () => []
    readonly root = null
    readonly rootMargin = ''
    readonly thresholds: readonly number[] = []
  }

  window.IntersectionObserver = ControllableObserver as unknown as typeof IntersectionObserver

  return observer
}

function Probe() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return <div ref={ref} data-state={inView ? 'in' : 'out'} />
}

/**
 * The rendered div carries the hook's answer in a data attribute. Read from the render
 * container rather than by role: a plain div and RTL's own wrapper share the `generic`
 * role, so a role query matches both.
 */
function renderProbe() {
  const { container, unmount } = render(<Probe />)

  return {
    state: () => (container.firstElementChild as HTMLElement).dataset.state,
    unmount,
  }
}

afterEach(() => {
  window.IntersectionObserver = original
})

describe('useInView', () => {
  it('starts out of view and observes the element', () => {
    const observer = installObserver()
    const { state } = renderProbe()

    expect(state()).toBe('out')
    expect(observer.observed).toBe(1)
  })

  /** Once revealed, the observer is dropped: a reveal that replays reads as a bug. */
  it('flips to in-view on the first intersection and disconnects', () => {
    const observer = installObserver()
    const { state } = renderProbe()

    act(() => observer.callback?.([{ isIntersecting: true }]))

    expect(state()).toBe('in')
    expect(observer.disconnects).toBeGreaterThan(0)
  })

  it('ignores an entry that is not intersecting', () => {
    const observer = installObserver()
    const { state } = renderProbe()

    act(() => observer.callback?.([{ isIntersecting: false }]))

    expect(state()).toBe('out')
  })

  it('disconnects on unmount', () => {
    const observer = installObserver()
    const { unmount } = renderProbe()

    unmount()

    expect(observer.disconnects).toBeGreaterThan(0)
  })

  /**
   * Falling back to visible matters more than the animation does: without it, a browser
   * with no IntersectionObserver would leave every revealed section at `opacity: 0`
   * forever.
   */
  it('reveals on the next frame when IntersectionObserver is unavailable', async () => {
    // @ts-expect-error deliberately removing a global to exercise the fallback path.
    delete window.IntersectionObserver

    const { state } = renderProbe()

    await act(async () => {
      await new Promise((resolve) => requestAnimationFrame(() => resolve(null)))
    })

    expect(state()).toBe('in')
  })
})
