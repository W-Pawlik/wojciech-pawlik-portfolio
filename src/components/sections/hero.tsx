import { ButtonLink, CtaArrow } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { AmbientBackground } from '@/components/ui/ambient-background'
import { HandwrittenSignature } from '@/components/ui/handwritten-signature'
import { Section } from '@/components/ui/section'
import { SECTION_IDS } from '@/data/navigation'
import { getDictionary } from '@/i18n/server'

/**
 * Hero. Five seconds to answer: who this is, what he builds, for whom, and that he is not
 * another freelancer assembling templates (.agents/specs/01-home.md).
 *
 * Typographic variant, per the art direction: no product mockup, no portrait competing
 * with the H1. The first image on the page arrives later, in About.
 *
 * `min-h` rather than `h-screen`: a fixed viewport height pushes the CTA row below the
 * fold on a short laptop window, and `dvh` avoids the mobile toolbar jump. The entrance
 * is the CSS `hero-in` class, so the first screen paints with the document instead of
 * waiting for hydration (ADR-0009). The GSAP line reveal is Phase 05.
 */
export async function HeroSection() {
  const dict = await getDictionary()

  return (
    <Section
      spacing="none"
      tone="invert"
      className="relative isolate flex min-h-[calc(100svh-var(--navbar-height))] flex-col justify-center overflow-hidden py-section-sm"
    >
      <AmbientBackground className="absolute inset-0 z-0 overflow-hidden" />

      <Container className="relative z-10 flex flex-1 flex-col justify-center">
        <div className="grid grid-cols-12 gap-grid">
          <Headline
            as="h1"
            lines={dict.hero.headline}
            className="col-span-12 hero-in text-display-hero text-content-invert lg:col-span-10"
            lineClassName="mask-row"
          />

          <HandwrittenSignature className="col-span-12 hidden text-accent lg:col-span-2 lg:col-start-6 lg:row-start-2 lg:block" />

          <div className="col-span-12 mt-4 lg:col-span-5 lg:col-start-8 lg:mt-10">
            <p className="hero-in text-body-lg text-content-invert">{dict.hero.body}</p>

            <div className="mt-9 flex hero-in flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink
                href={`#${SECTION_IDS.contact}`}
                size="lg"
                className="bg-content-invert text-content hover:bg-accent hover:text-accent-contrast"
              >
                {dict.hero.ctaPrimary}
                <CtaArrow />
              </ButtonLink>
              <ButtonLink
                href={`#${SECTION_IDS.work}`}
                variant="quiet"
                className="text-content-invert hover:text-content-invert"
              >
                {dict.hero.ctaSecondary}
                <span aria-hidden="true">↓</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {/* BUILD TRACE: the technical footer of the first screen. Availability is a real
          statement from the brief, not a fabricated scarcity signal. */}
    </Section>
  )
}
