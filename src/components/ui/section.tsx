import type { ReactNode } from 'react'

import { cn } from '@/lib/utils/cn'

type SectionProps = {
  children: ReactNode
  /** Scroll anchor. Must come from SECTION_IDS in src/data/navigation.ts. */
  id?: string
  /** `invert` is the tonal interlude that breaks the page rhythm. One section, maybe two. */
  tone?: 'default' | 'invert'
  /**
   * Vertical rhythm. Deliberately varied across the page rather than constant - see the
   * spacing scale in .agents/02-design-system.md. Five identical sections in a row make a
   * page feel both longer and cheaper.
   */
  spacing?: 'xl' | 'large' | 'default' | 'small' | 'tight' | 'none'
  className?: string
}

const TONE_CLASS = {
  default: 'bg-canvas text-content',
  invert: 'bg-canvas-invert text-content-invert',
} as const

const SPACING_CLASS = {
  xl: 'py-section-xl',
  large: 'py-section-lg',
  default: 'py-section',
  small: 'py-section-sm',
  tight: 'py-section-tight',
  none: '',
} as const

/**
 * Vertical rhythm and tone for one page section. Sections own their spacing so the page
 * component stays a flat, readable list of sections with no layout glue between them.
 */
export function Section({
  children,
  id,
  tone = 'default',
  spacing = 'default',
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      // `isolate` keeps a section's stacking context to itself, so a parallax or pinned
      // child can never paint over a neighbouring section. The consequence: overlays must
      // portal out to the body - see components/ui/overlay.tsx.
      className={cn('relative isolate', TONE_CLASS[tone], SPACING_CLASS[spacing], className)}
    >
      {children}
    </section>
  )
}
