import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useLockBodyScroll } from './use-lock-body-scroll'

describe('useLockBodyScroll', () => {
  it('does nothing while unlocked', () => {
    renderHook(() => useLockBodyScroll(false))

    expect(document.body.style.overflowY).toBe('')
  })

  it('freezes vertical scrolling while locked', () => {
    renderHook(() => useLockBodyScroll(true))

    expect(document.body.style.overflowY).toBe('hidden')
  })

  /**
   * Guard: the horizontal net in base.css (`overflow-x: clip`) must survive. Setting the
   * `overflow` shorthand here would replace it and make the viewport horizontally
   * scrollable for as long as an overlay is open.
   */
  it('never touches the horizontal axis', () => {
    renderHook(() => useLockBodyScroll(true))

    expect(document.body.style.overflowX).toBe('')
  })

  it('restores the inline styles it found on unmount', () => {
    document.body.style.overflowY = 'scroll'
    document.body.style.paddingRight = '8px'

    const { unmount } = renderHook(() => useLockBodyScroll(true))
    unmount()

    expect(document.body.style.overflowY).toBe('scroll')
    expect(document.body.style.paddingRight).toBe('8px')

    document.body.style.overflowY = ''
    document.body.style.paddingRight = ''
  })
})
