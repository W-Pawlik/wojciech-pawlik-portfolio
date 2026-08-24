import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import Link from 'next/link'
import { SECTION_IDS } from '@/data/navigation'
import { SERVICES } from '@/data/services'
import { SERVICE_ROUTES } from '@/data/routes'
import { getDictionary } from '@/i18n/server'
import { getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'
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
export async function ServicesSection({ headlineAs = 'h2' }: { headlineAs?: 'h1' | 'h2' }) {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <Section id={SECTION_IDS.services} spacing="large">
      <Container>
        <SectionHeader
          index={3}
          label={dict.services.label}
          headlineLines={dict.services.headline}
          headlineAs={headlineAs}
          aside={<p>{dict.services.intro}</p>}
        />

        <ul className="mt-20 border-t border-line">
          {SERVICES.map((service, index) => {
            const copy = dict.services.items[service.key]
            const href = withLocale(SERVICE_ROUTES[service.key], locale)

            return (
              <li key={service.key} className="group border-b border-line">
                {/* The whole row is one hover target, hence the group on the li: the
                    arrow and the underline have to move together with the background. */}
                <Link
                  href={href}
                  className="block grid grid-cols-12 items-baseline gap-grid py-9 transition-colors duration-[var(--duration-base)] group-hover:bg-canvas-subtle"
                >
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
                    <span className="inline-flex items-baseline gap-2 text-body text-content">
                      <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-[var(--duration-base)] after:ease-out-quint group-hover:after:scale-x-100">
                        {copy.cta}
                      </span>
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-[var(--duration-fast)] ease-out-quart group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
