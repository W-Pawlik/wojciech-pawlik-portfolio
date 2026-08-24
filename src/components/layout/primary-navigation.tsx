'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavigationItem = { href: string; label: string }

export function PrimaryNavigation({ items, label }: { items: NavigationItem[]; label: string }) {
  const pathname = usePathname()

  return (
    <nav aria-label={label} className="hidden items-center gap-8 lg:flex">
      {items.map((item) => {
        const isLocaleHome = item.href.split('/').length === 2
        const active =
          pathname === item.href || (!isLocaleHome && pathname.startsWith(`${item.href}/`))
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={`relative text-body-sm transition-colors duration-[var(--duration-fast)] hover:text-content ${
              active
                ? 'text-content after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-accent'
                : 'text-content-secondary'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
