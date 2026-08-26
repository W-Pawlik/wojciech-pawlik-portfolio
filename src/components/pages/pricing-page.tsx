import { PageHeader } from '@/components/pages/page-header'
import { PricingRows } from '@/components/sections/pricing-rows'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { TextLink } from '@/components/ui/text-link'
import { AFTERCARE_OFFER } from '@/data/pricing'
import { ROUTES } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'
import { formatPrice } from '@/lib/utils/format'

/** A dedicated pricing page with scope notes and after-launch options. */
export async function PricingPage() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <>
      <PageHeader headlineLines={dict.pricing.pageHeadline} intro={dict.pricing.pageIntro} />
      <Section spacing="large">
        <Container>
          <p className="mb-12 max-w-measure text-body-sm text-accent-strong">
            {dict.pricing.minimumRateNote}
          </p>
          <PricingRows common={dict.common} copy={dict.pricing} locale={locale} />

          <div className="mt-16 grid grid-cols-12 gap-grid border-y border-line py-8">
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
              <p className="mt-2 font-display text-display-card text-accent">
                {dict.pricing.maintenancePrefix}{' '}
                {formatPrice(AFTERCARE_OFFER.maintenanceFrom, locale)} /{' '}
                {dict.pricing.maintenancePeriod}
              </p>
              <p className="mt-3 text-body-sm text-content-secondary">
                {dict.pricing.maintenanceBody}
              </p>
              <p className="mt-6 font-mono text-meta text-content-tertiary uppercase">
                {dict.pricing.maintenanceIncludesLabel}
              </p>
              <ul className="mt-3 border-t border-line">
                {dict.pricing.maintenanceIncludes.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3 text-body-sm text-content-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-grid border-b border-line py-6">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-mono text-meta text-content-tertiary uppercase">
                {dict.pricing.updatesLabel}
              </p>
              <h2 className="mt-3 font-display text-display-card">{dict.pricing.updatesTitle}</h2>
              <p className="mt-3 max-w-[34rem] text-body-sm text-content-secondary">
                {dict.pricing.updatesBody}
              </p>
            </div>
            <p className="col-span-12 mt-5 font-display text-display-card text-accent lg:col-span-5 lg:col-start-8 lg:mt-0 lg:text-right">
              {formatPrice(AFTERCARE_OFFER.updatesHourly, locale)} / {dict.pricing.hourSuffix}
            </p>
          </div>
          <p className="mt-5 max-w-measure text-body-sm text-content-tertiary">
            {dict.pricing.aftercareNote}
          </p>

          <TextLink href={withLocale(ROUTES.contact, locale)} className="mt-12">
            {dict.pricing.cta}
          </TextLink>
        </Container>
      </Section>
    </>
  )
}
