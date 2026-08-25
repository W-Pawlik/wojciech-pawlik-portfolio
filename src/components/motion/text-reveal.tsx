'use client'

import { useInView } from '@/hooks/use-in-view'
import { STAGGER } from '@/lib/motion/tokens'
import { cn } from '@/lib/utils/cn'

type TextRevealProps = {
  /**
   * One entry per visual line. Lines are authored explicitly rather than split
   * automatically, because where a headline breaks is a design decision.
   */
  lines: readonly string[]
  as?: 'h1' | 'h2' | 'h3' | 'p'
  /** Play as soon as the element mounts instead of on scroll. */
  immediate?: boolean
  delay?: number
  stagger?: number
  className?: string
  lineClassName?: string
}

/**
 * Headline that slides out line by line from behind a mask.
 *
 * CSS keyframes plus one IntersectionObserver - same implementation note as `Reveal`:
 * no animation library on the critical path (ADR-0009).
 *
 * Accessibility: the visible text is the real text - the mask is a wrapper, not a
 * replacement - so screen readers and search engines see the full headline even before
 * the animation runs.
 */
export function TextReveal({
  lines,
  as: Tag = 'h2',
  immediate = false,
  delay = 0,
  stagger = STAGGER.tight,
  className,
  lineClassName,
}: TextRevealProps) {
  const { ref, inView } = useInView<HTMLHeadingElement & HTMLParagraphElement>()
  const visible = immediate || inView

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={line} className="mask-row">
          <span
            style={{ animationDelay: `${delay + index * stagger}s` }}
            className={cn('block', visible ? 'reveal-shown' : 'reveal-hidden', lineClassName)}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
