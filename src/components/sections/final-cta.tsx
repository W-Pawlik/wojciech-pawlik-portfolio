import { ButtonLink, CtaArrow } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { SECTION_IDS } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import { getDictionary } from '@/i18n/server'

/**
 * The end of the narrative, and a full section rather than a small CTA card: this is the
 * one place on the page allowed to use `display-statement`, the largest type step.
 *
 * The email is the secondary route and renders only once `src/data/site.ts` has one — an
 * invented address on the page whose job is starting a conversation would be the worst
 * possible placeholder (.agents/09-content-and-copy.md).
 */
export async function FinalCtaSection() {
  const dict = await getDictionary()

  return (
    <Section spacing="xl">
      <Container>
        <SectionLabel className="mb-10">{dict.finalCta.label}</SectionLabel>

        <Headline lines={dict.finalCta.headline} className="text-display-statement" />

        <div className="mt-12 grid grid-cols-12 gap-grid">
          <p className="col-span-12 text-body-lg text-content-secondary lg:col-span-5">
            {dict.finalCta.body}
          </p>

          <div className="col-span-12 flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:col-start-8 lg:justify-end">
            <ButtonLink href={`#${SECTION_IDS.contact}`} size="lg">
              {dict.finalCta.cta}
              <CtaArrow />
            </ButtonLink>

            {siteConfig.contact.email && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-mono text-label text-content-secondary uppercase transition-colors duration-[var(--duration-fast)] hover:text-accent-strong"
              >
                {siteConfig.contact.email}
              </a>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
