import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { SECTION_IDS } from '@/data/navigation'
import { PROCESS_PHASES } from '@/data/process'
import { getDictionary } from '@/i18n/server'

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

        <div className="mt-20 grid border-t border-line lg:grid-cols-3">
          {PROCESS_PHASES.map((phase, phaseIndex) => {
            const copy = dict.process.phases[phase.key]
            return (
              <article
                key={phase.key}
                className="border-b border-line px-0 py-10 lg:border-r lg:border-b-0 lg:px-7 lg:py-8 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
              >
                <p className="font-mono text-meta text-accent uppercase">
                  {String(phaseIndex + 1).padStart(2, '0')} / {copy.label}
                </p>
                <h2 className="mt-6 max-w-[18rem] font-display text-display-project">
                  {copy.title}
                </h2>

                <ol className="mt-8 border-l border-line pl-5">
                  {phase.steps.map((step, index) => (
                    <li key={step} className="relative pb-5 last:pb-0">
                      <p className="font-mono text-label text-content uppercase">
                        {dict.process.steps[step].title}
                      </p>
                      {index < phase.steps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-0.5 -left-[1.35rem] text-meta text-accent"
                        >
                          ↓
                        </span>
                      )}
                    </li>
                  ))}
                </ol>

                <p className="mt-8 max-w-[20rem] text-body text-content-secondary">
                  {copy.statement}
                </p>
                <p className="mt-8 border-t border-line pt-4 font-mono text-meta uppercase">
                  <span className="text-accent">{copy.outputLabel} / </span>
                  <span className="text-content">{copy.output}</span>
                </p>
                <p className="mt-2 text-body-sm text-content-tertiary">{copy.outputDetail}</p>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
