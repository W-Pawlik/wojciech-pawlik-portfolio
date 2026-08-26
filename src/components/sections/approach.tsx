import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { SECTION_IDS } from '@/data/navigation'
import { PRINCIPLES } from '@/data/process'
import { getDictionary } from '@/i18n/server'
import { formatOrdinal } from '@/lib/utils/format'

/**
 * Differentiation, right after the hero: why work with this person rather than a cheaper
 * freelancer or an agency. Answered with a way of working, not with claims.
 *
 * A deliberately quiet section - the page rhythm is `quiet → bold → quiet` and the hero
 * was loud. No image, no accent: grid, type and hairlines only. The label runs in the
 * left margin instead of above the headline, so the numbering system does not read as a
 * template three sections in a row (.agents/01-brand-and-design.md).
 */
export async function ApproachSection() {
  const dict = await getDictionary()

  return (
    <Section id={SECTION_IDS.approach} spacing="large">
      <Container>
        <div className="grid grid-cols-12 gap-grid">
          <SectionLabel index={2} className="col-span-12 lg:col-span-2">
            {dict.approach.label}
          </SectionLabel>

          <Headline
            lines={dict.approach.headline}
            className="col-span-12 mt-6 lg:col-span-6 lg:col-start-3 lg:mt-0"
          />

          <p className="col-span-12 self-end text-body text-content-secondary lg:col-span-4 lg:col-start-9">
            {dict.approach.body}
          </p>
        </div>

        <ul className="mt-20 border-t border-line">
          {PRINCIPLES.map((key, index) => {
            const principle = dict.approach.principles[key]

            return (
              <li
                key={key}
                className="grid grid-cols-12 items-baseline gap-grid border-b border-line py-7"
              >
                <span className="col-span-2 font-mono text-meta text-accent uppercase lg:col-span-1">
                  {formatOrdinal(index + 1)}
                </span>
                <h3 className="col-span-10 font-display text-display-card lg:col-span-4">
                  {principle.title}
                </h3>
                <p className="col-span-12 mt-2 text-body text-content-secondary lg:col-span-6 lg:col-start-6 lg:mt-0">
                  {principle.body}
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
