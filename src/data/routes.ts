/**
 * Every route of the site, in one place.
 *
 * Polish and English paths are explicit so links, metadata and the sitemap all describe
 * the actual URL that belongs to each language.
 */

import type { Locale } from '@/i18n/config'

export const ROUTES = {
  home: '/',
  work: '/realizacje',
  services: '/uslugi',
  pricing: '/cennik',
  about: '/o-mnie',
  contact: '/kontakt',
  planik: '/realizacje/planik',
  creditRisk: '/realizacje/system-oceny-ryzyka-kredytowego',
  /** Internal design-system reference. Deliberately absent from INDEXABLE_ROUTES. */
  system: '/system',
} as const

export type RouteKey = keyof typeof ROUTES

export const ROUTE_PATHS: Record<RouteKey, Record<Locale, string>> = {
  home: { pl: '/', en: '/' },
  work: { pl: '/realizacje', en: '/work' },
  services: { pl: '/uslugi', en: '/services' },
  pricing: { pl: '/cennik', en: '/pricing' },
  about: { pl: '/o-mnie', en: '/about' },
  contact: { pl: '/kontakt', en: '/contact' },
  planik: { pl: '/realizacje/planik', en: '/work/planik' },
  creditRisk: {
    pl: '/realizacje/system-oceny-ryzyka-kredytowego',
    en: '/work/credit-risk-system',
  },
  system: { pl: '/system', en: '/system' },
}

export function routePath(key: RouteKey, locale: Locale): string {
  return ROUTE_PATHS[key][locale]
}

export function routeHrefPath(key: RouteKey, locale: Locale): string {
  const path = routePath(key, locale)
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

export const SERVICE_ROUTE_PATHS = {
  websites: { pl: '/uslugi/strony-internetowe', en: '/services/websites' },
  systems: { pl: '/uslugi/systemy-dla-firm', en: '/services/systems' },
  ai: { pl: '/uslugi/automatyzacje-ai', en: '/services/ai-automation' },
} as const

/** Polish paths retained as the default-language data surface. */
export const SERVICE_ROUTES = {
  websites: SERVICE_ROUTE_PATHS.websites.pl,
  systems: SERVICE_ROUTE_PATHS.systems.pl,
  ai: SERVICE_ROUTE_PATHS.ai.pl,
} as const

export const PROJECT_ROUTE_PATHS: Record<string, Record<Locale, string>> = {
  dzendzera: { pl: '/realizacje/dzendzera', en: '/work/dzendzera-photography' },
  mawAuto: { pl: '/realizacje/maw-autoserwis', en: '/work/maw-autoservice' },
  agnieszkaLuzarska: {
    pl: '/realizacje/agnieszka-luzarska-strona',
    en: '/work/agnieszka-luzarska-website',
  },
  vantaDetailing: { pl: '/realizacje/vanta-detailing', en: '/work/vanta-detailing' },
  planik: { pl: '/realizacje/planik', en: '/work/planik' },
  creditRisk: {
    pl: '/realizacje/system-oceny-ryzyka-kredytowego',
    en: '/work/credit-risk-system',
  },
}

export type LocalizedRoute = {
  path: string
  paths: Record<Locale, string>
  priority?: number
}

/**
 * Routes that belong in the sitemap and in hreflang sets.
 *
 * /system never appears here: it is excluded from the index by metadata, not by robots.txt.
 */
export const INDEXABLE_ROUTES: readonly LocalizedRoute[] = [
  { path: ROUTES.home, paths: ROUTE_PATHS.home, priority: 1 },
  { path: ROUTES.work, paths: ROUTE_PATHS.work, priority: 0.8 },
  { path: ROUTES.services, paths: ROUTE_PATHS.services, priority: 0.8 },
  { path: ROUTES.pricing, paths: ROUTE_PATHS.pricing, priority: 0.7 },
  { path: ROUTES.about, paths: ROUTE_PATHS.about, priority: 0.7 },
  { path: ROUTES.contact, paths: ROUTE_PATHS.contact, priority: 0.6 },
  ...Object.entries(PROJECT_ROUTE_PATHS).map(([key, paths]) => ({
    path: paths.pl,
    paths,
    priority: key === 'creditRisk' ? 0.6 : 0.7,
  })),
  ...Object.entries(SERVICE_ROUTE_PATHS).map(([key, paths]) => ({
    path: paths.pl,
    paths,
    priority: key === 'ai' ? 0.65 : 0.65,
  })),
]

export function localizedPathFor(pathname: string, locale: Locale): string | undefined {
  const bare = pathname.replace(/^\/(?:pl|en)(?=\/|$)/, '') || '/'
  const allPaths = [
    ...Object.values(ROUTE_PATHS),
    ...Object.values(SERVICE_ROUTE_PATHS),
    ...Object.values(PROJECT_ROUTE_PATHS),
  ]

  for (const paths of allPaths) {
    if (paths.pl === bare || paths.en === bare) return paths[locale]
  }

  return undefined
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const target = localizedPathFor(pathname, locale)
  if (target !== undefined) return target === '/' ? `/${locale}` : `/${locale}${target}`

  const bare = pathname.replace(/^\/(?:pl|en)(?=\/|$)/, '') || '/'
  return bare === '/' ? `/${locale}` : `/${locale}${bare}`
}

/** Adds the locale prefix after resolving a known PL/EN path to its local equivalent. */
export function localizedHref(pathname: string, locale: Locale): string {
  const target = localizedPathFor(pathname, locale) ?? pathname
  return target === '/' ? `/${locale}` : `/${locale}${target}`
}
