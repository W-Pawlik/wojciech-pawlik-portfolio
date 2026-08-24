'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const STORAGE_KEY = 'landing-return-scroll'

type SavedPosition = { sourcePath: string; y: number }

export function ReturnScrollPosition() {
  const pathname = usePathname()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest<HTMLAnchorElement>('a[data-return-scroll]')
      if (!link) return

      const position: SavedPosition = { sourcePath: window.location.pathname, y: window.scrollY }
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(position))
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    const stored = window.sessionStorage.getItem(STORAGE_KEY)
    if (!stored) return

    try {
      const position = JSON.parse(stored) as SavedPosition
      if (position.sourcePath !== pathname) return
      window.sessionStorage.removeItem(STORAGE_KEY)
      requestAnimationFrame(() => window.scrollTo({ top: position.y, behavior: 'auto' }))
    } catch {
      window.sessionStorage.removeItem(STORAGE_KEY)
    }
  }, [pathname])

  return null
}
