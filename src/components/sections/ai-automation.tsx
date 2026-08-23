import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { TextLink } from '@/components/ui/text-link'
import { AI_FLOW_STEPS, AI_USE_CASES } from '@/data/ai-automation'
import { SECTION_IDS } from '@/data/navigation'
import { getDictionary } from '@/i18n/server'

/**
 * AI as a service with a job to do, not as a trend. The section leads with the process,
 * not with the technology — the opening question is "what eats your team's time?".
 *
 * The flow is five mono labels separated by arrows: a diagram made of type. No brain, no
 * robot, no gradient (.agents/01-brand-and-design.md#zakazane-typy-zdjęć).
 */
export async function AIAutomationSection() {
  const dict = await getDictionary()

  return (
    <Section id={SECTION_IDS.ai} spacing="large">
      <Container>
        <SectionHeader
          index={5}
          label={dict.ai.label}
          headlineLines={dict.ai.headline}
          aside={<p>{dict.ai.body}</p>}
        />

        <div className="mt-20 border-y border-line py-8">
          <p className="font-mono text-meta text-content-tertiary uppercase">{dict.ai.flowTitle}</p>
          {/* Wraps into two rows on a phone instead of scrolling sideways: a horizontal
              scroller would hide the last step, which is the one that matters. */}
          <ol className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
            {AI_FLOW_STEPS.map((step, index) => (
              <li key={step} className="flex items-center gap-4">
                {index > 0 && (
                  <span aria-hidden="true" className="font-mono text-meta text-content-ghost">
                    →
                  </span>
                )}
                <span className="font-mono text-label text-content uppercase">
                  {dict.ai.flow[step]}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <p className="font-mono text-meta text-content-tertiary uppercase">
            {dict.ai.useCasesTitle}
          </p>

          <ul className="mt-6 border-t border-line">
            {AI_USE_CASES.map((key) => (
              <li
                key={key}
                className="grid grid-cols-12 items-baseline gap-grid border-b border-line py-6"
              >
                <h3 className="col-span-12 font-display text-display-card lg:col-span-4">
                  {dict.ai.useCases[key].title}
                </h3>
                <p className="col-span-12 mt-2 text-body text-content-secondary lg:col-span-7 lg:col-start-6 lg:mt-0">
                  {dict.ai.useCases[key].body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <TextLink href={`#${SECTION_IDS.contact}`}>{dict.ai.cta}</TextLink>
        </div>
      </Container>
    </Section>
  )
}
