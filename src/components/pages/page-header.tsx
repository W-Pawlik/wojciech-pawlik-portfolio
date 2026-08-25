import { BackLink } from '@/components/ui/back-link'
import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { Section } from '@/components/ui/section'

type PageHeaderProps = {
  headlineLines: readonly string[]
  intro: string
  backHref?: string
  backLabel?: string
}

/**
 * Shared opening for index and detail routes. The content below it stays route-specific;
 * only the page frame is shared so multipage routes feel like one publication.
 */
export function PageHeader({ headlineLines, intro, backHref, backLabel }: PageHeaderProps) {
  return (
    <Section spacing="xl">
      <Container>
        {backHref && backLabel ? <BackLink href={backHref}>{backLabel}</BackLink> : null}

        <div className="mt-16 grid grid-cols-12 gap-grid border-t border-line pt-5">
          <div className="col-span-12 lg:col-span-7">
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
