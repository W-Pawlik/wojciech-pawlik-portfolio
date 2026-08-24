'use client'

import { useEffect } from 'react'

/**
 * Next's Link can handle a same-page hash without giving the browser's CSS scroll
 * behavior a chance to run. This tiny document-level bridge only handles same-document
 * anchors; route navigation and ordinary links keep their default behavior.
 */
export function SmoothAnchorScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const origin = event.target
      if (!(origin instanceof Element)) return
      const link = origin.closest('a')
      if (!link || link.target === '_blank' || !link.href) return

      const url = new URL(link.href, window.location.href)
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      ) {
        return
      }

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)))
      if (!target) return

      event.preventDefault()
      window.history.pushState(null, '', url.hash)
      target.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
