import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { TextLink } from '@/components/ui/text-link'
import { SECTION_IDS } from '@/data/navigation'
import { ROUTES } from '@/data/routes'
import { getDictionary } from '@/i18n/server'
import { getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'

/**
 * The narrative turn of the page: light gives way to dark, and the visitor learns that a
 * bigger project does not get handed off to somebody else.
 *
 * Two components would fight over one background, so the transition and the CodeBros
 * content are one inverted section with two blocks: the statement first, the substance
 * after. This is the **CodeBros mode** from the design system - same grid, same type, same
 * radii, inverted tone (.agents/01-brand-and-design.md#motyw).
 *
 * Phase 05 adds the GSAP moment here (line draw, background transition, headline reveal);
 * the static version has to already read as the strongest turn on the page, which is why
 * the statement block gets this much empty space.
 */
export async function CodeBrosSection() {
  const dict = await getDictionary()
  const transition = dict.codebrosTransition
  const copy = dict.codebros
  const locale = await getLocale()

  return (
    <Section id={SECTION_IDS.codebros} tone="invert" spacing="xl">
      <Container>
        {/* Statement. The line is the BUILD TRACE that Phase 05 will draw from the left. */}
        <div className="border-t border-line-invert pt-5">
          <p className="font-mono text-meta text-content-invert-tertiary uppercase">
            {transition.trace}
          </p>
        </div>

        <div className="mt-28 grid grid-cols-12 gap-grid lg:mt-40">
          <p className="col-span-12 text-body-lg text-content-invert-secondary lg:col-span-5">
            {transition.intro}
          </p>

          <Headline
            lines={transition.headline}
            className="col-span-12 mt-10 text-content-invert lg:col-span-9 lg:mt-16"
          />

          <div className="col-span-12 mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 lg:mt-16">
            <p className="font-display text-display-project text-content-invert">
              {transition.brand}
            </p>
            <p className="font-mono text-meta text-content-invert-tertiary uppercase">
              {transition.sub}
            </p>
          </div>
        </div>

        {/* Substance. */}
        <div className="mt-40 grid grid-cols-12 gap-grid lg:mt-56">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index={5} tone="invert" className="mb-7">
              {copy.label}
            </SectionLabel>
            <Headline lines={copy.headline} className="text-content-invert" />
          </div>

          <div className="col-span-12 self-end lg:col-span-5 lg:col-start-8">
            <p className="text-body text-content-invert-secondary">{copy.body}</p>
            <p className="mt-6 font-mono text-label text-accent uppercase">{copy.claim}</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-grid">
          <div className="col-span-12 lg:col-span-7">
            <MediaSlot
              id="IMG-03"
              ratio="16 / 9"
              src="/images/codebros/competition.jpg"
              alt={copy.mediaAlt}
              label={copy.mediaPending}
              tone="invert"
            />
          </div>

          <div className="col-span-12 mt-10 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="font-mono text-meta text-content-invert-tertiary uppercase">
              {copy.proofTitle}
            </p>

            <ul className="mt-6">
              {(['planik', 'creditRisk'] as const).map((key) => (
                <li key={key} className="border-t border-line-invert py-6 last:pb-0">
                  <h3 className="font-display text-display-card text-content-invert">
                    {copy.proofs[key].title}
                  </h3>
                  <p className="mt-3 text-body-sm text-content-invert-secondary">
                    {copy.proofs[key].body}
                  </p>
                  <TextLink
                    href={withLocale(
                      `${ROUTES.work}/${key === 'creditRisk' ? 'credit-risk-system' : key}`,
                      locale,
                    )}
                    data-return-scroll
                    tone="invert"
                    accent
                    className="mt-5"
                  >
                    {dict.work.caseStudyCta}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
