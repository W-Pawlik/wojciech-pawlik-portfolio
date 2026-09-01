import Link from 'next/link'

import { PageHeader } from '@/components/pages/page-header'
import { ButtonLink, CtaArrow } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { localizedHref, ROUTES, switchLocalePath } from '@/data/routes'
import { SERVICE_ROUTES } from '@/data/routes'
import { SERVICES } from '@/data/services'
import { getDictionary, getLocale } from '@/i18n/server'
import { formatOrdinal } from '@/lib/utils/format'

/** A service directory with enough context to choose a path before opening a detail page. */
export async function ServicesIndexPage() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <>
      <PageHeader headlineLines={dict.services.pageHeadline} intro={dict.services.pageIntro} />

      <Section spacing="large" className="bg-canvas-subtle">
        <Container>
          <ul className="border-t border-line">
            {SERVICES.map((service, index) => {
              const summary = dict.services.items[service.key]
              const detail = dict.servicePages[service.key]
              const href = switchLocalePath(SERVICE_ROUTES[service.key], locale)

              return (
                <li key={service.key} className="border-b border-line">
                  <Link
                    href={href}
                    data-return-scroll
                    className="group grid grid-cols-12 gap-grid py-10 transition-colors duration-base hover:bg-canvas"
                  >
                    <span className="col-span-2 font-mono text-meta text-accent lg:col-span-1">
                      {formatOrdinal(index + 1)}
                    </span>
                    <div className="col-span-10 lg:col-span-4">
                      <h2 className="font-display text-display-project">{summary.title}</h2>
                    </div>
                    <div className="col-span-12 mt-6 lg:col-span-5 lg:col-start-7 lg:mt-0">
                      <p className="text-body-lg text-content-secondary">{detail.intro}</p>
                      <p className="mt-5 text-body text-content-secondary">{summary.body}</p>
                      <span className="mt-7 inline-flex items-baseline gap-2 text-body">
                        <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-base after:ease-out-quint group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">
                          {summary.cta}
                        </span>
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section spacing="large" tone="invert">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-7">
              <p className="font-mono text-meta text-content-invert-tertiary uppercase">
                {dict.services.closingLabel}
              </p>
              <h2 className="mt-6 font-display text-display-section text-content-invert">
                {dict.services.closingHeadline}
              </h2>
            </div>
            <div className="col-span-12 mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end">
              <p className="text-body-lg text-content-invert-secondary">
                {dict.services.closingBody}
              </p>
              <ButtonLink href={localizedHref(ROUTES.contact, locale)} size="lg" className="mt-8">
                {dict.services.closingCta}
                <CtaArrow />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
