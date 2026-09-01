import type { MetadataRoute } from 'next'

import { INDEXABLE_ROUTES } from '@/data/routes'
import { siteUrl } from '@/data/site'
import { locales, withLocale } from '@/i18n/config'

/**
 * One entry per route per locale, each pointing at its translations through
 * `alternates.languages`, so search engines treat them as translations rather than
 * duplicates.
 *
 * The alternates mirror `buildMetadata()` on purpose - including `x-default` for the
 * the Polish fallback path. The unprefixed path redirects there. hreflang stated in
 * the sitemap and in the page must agree; disagreeing sets make both untrustworthy.
 *
 * No `lastModified`: it would have to come from the build clock, which would claim the
 * content changed on every deploy. It belongs here once there is real per-page content
 * with a real modification date.
 *
 * Routes come from `src/data/routes.ts`. A page that is not listed there is missing from
 * here too, and nothing else will tell you.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.flatMap((route) => {
    const languages = {
      ...Object.fromEntries(
        locales.map((locale) => [locale, `${siteUrl}${withLocale(route.paths[locale], locale)}`]),
      ),
      'x-default': `${siteUrl}${withLocale(route.paths.pl, 'pl')}`,
    }

    return locales.map((locale) => ({
      url: `${siteUrl}${withLocale(route.paths[locale], locale)}`,
      alternates: { languages },
      ...(route.priority !== undefined && { priority: route.priority }),
    }))
  })
}
