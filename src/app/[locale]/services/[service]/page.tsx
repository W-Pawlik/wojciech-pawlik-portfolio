import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageHeader } from '@/components/pages/page-header'
import { CtaArrow, ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { TextLink } from '@/components/ui/text-link'
import { SERVICE_MEDIA } from '@/data/services'
import { ROUTES, SERVICE_ROUTES } from '@/data/routes'
import { dictionaryFor } from '@/i18n/dictionaries'
import { isLocale, withLocale } from '@/i18n/config'
import { buildMetadata } from '@/lib/seo/metadata'
import { formatOrdinal } from '@/lib/utils/format'

const SERVICE_KEYS = ['websites', 'systems', 'ai'] as const
type ServiceKey = (typeof SERVICE_KEYS)[number]

function getServiceKey(value: string): ServiceKey | undefined {
  return SERVICE_KEYS.includes(value as ServiceKey) ? (value as ServiceKey) : undefined
}

export function generateStaticParams() {
  return SERVICE_KEYS.map((service) => ({ service }))
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; service: string }>
}): Promise<Metadata> {
  const { locale, service } = await props.params
  if (!isLocale(locale)) notFound()
  const key = getServiceKey(service)
  if (!key) notFound()
  const copy = dictionaryFor(locale).servicePages[key]

  return buildMetadata({
    locale,
    path: SERVICE_ROUTES[key],
    title: copy.title,
    description: copy.intro,
  })
}

export default async function ServiceDetailPage(props: {
  params: Promise<{ locale: string; service: string }>
}) {
  const { locale, service } = await props.params
  if (!isLocale(locale)) notFound()
  const key = getServiceKey(service)
  if (!key) notFound()
  const dict = dictionaryFor(locale)
  const copy = dict.servicePages[key]
  const media = SERVICE_MEDIA[key]

  return (
    <>
      <PageHeader
        label={dict.services.label}
        headlineLines={[copy.title]}
        intro={copy.intro}
        backHref={withLocale(ROUTES.services, locale)}
        backLabel={dict.services.label}
      />

      <Section spacing="large" className="bg-canvas-subtle">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-7">
              <MediaSlot
                id={media.id}
                ratio={media.ratio}
                src={media.src}
                alt={copy.mediaAlt}
                label={copy.mediaLabel}
                showAnnotation={!media.src}
              />
            </div>
            <div className="col-span-12 mt-10 lg:col-span-4 lg:col-start-9 lg:mt-0">
              <p className="font-mono text-meta text-accent uppercase">{copy.problemTitle}</p>
              <h2 className="mt-5 font-display text-display-project">{copy.benefitsTitle}</h2>
              <p className="mt-5 text-body-lg text-content-secondary">{copy.problem}</p>
              <ul className="mt-8 border-t border-line">
                {copy.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="border-b border-line py-4 text-body text-content-secondary"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-display text-display-project">{copy.processTitle}</h2>
              <ol className="mt-8 border-t border-line">
                {copy.process.map((step, index) => (
                  <li
                    key={step}
                    className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-5"
                  >
                    <span className="font-mono text-meta text-accent">
                      {formatOrdinal(index + 1)}
                    </span>
                    <p className="text-body text-content-secondary">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-span-12 mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <h2 className="font-display text-display-project">{copy.scopeTitle}</h2>
              <ul className="mt-8 border-t border-line">
                {copy.scope.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-4 text-body text-content-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="large" className="bg-canvas-subtle">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-7">
              <p className="font-mono text-meta text-accent uppercase">{copy.fitTitle}</p>
              <h2 className="mt-5 font-display text-display-project">{copy.investmentTitle}</h2>
              <p className="mt-6 max-w-measure text-body-lg text-content-secondary">
                {copy.investment}
              </p>
              <p className="mt-8 max-w-measure text-body text-content-secondary">{copy.fit}</p>
            </div>
            <div className="col-span-12 mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end">
              <TextLink href={withLocale(ROUTES.pricing, locale)}>{copy.pricingCta}</TextLink>
              <ButtonLink href={withLocale(ROUTES.contact, locale)} size="lg">
                {copy.contactCta}
                <CtaArrow />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
