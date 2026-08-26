import { Container } from '@/components/ui/container'
import { ButtonLink, CtaArrow } from '@/components/ui/button'
import { PricingPreview } from '@/components/sections/pricing-preview'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { TextLink } from '@/components/ui/text-link'
import { SECTION_IDS } from '@/data/navigation'
import { ROUTES } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'

/**
 * A compact budget preview for the landing page. The full pricing page carries the detailed
 * scope, materials, extensions and aftercare notes; the landing page only filters for fit and
 * points visitors towards the next step.
 */
export async function PricingSection({ headlineAs = 'h2' }: { headlineAs?: 'h1' | 'h2' }) {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <Section id={SECTION_IDS.pricing} spacing="large">
      <Container>
        <SectionHeader
          index={8}
          label={dict.pricing.landing.label}
          headlineLines={dict.pricing.landing.headline}
          headlineAs={headlineAs}
          aside={<p>{dict.pricing.landing.intro}</p>}
        />

        <PricingPreview common={dict.common} copy={dict.pricing} locale={locale} />

        <div className="mt-12 grid grid-cols-12 gap-grid border-t border-line pt-6">
          <p className="col-span-12 font-mono text-meta text-content-tertiary uppercase lg:col-span-3">
            {dict.pricing.landing.largerLabel}
          </p>
          <p className="col-span-12 mt-2 max-w-measure text-body-sm text-content-secondary lg:col-span-7 lg:col-start-5 lg:mt-0">
            {dict.pricing.landing.largerBody}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <ButtonLink href={withLocale(ROUTES.contact, locale)}>
            {dict.pricing.landing.contactCta}
            <CtaArrow />
          </ButtonLink>
          <TextLink href={withLocale(ROUTES.pricing, locale)}>
            {dict.pricing.landing.fullPricingCta}
          </TextLink>
        </div>
      </Container>
    </Section>
  )
}
