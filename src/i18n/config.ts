/**
 * Locale configuration. Kept free of any Next.js import so it can be used from
 * Server Components, Client Components, Route Handlers and the proxy alike.
 *
 * TODO(brief): a single-language project keeps this structure and lists one locale -
 * that costs a URL prefix and buys the ability to add a language later without
 * touching a component. Remove the extra locale here *and* its dictionary.
 *
 * See .agents/decisions/0003-i18n-routing-and-dictionaries.md
 */
export const locales = ['pl', 'en'] as const

export type Locale = (typeof locales)[number]

/** The home market. Used as the fallback everywhere a locale cannot be determined. */
export const defaultLocale: Locale = 'pl'

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value)
}

export const localeMeta: Record<Locale, { short: string; name: string; htmlLang: string }> = {
  pl: { short: 'PL', name: 'Polski', htmlLang: 'pl' },
  en: { short: 'EN', name: 'English', htmlLang: 'en' },
}

/** Open Graph locale tags. Separate from `htmlLang` because the format differs. */
export const openGraphLocale: Record<Locale, string> = {
  pl: 'pl_PL',
  en: 'en_GB',
}

/** Strips a leading locale segment so a path can be re-prefixed with another locale. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return '/'
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1)
  }
  return pathname
}

/** `('/kontakt', 'en')` -> `/en/kontakt`; route-specific translated slugs live in `data/routes`. */
export function withLocale(pathname: string, locale: Locale): string {
  const bare = stripLocale(pathname)
  return bare === '/' ? `/${locale}` : `/${locale}${bare}`
}
