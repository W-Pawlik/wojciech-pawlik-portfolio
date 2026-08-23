import type { ReactNode } from 'react'

import { cn } from '@/lib/utils/cn'

import { Headline } from './headline'
import { SectionLabel } from './section-label'

type SectionHeaderProps = {
  index: number
  label: string
  headlineLines: readonly string[]
  /** Short supporting copy, placed in the right-hand columns on desktop. */
  aside?: ReactNode
  tone?: 'default' | 'invert'
  className?: string
  headlineClassName?: string
}

/**
 * The recurring section opener: mono eyebrow, headline in the left columns, short
 * paragraph in the right ones.
 *
 * Not every section should use it. Once three sections in a row open the same way, the
 * page starts reading as a template — break the pattern deliberately by composing
 * `SectionLabel` and `Headline` directly (.agents/01-brand-and-design.md).
 */
export function SectionHeader({
  index,
  label,
  headlineLines,
  aside,
  tone = 'default',
  className,
  headlineClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn('grid grid-cols-12 gap-grid', className)}>
      <div className="col-span-12 lg:col-span-7">
        <SectionLabel index={index} tone={tone} className="mb-7">
          {label}
        </SectionLabel>
        <Headline lines={headlineLines} className={headlineClassName} />
      </div>

      {aside && (
        <div
          className={cn(
            'col-span-12 self-end text-body lg:col-span-4 lg:col-start-9',
            tone === 'invert' ? 'text-content-invert-secondary' : 'text-content-secondary',
          )}
        >
          {aside}
        </div>
      )}
    </div>
  )
}
