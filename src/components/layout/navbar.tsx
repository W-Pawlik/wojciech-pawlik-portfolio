import Link from 'next/link'

import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { NAV_ITEM_KEYS, NAV_ITEM_ROUTES } from '@/data/navigation'
import { ROUTES } from '@/data/routes'
import { siteConfig } from '@/data/site'
import { withLocale } from '@/i18n/config'
import { getDictionary, getLocale } from '@/i18n/server'

import { LanguageSwitcher } from './language-switcher'
import { MobileMenu } from './mobile-menu'
import { PrimaryNavigation } from './primary-navigation'

/**
 * Sticky navigation. A Server Component: the bar, the links and the CTA are static, and
 * only the mobile menu needs state — see .agents/03-architecture.md.
 *
 * Full-width bar, not a floating pill: the pill is the SaaS signature this direction is
 * defined against. The brand is a plain wordmark plus a mono descriptor — no invented
 * logotype (.agents/01-brand-and-design.md#logo).
 *
 * The nav items are anchors on the home page, so they work as a table of contents while
 * `/work`, `/services` and `/about` do not exist yet (.agents/specs/01-home.md).
 *
 * TODO(brief): the scrolled state (shrink to `--navbar-height-scrolled`, no surface over
 * the hero) needs client-side scroll state and lands in Phase 04.
 */
export async function Navbar() {
  const dict = await getDictionary()
  const locale = await getLocale()

  const home = withLocale(ROUTES.home, locale)
  const items = NAV_ITEM_KEYS.map((key) => ({
    href: withLocale(NAV_ITEM_ROUTES[key], locale),
    label: dict.nav.items[key],
  }))

  return (
    <header className="sticky top-0 z-40 navbar-in border-b border-line navbar-surface">
      <Container>
        <div className="flex h-[var(--navbar-height)] items-center justify-between gap-6">
          <Link href={`${home}#top`} className="group flex items-baseline gap-3">
            <span className="font-display text-display-card tracking-tight">{siteConfig.name}</span>
            <span className="hidden font-mono text-meta text-content-tertiary uppercase transition-colors duration-[var(--duration-fast)] group-hover:text-accent-strong md:inline">
              {siteConfig.tagline}
            </span>
          </Link>

          <PrimaryNavigation items={items} label={dict.footer.navTitle} />

          <div className="flex items-center gap-2">
            <ButtonLink href={withLocale(ROUTES.contact, locale)} className="hidden lg:inline-flex">
              {dict.nav.cta}
            </ButtonLink>
            <LanguageSwitcher label={dict.common.languageSwitcher} />
            <MobileMenu
              openLabel={dict.nav.openMenu}
              closeLabel={dict.nav.closeMenu}
              items={items}
              cta={{ href: withLocale(ROUTES.contact, locale), label: dict.nav.ctaMobile }}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}
