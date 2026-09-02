import Link from 'next/link'

import { PageHeader } from '@/components/pages/page-header'
import { ButtonLink, CtaArrow } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ROUTES, localizedHref } from '@/data/routes'
import { siteConfig } from '@/data/site'
import { getDictionary, getLocale } from '@/i18n/server'

type LegalPageKind = 'privacy' | 'terms'

export async function LegalPage({ kind }: { kind: LegalPageKind }) {
  const dict = await getDictionary()
  const locale = await getLocale()
  const copy = dict.legal[kind]

  return (
    <>
      <PageHeader headlineLines={[copy.title]} intro={copy.intro} />
      <Section spacing="large">
        <Container width="measure">
          <address className="mb-16 border-y border-line py-5 text-body-sm text-content-secondary not-italic">
            <p className="font-mono text-label text-content-tertiary uppercase">
              {dict.common.address}
            </p>
            <p className="mt-3">{siteConfig.fullLegalName}</p>
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
          </address>
          <div className="flex flex-col gap-12">
            {copy.sections.map((section, index) => (
              <section key={section.title}>
                <p className="font-mono text-label text-content-tertiary uppercase">
                  {String(index + 1).padStart(2, '0')} / {copy.title}
                </p>
                <h2 className="mt-3 font-display text-display-card">{section.title}</h2>
                <div className="mt-5 flex flex-col gap-4 text-body-lg text-content-secondary">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-6 text-body-sm text-content-secondary">
            <p>
              <Link
                href={localizedHref(kind === 'privacy' ? ROUTES.terms : ROUTES.privacy, locale)}
                className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-content"
              >
                {kind === 'privacy' ? dict.footer.terms : dict.footer.privacy}
              </Link>
            </p>
            <ButtonLink href={localizedHref(ROUTES.contact, locale)} className="mt-6">
              {dict.nav.cta} <CtaArrow />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
