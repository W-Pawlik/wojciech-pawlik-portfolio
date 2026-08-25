'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { locales, localeMeta, withLocale, type Locale } from '@/i18n/config'
import { cn } from '@/lib/utils/cn'

type LanguageSwitcherProps = {
  /** From the dictionary - a client component cannot read it itself. */
  label: string
  className?: string
}

/**
 * Swaps the locale segment of the current path, keeping the visitor on the same page.
 *
 * Client-side because it needs the current pathname. Rendered as links rather than a
 * select so it works without JavaScript and is crawlable.
 *
 * A single-locale project should not render this at all - hence the early return instead
 * of a one-item list, which would look like a broken control.
 */
export function LanguageSwitcher({ label, className }: LanguageSwitcherProps) {
  const pathname = usePathname()

  if (locales.length < 2) return null

  const current = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  return (
    <nav aria-label={label} className={cn('flex items-center gap-1', className)}>
      {locales.map((locale: Locale) => (
        <Link
          key={locale}
          href={withLocale(pathname, locale)}
          hrefLang={locale}
          aria-current={locale === current ? 'true' : undefined}
          className={cn(
            'px-2 py-1 font-mono text-label uppercase transition-colors duration-[var(--duration-fast)]',
            locale === current ? 'text-content' : 'text-content-tertiary hover:text-content',
          )}
        >
          {localeMeta[locale].short}
        </Link>
      ))}
    </nav>
  )
}
