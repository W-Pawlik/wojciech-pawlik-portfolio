'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when an element is a third visible. That is the whole contract the reveals
 * need, and it is ~20 lines instead of an animation library on the critical path
 * (.agents/decisions/0009-css-reveals.md).
 *
 * Once triggered the observer is disconnected: a reveal that replays on scroll-up reads
 * as a bug, and an observer that keeps reporting after it has served its purpose is just
 * work the main thread does for nothing.
 */

/** Same viewport contract as VIEWPORT.amount in src/lib/motion/tokens.ts. */
const AMOUNT = 0.3

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // No IntersectionObserver (a very old browser, or a test environment without the
    // stub): reveal on the next frame rather than leave the content hidden forever. The
    // frame boundary also keeps this out of the effect body, where a synchronous
    // setState would be a cascading render.
    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setInView(true))
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: AMOUNT },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
