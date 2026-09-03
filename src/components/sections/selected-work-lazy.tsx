'use client'

import * as React from 'react'

import type { Project } from '@/data/projects'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

type SelectedWorkLazyProps = {
  projects: readonly Project[]
  copy: Dictionary['work']
  locale: Locale
  children: React.ReactNode
}

const LazySelectedWorkStage = React.lazy(() =>
  import('@/components/sections/selected-work-stage').then(({ SelectedWorkStage }) => ({
    default: SelectedWorkStage,
  })),
)

/**
 * Keeps the interactive Motion carousel out of the initial client work. The server
 * preview remains in place until the section is within 800px of the viewport, giving
 * the dynamic import time to resolve before the user reaches the section.
 */
export function SelectedWorkLazy({ projects, copy, locale, children }: SelectedWorkLazyProps) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = React.useState(false)

  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setShouldLoad(true))
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '800px 0px', threshold: 0 },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef} className="w-full">
      {shouldLoad ? (
        <React.Suspense fallback={children}>
          <LazySelectedWorkStage projects={projects} copy={copy} locale={locale} />
        </React.Suspense>
      ) : (
        children
      )}
    </div>
  )
}
