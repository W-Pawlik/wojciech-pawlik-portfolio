import { PageHeader } from '@/components/pages/page-header'
import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { TextLink } from '@/components/ui/text-link'
import { TRUST_ROWS } from '@/data/process'
import { ROUTES } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'

/** The about route gives the person and the working relationship more room than the landing. */
export async function AboutPage() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <>
      <PageHeader
        label={dict.about.label}
        headlineLines={dict.about.pageHeadline}
        intro={dict.about.pageIntro}
      />

      <Section spacing="large">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-5">
              <MediaSlot
                id="IMG-01"
                ratio="5 / 6"
                src="/images/IMG_20250915_143621326_BURST000_COVER.jpg"
                alt={dict.about.mediaAlt}
                label={dict.about.mediaPending}
              />
            </div>
            <div className="col-span-12 mt-10 lg:col-span-6 lg:col-start-7 lg:mt-0">
              <div className="flex flex-col gap-5 text-body-lg text-content-secondary">
                {dict.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-12 border-t border-line">
                {TRUST_ROWS.map((key) => (
                  <div
                    key={key}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4 font-mono text-meta uppercase"
                  >
                    <dt className="text-content-tertiary">{dict.about.trust[key].label}</dt>
                    <dd className="text-content">{dict.about.trust[key].value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="large" tone="invert">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-7">
              <SectionLabel tone="invert" className="mb-7">
                {dict.codebros.label}
              </SectionLabel>
              <Headline lines={dict.codebros.headline} className="text-content-invert" />
            </div>
            <div className="col-span-12 self-end lg:col-span-5 lg:col-start-8">
              <p className="text-body text-content-invert-secondary">{dict.codebros.body}</p>
              <p className="mt-6 font-mono text-label text-accent uppercase">
                {dict.codebros.claim}
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-7">
              <MediaSlot
                id="IMG-03"
                ratio="16 / 9"
                src="/images/zdjecie_CodeBros_konkurs.jpg"
                alt={dict.codebros.mediaAlt}
                label={dict.codebros.mediaPending}
                tone="invert"
              />
            </div>
            <div className="col-span-12 mt-10 lg:col-span-4 lg:col-start-9 lg:mt-0">
              <p className="font-mono text-meta text-content-invert-tertiary uppercase">
                {dict.codebros.proofTitle}
              </p>
              <ul className="mt-6">
                {(['planik', 'creditRisk'] as const).map((key) => (
                  <li key={key} className="border-t border-line-invert py-6 last:pb-0">
                    <h3 className="font-display text-display-card text-content-invert">
                      {dict.codebros.proofs[key].title}
                    </h3>
                    <p className="mt-3 text-body-sm text-content-invert-secondary">
                      {dict.codebros.proofs[key].body}
                    </p>
                    <TextLink
                      href={withLocale(
                        `${ROUTES.work}/${key === 'creditRisk' ? 'credit-risk-system' : key}`,
                        locale,
                      )}
                      tone="invert"
                      accent
                      className="mt-5"
                    >
                      {dict.work.caseStudyCta}
                    </TextLink>
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
            <h2 className="col-span-12 font-display text-display-project lg:col-span-5">
              {dict.about.pageFocusTitle}
            </h2>
            <p className="col-span-12 text-body-lg text-content-secondary lg:col-span-6 lg:col-start-7">
              {dict.about.pageFocusBody}
            </p>
          </div>
          <TextLink href={withLocale(ROUTES.contact, locale)} className="mt-12">
            {dict.about.cta}
          </TextLink>
        </Container>
      </Section>
    </>
  )
}
