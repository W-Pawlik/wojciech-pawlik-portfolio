import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { getDictionary, getLocale } from '@/i18n/server'

/**
 * A 404 has to look like part of the site and offer a way out. A visitor who typed the
 * address by hand, or followed an old link, must not hit a dead end.
 */
export default async function NotFound() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <Section className="flex min-h-svh items-center">
      <Container>
        <SectionLabel className="mb-6">{dict.notFound.label}</SectionLabel>
        <h1 className="max-w-[22ch] font-display text-display-section">{dict.notFound.headline}</h1>
        <p className="mt-6 max-w-measure text-body text-content-secondary">{dict.notFound.body}</p>
        <ButtonLink href={`/${locale}`} size="lg" className="mt-10">
          {dict.notFound.cta}
        </ButtonLink>
      </Container>
    </Section>
  )
}
