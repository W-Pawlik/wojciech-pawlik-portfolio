/**
 * Indicative investment brackets. Numbers here, formatting in `formatPrice*`, words in
 * the dictionaries under `pricing.rows` — a price written into copy cannot be formatted
 * per locale, and a price written into a component cannot be audited.
 *
 * These are **orientation**, not a quote: their whole job is answering "are we in the
 * same budget category?" (.agents/00-project-brief.md#co-sprzedajemy-i-za-ile).
 *
 * `to` absent means "from X upwards". `plus` marks a bracket whose upper bound is soft.
 */

export type PricingRow = {
  key: 'landing' | 'websiteCms' | 'advanced' | 'system' | 'ai'
  from: number
  to?: number
  plus?: boolean
  quote?: boolean
}

export const PRICING_ROWS: readonly PricingRow[] = [
  { key: 'landing', from: 1200 },
  { key: 'advanced', from: 1400 },
  { key: 'websiteCms', from: 1400 },
  { key: 'system', from: 0, quote: true },
  { key: 'ai', from: 0, quote: true },
]

export const AFTERCARE_OFFER = {
  maintenance: 150,
} as const
