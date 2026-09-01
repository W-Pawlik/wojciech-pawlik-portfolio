'use client'

import { useEffect } from 'react'

/**
 * Freezes page scroll while an overlay is open (full-screen mobile menu, modal).
 * Compensates for the disappearing scrollbar so the layout does not jump, and
 * always restores the inline styles it found.
 *
 * **Only the vertical axis is touched.** An inline `overflow: hidden` would be the
 * shorthand, and it would quietly replace the `overflow-x: clip` that base.css relies on
 * to keep horizontal overflow off the document - turning the viewport into a
 * horizontally scrollable box for exactly as long as an overlay is open. Both the root
 * element and body are locked because browsers are allowed to use either one as the
 * document's scrolling element.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return

    const { body, documentElement } = document
    const previousDocumentOverflowY = documentElement.style.overflowY
    const previousOverflowY = body.style.overflowY
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    documentElement.style.overflowY = 'hidden'
    body.style.overflowY = 'hidden'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      documentElement.style.overflowY = previousDocumentOverflowY
      body.style.overflowY = previousOverflowY
      body.style.paddingRight = previousPaddingRight
    }
  }, [locked])
}
