import { ContactForm } from '@/components/form/contact-form'
import { PageHeader } from '@/components/pages/page-header'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { siteConfig } from '@/data/site'
import { getDictionary, getLocale } from '@/i18n/server'

/** A focused contact route: one clear explanation, then the qualification form. */
export async function ContactPage() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <>
      <PageHeader
        label={dict.contact.label}
        headlineLines={dict.contact.pageHeadline}
        intro={dict.contact.pageIntro}
      />
      <Section spacing="large" className="bg-canvas-subtle">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-body text-content-secondary">{dict.contact.intro}</p>
              {(siteConfig.contact.email || siteConfig.contact.phone) && (
                <address className="mt-10 flex flex-col gap-3 text-body-sm not-italic">
                  {siteConfig.contact.email && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-content-secondary transition-colors hover:text-content"
                    >
                      {siteConfig.contact.email}
                    </a>
                  )}
                  {siteConfig.contact.phone && (
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="text-content-secondary transition-colors hover:text-content"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  )}
                </address>
              )}
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <ContactForm
                locale={locale}
                copy={dict.contact}
                optionalLabel={dict.common.optional}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
