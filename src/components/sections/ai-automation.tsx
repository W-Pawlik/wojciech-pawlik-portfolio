import { AIProcessExplorer } from '@/components/sections/ai-process-explorer'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SECTION_IDS } from '@/data/navigation'
import { getDictionary } from '@/i18n/server'

/**
 * AI as a service with a job to do, not as a trend. The section leads with the process,
 * not with the technology - the opening question is "what eats your team's time?".
 *
 * The flow is five mono labels separated by arrows: a diagram made of type. No brain, no
 * robot, no gradient (.agents/01-brand-and-design.md#zakazane-typy-zdjęć).
 */
export async function AIAutomationSection() {
  const dict = await getDictionary()

  return (
    <Section id={SECTION_IDS.ai} spacing="large">
      <Container>
        <AIProcessExplorer copy={dict.ai} />
      </Container>
    </Section>
  )
}
