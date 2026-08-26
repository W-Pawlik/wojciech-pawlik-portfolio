import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { TextLink } from '@/components/ui/text-link'
import { SECTION_IDS } from '@/data/navigation'
import { ROUTES } from '@/data/routes'
import { TRUST_ROWS } from '@/data/process'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'

/**
 * The face behind the brand - the whole advantage of a personal brand is that the client
 * knows exactly who is responsible for their project. Three paragraphs, not an
 * autobiography.
 *
 * Trust arrives as three mono rows rather than a paragraph of self-praise: each one is
 * backed by a fact from the brief, and none of them is a number nobody can verify
 * (.agents/10-brand-strategy.md#zakazane-fakty).
 *
 * TODO(brief): confirmation that naming the employer on a sales
 * page is fine are both open - the copy names Univio because the brief does.
 */
export async function AboutSection({ headlineAs = 'h2' }: { headlineAs?: 'h1' | 'h2' }) {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <Section id={SECTION_IDS.about} spacing="xl">
      <Container>
        <div className="grid grid-cols-12 gap-grid">
          <div className="col-span-12 lg:col-span-6">
            <MediaSlot
              id="IMG-01"
              ratio="5 / 6"
              src="/images/about/wojciech-pawlik-detail.jpg"
              alt={dict.about.mediaAlt}
              label={dict.about.mediaPending}
            />
          </div>

          <div className="col-span-12 mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-center">
            <SectionLabel index={9} className="mb-7">
              {dict.about.label}
            </SectionLabel>

            <Headline
              lines={dict.about.headline}
              as={headlineAs}
              className="text-display-project"
            />

            <div className="mt-8 flex flex-col gap-5 text-body text-content-secondary">
              {dict.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-12 border-t border-line">
              {TRUST_ROWS.map((key) => (
                <div
                  key={key}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-3 font-mono text-meta uppercase"
                >
                  <dt className="text-content-tertiary">{dict.about.trust[key].label}</dt>
                  <dd className="text-content">{dict.about.trust[key].value}</dd>
                </div>
              ))}
            </dl>

            <TextLink href={withLocale(ROUTES.about, locale)} className="mt-8">
              {dict.about.cta}
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
