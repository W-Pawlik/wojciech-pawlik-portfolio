import { NextResponse, type NextRequest } from 'next/server'

import { defaultLocale, locales } from '@/i18n/config'
import { localizedPathFor } from '@/data/routes'

/**
 * Polish is the primary market. The language switcher provides an explicit path to the
 * English version, so an unprefixed URL always resolves to Polish instead of guessing
 * from browser preferences.
 */
export function pickLocale(_header: string | null) {
  return defaultLocale
}

function prefixedPath(locale: (typeof locales)[number], path: string) {
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locale = locales.find(
    (entry) => pathname === `/${entry}` || pathname.startsWith(`/${entry}/`),
  )

  if (locale) {
    const bare = pathname.slice(locale.length + 1) || '/'
    const canonical = localizedPathFor(bare, locale)
    if (canonical !== undefined && canonical !== bare) {
      const url = request.nextUrl.clone()
      url.pathname = prefixedPath(locale, canonical)
      return NextResponse.redirect(url)
    }
    return
  }

  const canonical = localizedPathFor(pathname, defaultLocale) ?? pathname
  const url = request.nextUrl.clone()
  url.pathname = prefixedPath(defaultLocale, canonical)

  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals and anything with a file extension (images, robots.txt,
  // sitemap.xml, the manifest) — those must not be locale-prefixed.
  matcher: ['/((?!_next|.*\\.).*)'],
}
