'use client'

import Link from 'next/link'
import { useState } from 'react'

import { LanguageSwitcher } from '@/components/layout/language-switcher'
import { BrandLogo } from '@/components/ui/brand-logo'
import { Button, ButtonLink } from '@/components/ui/button'
import { Overlay } from '@/components/ui/overlay'
import { formatOrdinal } from '@/lib/utils/format'
import { cn } from '@/lib/utils/cn'

type MobileMenuProps = {
  /** Copy comes in as props: a client component cannot call getDictionary(). */
  logoName: string
  homeHref: string
  openLabel: string
  closeLabel: string
  languageLabel: string
  items: ReadonlyArray<{ href: string; label: string }>
  /** The primary CTA. On a phone it is the only button in the menu, so it sits last. */
  cta: { href: string; label: string }
}

/**
 * The navbar's only client island. The bar itself, its links and the CTA stay on the
 * server - this exists because a menu has open/closed state, and nothing else does
 * (.agents/03-architecture.md).
 *
 * The menu follows the navbar pattern used by the Vanta build: the panel fills the
 * viewport, owns its close control, and the trigger morphs into a close icon while it
 * opens. Escape, the focus trap and the scroll lock come from `Overlay`.
 */
export function MobileMenu({
  logoName,
  homeHref,
  openLabel,
  closeLabel,
  languageLabel,
  items,
  cta,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative z-10 lg:hidden">
        <Button
          variant="quiet"
          onClick={() => setOpen((current) => !current)}
          className="min-h-12 min-w-12 cursor-pointer touch-manipulation border border-line-strong"
          aria-label={open ? closeLabel : openLabel}
          aria-hidden={open}
          aria-expanded={open}
          aria-controls="mobile-menu"
          tabIndex={open ? -1 : undefined}
        >
          <span aria-hidden="true" className="relative size-5">
            <span
              className={cn(
                'absolute left-0 h-px w-full bg-current transition-[top,transform] duration-fast',
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1/3',
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-px w-full bg-current transition-[top,transform] duration-fast',
                open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-2/3 -translate-y-1/2',
              )}
            />
          </span>
          <span className="sr-only">{open ? closeLabel : openLabel}</span>
        </Button>
      </div>

      <Overlay
        open={open}
        onClose={() => setOpen(false)}
        label={openLabel}
        panelId="mobile-menu"
        rootClassName="z-50"
        className="relative !inset-0 !h-svh !bg-canvas px-gutter pt-[calc(var(--navbar-height)+var(--spacing-gutter))] pb-gutter"
      >
        <Link
          href={homeHref}
          onClick={() => setOpen(false)}
          className="absolute top-[calc(var(--navbar-height)/2)] left-gutter -translate-y-1/2"
        >
          <BrandLogo name={logoName} />
        </Link>

        <div className="absolute top-[calc(var(--navbar-height)/2)] right-gutter -translate-y-1/2">
          <Button
            variant="quiet"
            onClick={() => setOpen(false)}
            className="min-h-12 min-w-12 cursor-pointer touch-manipulation border border-line-strong"
            aria-label={closeLabel}
          >
            <span aria-hidden="true" className="relative size-5">
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 -rotate-45 bg-current" />
            </span>
            <span className="sr-only">{closeLabel}</span>
          </Button>
        </div>

        <div className="flex h-full flex-col">
          <nav aria-label={openLabel}>
            <ul className="border-t border-line">
              {items.map((item, index) => (
                <li key={item.href} className="border-b border-line py-4">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 font-display text-display-card text-content"
                  >
                    <span className="font-mono text-meta text-accent-strong">
                      {formatOrdinal(index + 1)}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <LanguageSwitcher label={languageLabel} />
            <ButtonLink href={cta.href} size="lg" fullWidth onClick={() => setOpen(false)}>
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </Overlay>
    </>
  )
}
