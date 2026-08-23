import type { Locale } from '@/i18n/config'

/** Non-breaking space. Written as an escape so it is visible in a diff. */
const NBSP = ' '

/**
 * Intl tags per app locale. TODO(brief): confirm the currency and the tags with the
 * project brief — a price in the wrong convention reads as a foreign site.
 */
const NUMBER_LOCALE: Record<Locale, string> = {
  pl: 'pl-PL',
  en: 'en-GB',
}

/** TODO(brief): currency suffix. Kept as a suffix, not `style: 'currency'`, because
 * most local businesses write it the short way. */
const CURRENCY_SUFFIX = 'zł'

/**
 * `useGrouping: 'always'` is deliberate: some CLDR locales set minimumGroupingDigits
 * to 2, so a four-digit price would render without a separator while a five-digit one
 * gets one — the same column showing two conventions.
 */
function priceFormatter(locale: Locale): Intl.NumberFormat {
  return new Intl.NumberFormat(NUMBER_LOCALE[locale], {
    maximumFractionDigits: 0,
    useGrouping: 'always',
  })
}

/**
 * `1600` -> `1 600 zł`, with non-breaking spaces so a price never wraps across two
 * lines. Groupings that Intl renders as a thin/narrow space are normalised — an
 * invisible difference in the source is a real difference in a diff.
 */
export function formatPrice(amount: number, locale: Locale): string {
  const formatted = priceFormatter(locale).format(amount).replace(/\s/g, NBSP)
  return `${formatted}${NBSP}${CURRENCY_SUFFIX}`
}

/**
 * `od 1 600 zł`. The prefix is passed in rather than hardcoded, because it is copy
 * and copy lives in the dictionaries — see .agents/09-content-and-copy.md.
 */
export function formatPriceFrom(amount: number, locale: Locale, prefix: string): string {
  return `${prefix}${NBSP}${formatPrice(amount, locale)}`
}

/**
 * `5000, 8000` -> `5 000–8 000 zł`. One currency suffix, not two: the bracket is one
 * value, and repeating the unit reads like a table of prices rather than a range.
 *
 * The separator and the optional `+` come from the dictionaries — both are copy.
 */
export function formatPriceRange(
  from: number,
  to: number,
  locale: Locale,
  separator: string,
  plusSuffix = '',
): string {
  const formatter = priceFormatter(locale)
  const lower = formatter.format(from).replace(/\s/g, NBSP)
  const upper = formatter.format(to).replace(/\s/g, NBSP)

  return `${lower}${separator}${upper}${plusSuffix}${NBSP}${CURRENCY_SUFFIX}`
}

/** `1` -> `01`. Section eyebrows and process steps are always two digits. */
export function formatOrdinal(index: number): string {
  return String(index).padStart(2, '0')
}

/** `4.9` -> `4,9` in Polish, `4.9` in English. Ratings, stats, technical values. */
export function formatDecimal(value: number, locale: Locale, fractionDigits = 1): string {
  return new Intl.NumberFormat(NUMBER_LOCALE[locale], {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
}
