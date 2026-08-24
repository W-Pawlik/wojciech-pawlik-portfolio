import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { TextLink } from '@/components/ui/text-link'

type PageHeaderProps = {
  label: string
  headlineLines: readonly string[]
  intro: string
  backHref?: string
  backLabel?: string
}

/**
 * Shared opening for index and detail routes. The content below it stays route-specific;
 * only the page frame is shared so multipage routes feel like one publication.
 */
export function PageHeader({ label, headlineLines, intro, backHref, backLabel }: PageHeaderProps) {
  return (
    <Section spacing="xl">
      <Container>
        {backHref && backLabel ? (
          <TextLink href={backHref} arrow="left">
            {backLabel}
          </TextLink>
        ) : null}

        <div className="mt-16 grid grid-cols-12 gap-grid border-t border-line pt-5">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel className="mb-7">{label}</SectionLabel>
            <Headline lines={headlineLines} as="h1" />
          </div>
          <p className="col-span-12 self-end text-body-lg text-content-secondary lg:col-span-4 lg:col-start-9">
            {intro}
          </p>
        </div>
      </Container>
    </Section>
  )
}
