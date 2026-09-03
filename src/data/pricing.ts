/**
 * Indicative price brackets. Numbers here, formatting in `formatPrice*`, words in
 * the dictionaries under `pricing.rows` - a price written into copy cannot be formatted
 * per locale, and a price written into a component cannot be audited.
 *
 * These are **orientation**, not a quote: their whole job is answering "are we in the
 * same budget category?" (.agents/00-project-brief.md#co-sprzedajemy-i-za-ile).
 *
 * `to` absent means "from X upwards". `plus` marks a bracket whose upper bound is soft.
 */

export type PricingRow = {
  key: 'landing' | 'businessWebsite' | 'extendedWebsite' | 'system' | 'ai'
  group: 'websites' | 'largerProjects'
  from: number
  to?: number
  plus?: boolean
  quote?: boolean
}

export const PRICING_ROWS: readonly PricingRow[] = [
  { key: 'landing', group: 'websites', from: 1200 },
  { key: 'businessWebsite', group: 'websites', from: 1400 },
  { key: 'extendedWebsite', group: 'websites', from: 1800 },
  { key: 'system', group: 'largerProjects', from: 0, quote: true },
  { key: 'ai', group: 'largerProjects', from: 0, quote: true },
]

export const LANDING_PRICING_KEYS = ['landing', 'businessWebsite', 'extendedWebsite'] as const

export const AFTERCARE_OFFER = {
  maintenanceFrom: 150,
  updatesHourly: 100,
} as const

export const PROMOTION_OFFER = {
  claimed: 0,
  limit: 3,
  discount: 300,
} as const
