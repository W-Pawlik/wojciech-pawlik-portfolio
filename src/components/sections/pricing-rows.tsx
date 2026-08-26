import type { Dictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import { PRICING_ROWS, PROMOTION_OFFER, type PricingRow } from '@/data/pricing'
import { interpolate } from '@/i18n/dictionaries'
import { formatPrice, formatPriceFrom, formatPriceRange } from '@/lib/utils/format'

type PricingGroupKey = 'websites' | 'largerProjects'

type PricingRowsProps = {
  common: Dictionary['common']
  copy: Dictionary['pricing']
  locale: Locale
}

const PRICING_GROUPS: readonly PricingGroupKey[] = ['websites', 'largerProjects']

function priceFor(
  row: PricingRow,
  common: Dictionary['common'],
  copy: Dictionary['pricing'],
  locale: Locale,
) {
  if (row.quote) return copy.quote

  return row.to === undefined
    ? formatPriceFrom(row.from, locale, common.from)
    : formatPriceRange(row.from, row.to, locale, common.to, row.plus ? copy.plusSuffix : '')
}

export function PricingRows({ common, copy, locale }: PricingRowsProps) {
  return (
    <>
      <div className="mb-16 grid grid-cols-12 gap-grid border-y border-accent bg-accent-subtle px-5 py-6 lg:px-6">
        <div className="col-span-12 lg:col-span-8">
          <p className="font-mono text-meta text-accent-strong uppercase">{copy.promotion.label}</p>
          <p className="mt-3 max-w-measure font-display text-display-project text-content">
            {interpolate(copy.promotion.headline, {
              limit: PROMOTION_OFFER.limit,
              price: formatPrice(PROMOTION_OFFER.from, locale),
            })}
          </p>
          <p className="mt-2 max-w-measure text-body-sm text-content-secondary">
            {copy.promotion.body}
          </p>
        </div>
        <p className="col-span-12 mt-5 font-mono text-meta text-accent-strong lg:col-span-4 lg:mt-0 lg:text-right">
          {interpolate(copy.promotion.counter, {
            claimed: PROMOTION_OFFER.claimed,
            limit: PROMOTION_OFFER.limit,
          })}
        </p>
      </div>

      {PRICING_GROUPS.map((groupKey) => {
        const rows = PRICING_ROWS.filter((row) => row.group === groupKey)
        const group = copy.groups[groupKey]

        return (
          <section key={groupKey} className="mt-16 first:mt-0">
            <div className="grid grid-cols-12 gap-grid border-t border-line pt-5">
              <p className="col-span-12 font-mono text-meta text-accent uppercase lg:col-span-3">
                {group.label}
              </p>
              <p className="col-span-12 mt-2 max-w-measure text-body-sm text-content-secondary lg:col-span-5 lg:col-start-5 lg:mt-0">
                {group.intro}
              </p>
            </div>

            <ul className="border-t border-line">
              {rows.map((row, index) => {
                const rowCopy = copy.rows[row.key]

                return (
                  <li
                    key={row.key}
                    className="grid grid-cols-12 gap-grid border-b border-line py-8"
                  >
                    <div className="col-span-12 lg:col-span-8">
                      <div className="flex items-baseline gap-4">
                        <p className="font-mono text-meta text-content-tertiary">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="font-display text-display-card">{rowCopy.title}</h3>
                      </div>
                      <p className="mt-3 max-w-measure text-body-sm text-content-secondary">
                        {rowCopy.body}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {rowCopy.details.map((detail) => (
                          <li
                            key={detail}
                            className="border-l border-accent pl-2 font-mono text-meta text-content-tertiary"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="col-span-12 mt-6 font-display text-display-project text-accent lg:col-span-4 lg:mt-0 lg:text-right">
                      {priceFor(row, common, copy, locale)}
                    </p>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}

      <div className="mt-16 grid grid-cols-12 gap-grid border-y border-line py-6">
        <p className="col-span-12 font-mono text-meta text-content-tertiary uppercase lg:col-span-3">
          {copy.extensionsLabel}
        </p>
        <ul className="col-span-12 mt-3 flex flex-wrap gap-x-6 gap-y-3 lg:col-span-8 lg:col-start-5 lg:mt-0">
          {copy.extensions.map((extension) => (
            <li
              key={extension}
              className="border-l border-accent pl-2 font-mono text-meta text-content-secondary"
            >
              {extension}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-12 gap-grid border-b border-line py-8">
        <p className="col-span-12 font-mono text-meta text-content-tertiary uppercase lg:col-span-3">
          {copy.materials.label}
        </p>
        <div className="col-span-12 mt-5 grid gap-8 lg:col-span-8 lg:col-start-5 lg:mt-0 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-display-card">{copy.materials.contentTitle}</h3>
            <p className="mt-3 text-body-sm text-content-secondary">{copy.materials.contentBody}</p>
          </div>
          <div>
            <h3 className="font-display text-display-card">{copy.materials.imagesTitle}</h3>
            <p className="mt-3 text-body-sm text-content-secondary">{copy.materials.imagesBody}</p>
          </div>
        </div>
      </div>
    </>
  )
}
