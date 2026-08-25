import { LANDING_PRICING_KEYS, PRICING_ROWS, PROMOTION_OFFER } from '@/data/pricing'
import type { Dictionary } from '@/i18n/dictionaries'
import { interpolate } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import { formatPrice, formatPriceFrom } from '@/lib/utils/format'

type PricingPreviewProps = {
  common: Dictionary['common']
  copy: Dictionary['pricing']
  locale: Locale
}

export function PricingPreview({ common, copy, locale }: PricingPreviewProps) {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-12 gap-grid border-y border-accent py-5">
        <div className="col-span-12 lg:col-span-8">
          <p className="font-mono text-meta text-accent uppercase">{copy.promotion.label}</p>
          <p className="text-content-primary mt-2 max-w-measure text-body-sm">
            {interpolate(copy.promotion.body, {
              limit: PROMOTION_OFFER.limit,
              price: formatPrice(PROMOTION_OFFER.from, locale),
            })}
          </p>
        </div>
        <p className="col-span-12 mt-4 font-mono text-meta text-content-secondary lg:col-span-4 lg:mt-0 lg:text-right">
          {interpolate(copy.promotion.counter, {
            claimed: PROMOTION_OFFER.claimed,
            limit: PROMOTION_OFFER.limit,
          })}
        </p>
      </div>

      <ul className="mt-12 border-t border-line">
        {LANDING_PRICING_KEYS.map((key, index) => {
          const row = PRICING_ROWS.find((pricingRow) => pricingRow.key === key)
          if (!row) return null

          const preview = copy.landing.rows[key]

          return (
            <li key={key} className="grid grid-cols-12 gap-grid border-b border-line py-7">
              <p className="col-span-12 font-mono text-meta text-content-tertiary lg:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="col-span-12 lg:col-span-8">
                <p className="font-mono text-meta text-content-tertiary">{preview.need}</p>
                <h3 className="mt-2 font-display text-display-card">{copy.rows[key].title}</h3>
                <p className="mt-2 max-w-measure text-body-sm text-content-secondary">
                  {preview.solution}
                </p>
              </div>
              <p className="text-content-primary col-span-12 mt-5 font-display text-display-card lg:col-span-3 lg:mt-0 lg:text-right">
                {formatPriceFrom(row.from, locale, common.from)}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
