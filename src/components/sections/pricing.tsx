import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { TextLink } from '@/components/ui/text-link'
import { SECTION_IDS } from '@/data/navigation'
import { AFTERCARE_OFFER, PRICING_ROWS } from '@/data/pricing'
import { ROUTES } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'
import { formatPrice, formatPriceFrom, formatPriceRange } from '@/lib/utils/format'

/**
 * Indicative brackets, set editorially: name on the left, price on the right, a hairline
 * between. Never three pricing cards - packages would contradict the promise that every
 * project is scoped individually (.agents/00-project-brief.md#co-sprzedajemy-i-za-ile).
 *
 * Its real job is filtering: a visitor who is not in this budget category finds out here
 * instead of on a call.
 */
export async function PricingSection({ headlineAs = 'h2' }: { headlineAs?: 'h1' | 'h2' }) {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <Section id={SECTION_IDS.pricing} spacing="large">
      <Container>
        <SectionHeader
          index={7}
          label={dict.pricing.label}
          headlineLines={dict.pricing.headline}
          headlineAs={headlineAs}
          aside={<p>{dict.pricing.intro}</p>}
        />

        <p className="mt-6 max-w-measure text-body-sm text-accent-strong">
          {dict.pricing.minimumRateNote}
        </p>

        <div className="mt-20 grid grid-cols-12 gap-grid border-y border-line py-7">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-meta text-accent uppercase">
              {dict.pricing.aftercareLabel}
            </p>
            <h2 className="mt-4 max-w-[24rem] font-display text-display-project">
              {dict.pricing.aftercareTitle}
            </h2>
            <p className="mt-4 max-w-[34rem] text-body text-content-secondary">
              {dict.pricing.aftercareBody}
            </p>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-5 lg:col-start-8 lg:mt-0">
            <p className="font-mono text-meta text-content-tertiary uppercase">
              {dict.pricing.maintenanceLabel}
            </p>
            <p className="mt-2 font-display text-display-project text-accent">
              {dict.pricing.maintenanceLimit} {formatPrice(AFTERCARE_OFFER.maintenance, locale)} /{' '}
              {dict.pricing.maintenancePeriod}
            </p>
            <p className="mt-3 text-body-sm text-content-secondary">
              {dict.pricing.maintenanceBody}
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-measure text-body-sm text-content-tertiary">
          {dict.pricing.aftercareNote}
        </p>

        <ul className="mt-16 border-t border-line">
          {PRICING_ROWS.map((row) => {
            const copy = dict.pricing.rows[row.key]
            const price = row.quote
              ? dict.pricing.quote
              : row.to === undefined
                ? formatPriceFrom(row.from, locale, dict.common.from)
                : formatPriceRange(
                    row.from,
                    row.to,
                    locale,
                    dict.common.to,
                    row.plus ? dict.pricing.plusSuffix : '',
                  )

            return (
              <li
                key={row.key}
                className="grid grid-cols-12 items-baseline gap-grid border-b border-line py-8"
              >
                <h3 className="col-span-12 font-display text-display-card lg:col-span-5">
                  {copy.title}
                </h3>
                <p className="col-span-12 mt-2 text-body-sm text-content-secondary lg:col-span-4 lg:mt-0">
                  {copy.body}
                </p>
                <p className="col-span-12 mt-3 font-display text-display-project lg:col-span-3 lg:mt-0 lg:text-right">
                  {price}
                </p>
              </li>
            )
          })}
        </ul>

        <div className="mt-12">
          <TextLink href={withLocale(ROUTES.contact, locale)}>{dict.pricing.cta}</TextLink>
        </div>
      </Container>
    </Section>
  )
}
