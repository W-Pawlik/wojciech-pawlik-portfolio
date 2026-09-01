import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils/cn'

type TextLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  tone?: 'default' | 'invert'
  accent?: boolean
  /** `up-right` for anything that leaves the page. */
  arrow?: 'left' | 'right' | 'up-right' | 'none'
}

/**
 * The preferred CTA in body copy and in rows: a text link with a trailing arrow and a
 * hairline that draws itself on hover
 * (.agents/01-brand-and-design.md#ui--decyzje-zapisane-w-kodzie).
 *
 * A button would be louder than the content in most of those places; the art direction
 * asks for one primary button per view, not five.
 *
 * The underline is a pseudo-element on the label rather than `text-decoration`, so it
 * animates from the left instead of appearing all at once - and the arrow moves with the
 * same hover, so it reads as one gesture.
 */
export function TextLink({
  tone = 'default',
  accent = false,
  arrow = 'right',
  className,
  children,
  ...props
}: TextLinkProps) {
  return (
    <Link className={cn('group inline-flex items-baseline gap-2 text-body', className)} {...props}>
      <span
        className={cn(
          'relative',
          'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0',
          'after:transition-transform after:duration-base after:ease-out-quint',
          'group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100',
          tone === 'invert'
            ? accent
              ? 'text-content-invert after:bg-accent'
              : 'text-content-invert after:bg-content-invert'
            : 'text-content after:bg-accent',
        )}
      >
        {children}
      </span>
      {arrow !== 'none' && (
        <span
          aria-hidden="true"
          className={cn(
            'inline-block transition-transform duration-fast ease-out-quart group-hover:translate-x-1',
            tone === 'invert' ? (accent ? 'text-accent' : 'text-content-invert') : 'text-content',
          )}
        >
          {arrow === 'left' ? '←' : arrow === 'up-right' ? '↗' : '→'}
        </span>
      )}
    </Link>
  )
}
