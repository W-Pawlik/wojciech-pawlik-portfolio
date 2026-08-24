import { ContactForm } from '@/components/form/contact-form'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { SECTION_IDS } from '@/data/navigation'
import { getDictionary, getLocale } from '@/i18n/server'

/**
 * The lead form gets a full section on `canvas-subtle`, not a drawer: the drawer is a
 * quick way in (Phase 04), but the form itself needs room to be five easy questions
 * instead of a cramped panel (.agents/specs/01-home.md).
 *
 * Server section, one client island for the form. The success state replaces the form in
 * place, so nobody has to look for confirmation.
 */
export async function ContactSection({ headlineAs = 'h2' }: { headlineAs?: 'h1' | 'h2' }) {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <Section id={SECTION_IDS.contact} spacing="xl" className="bg-canvas-subtle">
      <Container>
        <SectionHeader
          index={9}
          label={dict.contact.label}
          headlineLines={dict.contact.headline}
          headlineAs={headlineAs}
          aside={<p>{dict.contact.intro}</p>}
        />

        <div className="mt-16">
          <ContactForm locale={locale} copy={dict.contact} optionalLabel={dict.common.optional} />
        </div>
      </Container>
    </Section>
  )
}
