import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { SECTION_IDS } from '@/data/navigation'
import { PROCESS_STEPS } from '@/data/process'
import { getDictionary } from '@/i18n/server'

/** A connected, customer-facing sequence: one clear result per stage. */
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

        <div className="mt-16 border-t border-line">
          {PROCESS_STEPS.map((step, stepIndex) => {
            const copy = dict.process.steps[step]

            return (
              <article
                key={step}
                className="grid grid-cols-12 gap-grid border-b border-line py-8 lg:py-10"
              >
                <div className="col-span-12 lg:col-span-2">
                  <p className="font-mono text-meta text-accent">
                    {String(stepIndex + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="col-span-12 mt-4 lg:col-span-5 lg:col-start-4 lg:mt-0">
                  <h3 className="font-display text-display-project">{copy.title}</h3>
                  <p className="mt-3 max-w-measure text-body text-content-secondary">{copy.body}</p>
                </div>
                <div className="col-span-12 mt-6 border-l border-line pl-4 lg:col-span-3 lg:col-start-10 lg:mt-0">
                  <p className="font-mono text-meta text-content-tertiary uppercase">
                    {copy.outputLabel}
                  </p>
                  <p className="mt-2 font-mono text-label text-content uppercase">{copy.output}</p>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
