import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { SECTION_IDS } from '@/data/navigation'
import { PROCESS_STEPS } from '@/data/process'
import { getDictionary } from '@/i18n/server'
import { formatOrdinal } from '@/lib/utils/format'

/**
 * The process is the part of the offer that removes purchase risk: the visitor learns what
 * happens after they send the form, and that development is not also an improvised attempt
 * at designing the product.
 *
 * Seven steps as a vertical editorial list, not a seven-card timeline — seven cards would
 * make the process look like a product feature grid (.agents/01-brand-and-design.md).
 */
export async function ProcessSection() {
  const dict = await getDictionary()

  return (
    <Section id={SECTION_IDS.process} spacing="large">
      <Container>
        <SectionHeader
          index={6}
          label={dict.process.label}
          headlineLines={dict.process.headline}
          aside={<p>{dict.process.intro}</p>}
        />

        <ol className="mt-20 border-t border-line">
          {PROCESS_STEPS.map((step, index) => (
            <li
              key={step}
              className="grid grid-cols-12 items-baseline gap-grid border-b border-line py-7"
            >
              <span className="col-span-2 font-mono text-meta text-content-tertiary uppercase lg:col-span-1">
                {formatOrdinal(index + 1)}
              </span>
              <h3 className="col-span-10 font-display text-display-card lg:col-span-4">
                {dict.process.steps[step].title}
              </h3>
              <p className="col-span-12 mt-2 text-body text-content-secondary lg:col-span-6 lg:col-start-6 lg:mt-0">
                {dict.process.steps[step].body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
