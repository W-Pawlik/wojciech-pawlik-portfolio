'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button, ButtonLink } from '@/components/ui/button'
import { Overlay } from '@/components/ui/overlay'

type MobileMenuProps = {
  /** Copy comes in as props: a client component cannot call getDictionary(). */
  openLabel: string
  closeLabel: string
  items: ReadonlyArray<{ href: string; label: string }>
  /** The primary CTA. On a phone it is the only button in the menu, so it sits last. */
  cta: { href: string; label: string }
}

/**
 * The navbar's only client island. The bar itself, its links and the CTA stay on the
 * server - this exists because a menu has open/closed state, and nothing else does
 * (.agents/03-architecture.md).
 *
 * Escape, the focus trap and the scroll lock come from `Overlay`, so they are not
 * reimplemented here.
 */
export function MobileMenu({ openLabel, closeLabel, items, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative z-10 lg:hidden">
        <Button
          variant="quiet"
          onClick={() => setOpen(true)}
          className="min-h-12 min-w-12 cursor-pointer touch-manipulation"
          aria-label={openLabel}
          aria-expanded={open}
        >
          <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
          <span className="sr-only">{openLabel}</span>
        </Button>
      </div>

      <Overlay open={open} onClose={() => setOpen(false)} label={openLabel}>
        <div className="flex h-full flex-col">
          <Button variant="quiet" onClick={() => setOpen(false)} className="self-end">
            {closeLabel}
          </Button>

          <nav aria-label={openLabel} className="mt-8">
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-display-project text-content"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Pushed to the bottom of the drawer: the CTA is the last thing under a thumb,
              and it must not sit next to the nav items competing with them. */}
          <ButtonLink
            href={cta.href}
            size="lg"
            fullWidth
            onClick={() => setOpen(false)}
            className="mt-auto"
          >
            {cta.label}
          </ButtonLink>
        </div>
      </Overlay>
    </>
  )
}
