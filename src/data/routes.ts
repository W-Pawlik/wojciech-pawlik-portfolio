/**
 * Every route of the site, in one place.
 *
 * This is the source of truth for the sitemap — and the only mechanism that keeps a new
 * page from being invisible to search engines. A route that is not listed here still
 * works when typed by hand, and nothing else will ever tell you it is missing.
 * See ADR-0006 and .agents/checklists/new-route.md.
 *
 * Paths are written **without** the locale prefix; `withLocale()` adds it. Slugs follow
 * the main language (they are indexed) and are shared between locales (ADR-0003).
 *
 * TODO(brief): add the pages from the brief. Every route needs a reason — a search
 * intent or a sales purpose — not a slot in the menu.
 */

type Route = {
  /** Path without the locale prefix, always leading-slash. */
  path: string
  /**
   * Relative priority for the sitemap. The home page is the entry point; detail pages
   * sit below it. Left undefined means "let the crawler decide", which is fine.
   */
  priority?: number
}

export const ROUTES = {
  home: '/',
  work: '/work',
  services: '/services',
  pricing: '/pricing',
  about: '/about',
  contact: '/contact',
  planik: '/work/planik',
  creditRisk: '/work/credit-risk-system',
  /** Internal design-system reference. Deliberately absent from `INDEXABLE_ROUTES`. */
  system: '/system',
} as const

export const SERVICE_ROUTES = {
  websites: `${ROUTES.services}/websites`,
  systems: `${ROUTES.services}/systems`,
  ai: `${ROUTES.services}/ai`,
} as const

export type RouteKey = keyof typeof ROUTES

/**
 * Routes that belong in the sitemap and in hreflang sets.
 *
 * `/system` never appears here: it is excluded from the index by metadata, not by
 * robots.txt — those two mechanisms are mutually exclusive (.agents/08).
 */
export const INDEXABLE_ROUTES: readonly Route[] = [
  { path: ROUTES.home, priority: 1 },
  { path: ROUTES.work, priority: 0.8 },
  { path: ROUTES.services, priority: 0.8 },
  { path: ROUTES.pricing, priority: 0.7 },
  { path: ROUTES.about, priority: 0.7 },
  { path: ROUTES.planik, priority: 0.7 },
  { path: ROUTES.creditRisk, priority: 0.7 },
  { path: ROUTES.contact, priority: 0.6 },
  { path: SERVICE_ROUTES.websites, priority: 0.65 },
  { path: SERVICE_ROUTES.systems, priority: 0.65 },
  { path: SERVICE_ROUTES.ai, priority: 0.65 },
]
