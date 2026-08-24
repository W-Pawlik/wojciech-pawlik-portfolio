import { PageHeader } from '@/components/pages/page-header'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { TextLink } from '@/components/ui/text-link'
import { AFTERCARE_OFFER, PRICING_ROWS } from '@/data/pricing'
import { ROUTES } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'
import { formatPrice, formatPriceFrom, formatPriceRange } from '@/lib/utils/format'

/** A dedicated investment page with scope notes and after-launch options. */
export async function PricingPage() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <>
      <PageHeader
        label={dict.pricing.label}
        headlineLines={dict.pricing.pageHeadline}
        intro={dict.pricing.pageIntro}
      />
      <Section spacing="large">
        <Container>
          <p className="mb-12 max-w-measure text-body-sm text-accent-strong">
            {dict.pricing.minimumRateNote}
          </p>
          <div className="grid grid-cols-12 gap-grid border-y border-line py-8">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-mono text-meta text-accent uppercase">
                {dict.pricing.aftercareLabel}
              </p>
              <h2 className="mt-4 font-display text-display-project">
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
                  <h2 className="col-span-12 font-display text-display-card lg:col-span-5">
                    {copy.title}
                  </h2>
                  <p className="col-span-12 mt-2 text-body text-content-secondary lg:col-span-4 lg:mt-0">
                    {copy.body}
                  </p>
                  <p className="col-span-12 mt-3 font-display text-display-project lg:col-span-3 lg:mt-0 lg:text-right">
                    {price}
                  </p>
                </li>
              )
            })}
          </ul>

          <TextLink href={withLocale(ROUTES.contact, locale)} className="mt-12">
            {dict.pricing.cta}
          </TextLink>
        </Container>
      </Section>
    </>
  )
}
