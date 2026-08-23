import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { TextLink } from '@/components/ui/text-link'
import { SECTION_IDS } from '@/data/navigation'
import { SERVICES } from '@/data/services'
import { getDictionary } from '@/i18n/server'
import { formatOrdinal } from '@/lib/utils/format'

/**
 * The three offer pillars as full-width records: number, name, description, CTA, separated
 * by hairlines. Explicitly **not** three cards with icons — that shape is the SaaS feature
 * grid the direction is defined against (.agents/01-brand-and-design.md).
 *
 * Phase 04 turns each row into a drawer with scope, budget and examples. Until then the
 * CTAs point where the answer already exists on the page: the form, the CodeBros section,
 * the AI section.
 */
export async function ServicesSection() {
  const dict = await getDictionary()

  return (
    <Section id={SECTION_IDS.services} spacing="large">
      <Container>
        <SectionHeader
          index={3}
          label={dict.services.label}
          headlineLines={dict.services.headline}
          aside={<p>{dict.services.intro}</p>}
        />

        <ul className="mt-20 border-t border-line">
          {SERVICES.map((service, index) => {
            const copy = dict.services.items[service.key]

            return (
              <li key={service.key} className="group border-b border-line">
                {/* The whole row is one hover target, hence the group on the li: the
                    arrow and the underline have to move together with the background. */}
                <div className="grid grid-cols-12 items-baseline gap-grid py-9 transition-colors duration-[var(--duration-base)] group-hover:bg-canvas-subtle">
                  <span className="col-span-2 font-mono text-meta text-accent uppercase lg:col-span-1">
                    {formatOrdinal(index + 1)}
                  </span>

                  <h3 className="col-span-10 font-display text-display-project lg:col-span-4">
                    {copy.title}
                  </h3>

                  <div className="col-span-12 mt-4 lg:col-span-5 lg:mt-0">
                    <p className="text-body text-content-secondary">{copy.body}</p>

                    {copy.includes.length > 0 && (
                      <p className="mt-4 font-mono text-meta text-content-tertiary uppercase">
                        {copy.includes.join(' · ')}
                      </p>
                    )}
                  </div>

                  <div className="col-span-12 mt-6 lg:col-span-2 lg:mt-0 lg:justify-self-end">
                    <TextLink href={`#${service.target}`}>{copy.cta}</TextLink>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
