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
  key: 'website' | 'websiteCms' | 'advanced' | 'system' | 'ai'
  from: number
  to?: number
  plus?: boolean
}

export const PRICING_ROWS: readonly PricingRow[] = [
  { key: 'website', from: 5000, to: 8000 },
  { key: 'websiteCms', from: 8000, to: 18000 },
  { key: 'advanced', from: 15000, to: 30000, plus: true },
  { key: 'system', from: 30000 },
  { key: 'ai', from: 8000 },
]
