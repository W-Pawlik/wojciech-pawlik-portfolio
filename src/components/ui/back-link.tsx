'use client'

import { useRouter } from 'next/navigation'
import type { ComponentPropsWithoutRef, MouseEvent } from 'react'

import { cn } from '@/lib/utils/cn'

type BackLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'onClick'> & {
  /** Used when client-side history is unavailable, for example with JavaScript disabled. */
  href: string
  tone?: 'default' | 'invert'
  accent?: boolean
}

/**
 * Returns to the actual previous page instead of assuming a single parent route.
 * The href remains a useful no-JavaScript fallback and documents the natural parent route.
 */
export function BackLink({
  href,
  tone = 'default',
  accent = false,
  className,
  children,
  ...props
}: BackLinkProps) {
  const router = useRouter()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
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

    event.preventDefault()
    router.back()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn('group inline-flex items-baseline gap-2 text-body', className)}
      {...props}
    >
      <span
        className={cn(
          'relative',
          'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0',
          'after:transition-transform after:duration-[var(--duration-base)] after:ease-out-quint',
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
      <span
        aria-hidden="true"
        className={cn(
          'inline-block transition-transform duration-[var(--duration-fast)] ease-out-quart group-hover:-translate-x-1',
          tone === 'invert' ? (accent ? 'text-accent' : 'text-content-invert') : 'text-content',
        )}
      >
        ←
      </span>
    </a>
  )
}
