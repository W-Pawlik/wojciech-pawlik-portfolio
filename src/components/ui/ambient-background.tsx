'use client'

import { MeshGradient } from '@paper-design/shaders-react'
import { useEffect, useRef } from 'react'

import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { cn } from '@/lib/utils/cn'

type AmbientBackgroundProps = {
  className?: string
}

// The shader API accepts concrete color strings, so these mirror the existing invert
// palette at the library boundary rather than being CSS values inside the layout.
const SHADER_COLORS = ['#11120f', '#1a1b18', '#45463f', '#f3f0e9']
const SHADER_HIGHLIGHT_COLORS = ['#11120f', '#45463f', '#f3f0e9']

export function AmbientBackground({ className }: AmbientBackgroundProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root || reducedMotion) return

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return

      const bounds = root.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return

      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom

      root.style.setProperty(
        '--hero-pointer-x',
        `${Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))}%`,
      )
      root.style.setProperty(
        '--hero-pointer-y',
        `${Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100))}%`,
      )
      root.style.setProperty('--hero-pointer-opacity', inside ? '1' : '0')
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [reducedMotion])

  return (
    <div ref={rootRef} aria-hidden="true" className={cn('ambient-background', className)}>
      <MeshGradient
        className="ambient-background__shader"
        colors={SHADER_COLORS}
        distortion={0.65}
        speed={reducedMotion ? 0 : 0.25}
        swirl={0.12}
      />
      <MeshGradient
        className="ambient-background__shader ambient-background__shader--highlight"
        colors={SHADER_HIGHLIGHT_COLORS}
        distortion={0.8}
        speed={reducedMotion ? 0 : 0.15}
        swirl={0.2}
      />
      <span className="ambient-background__veil" />
      <span className="ambient-background__pointer" />
    </div>
  )
}
