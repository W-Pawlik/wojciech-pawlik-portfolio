import { PageHeader } from '@/components/pages/page-header'
import { ButtonLink, CtaArrow } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { TextLink } from '@/components/ui/text-link'
import { PROJECTS, projectRoute } from '@/data/projects'
import { localizedHref, ROUTES } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'
import Link from 'next/link'

/** The work index is an editorial archive, not the landing page's selected-work section. */
export async function WorkIndexPage() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <>
      <PageHeader headlineLines={dict.work.pageHeadline} intro={dict.work.pageIntro} />
      <Section spacing="large" className="bg-canvas-subtle">
        <Container>
          <div className="border-t border-line">
            {PROJECTS.map((project, index) => {
              const copy = dict.work.projects[project.key]
              const number = String(index + 1).padStart(2, '0')

              return (
                <article
                  key={project.slug}
                  className="grid grid-cols-12 gap-grid border-b border-line py-12"
                >
                  <div className="col-span-12 lg:col-span-1">
                    <span className="font-display text-numeric text-content-ghost">{number}</span>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <MediaSlot
                      id={project.media.id}
                      ratio={project.media.ratio}
                      src={project.media.src}
                      alt={`${copy.title} - ${dict.work.visualization}`}
                      label={dict.work.visualization}
                      fit="contain"
                      zoomable
                      closeLabel={dict.nav.closeMenu}
                    />
                  </div>
                  <div className="group col-span-12 mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0">
                    <Link
                      href={withLocale(projectRoute(project, locale), locale)}
                      data-return-scroll
                      className="block rounded-image focus-visible:outline-1 focus-visible:outline-accent"
                    >
                      <p className="font-mono text-meta text-content-tertiary uppercase">
                        {project.tags.map((tag) => dict.work.tags[tag]).join(' · ')}
                      </p>
                      <h2 className="mt-4 font-display text-display-project">{copy.title}</h2>
                      <p className="mt-4 text-body text-content-secondary">{copy.description}</p>
                      <span className="mt-7 inline-flex items-center gap-2 text-body text-content">
                        <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-base after:ease-out-quint group-hover:after:scale-x-100">
                          {dict.work.caseStudyCta}
                        </span>
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-fast ease-out-quart group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                    {project.liveUrl ? (
                      <TextLink
                        href={project.liveUrl}
                        arrow="up-right"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3"
                      >
                        {dict.work.liveCta}
                      </TextLink>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
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
