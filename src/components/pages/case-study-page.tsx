import { Container } from '@/components/ui/container'
import { BackLink } from '@/components/ui/back-link'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { TextLink } from '@/components/ui/text-link'
import { DeliverableIcon, type DeliverableIconName } from '@/components/ui/deliverable-icon'
import type { Project } from '@/data/projects'
import { localizedHref, ROUTES } from '@/data/routes'
import { type Locale } from '@/i18n/config'

type CaseStudyCopy = {
  title: string
  categories: string
  statement: string
  meta?: { status: { label: string; value: string } }
  context: { title: string; body: string }
  problem: { title: string; body: string }
  solution: { title: string; body: string }
  challenge: { title: string; body: string }
  deliverables: {
    title: string
    items: ReadonlyArray<{ label: string; icon: DeliverableIconName }>
  }
  result?: { title: string; body: string }
  testimonial?: { quote: string; author: string }
  galleryLabel: string
  nextLabel: string
}

type CaseStudyPageProps = {
  copy: CaseStudyCopy
  caseStudyLabel: string
  caseStudyClosing: { title: string; body: string; cta: string }
  codebrosLabel: string
  closeLabel: string
  liveCta: string
  locale: Locale
  project: Project
  nextProject?: { href: string; title: string }
}

const CONTENT_SECTIONS = ['context', 'problem', 'solution', 'challenge'] as const

export function CaseStudyPage({
  copy,
  caseStudyLabel,
  caseStudyClosing,
  codebrosLabel,
  closeLabel,
  liveCta,
  locale,
  project,
  nextProject,
}: CaseStudyPageProps) {
  const gallerySources = project.media.gallery ?? [project.media.src]

  return (
    <>
      <Section spacing="xl">
        <Container>
          <BackLink href={localizedHref(ROUTES.work, locale)}>{caseStudyLabel}</BackLink>

          <div className="mt-16 grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="mt-6 font-display text-display-section">{copy.title}</h1>
              <p className="mt-5 font-mono text-label text-accent-strong uppercase">
                {copy.categories}
              </p>
              {project.liveUrl ? (
                <div className="mt-6">
                  <TextLink
                    href={project.liveUrl}
                    arrow="up-right"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {liveCta}
                  </TextLink>
                </div>
              ) : null}
              <p className="mt-10 max-w-measure text-body-lg text-content-secondary">
                {copy.statement}
              </p>
            </div>

            <div className="col-span-12 mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
              {copy.meta ? (
                <dl className="border-t border-line">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-4 font-mono text-meta uppercase">
                    <dt className="text-content-tertiary">{copy.meta.status.label}</dt>
                    <dd className="text-content">{copy.meta.status.value}</dd>
                  </div>
                </dl>
              ) : null}
              {project.team === 'codebros' ? (
                <p className="mt-4 font-mono text-meta text-accent-strong uppercase">
                  {codebrosLabel}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-20">
            <MediaSlot
              id={project.media.id}
              ratio={project.media.ratio}
              src={project.media.src}
              alt={copy.title}
              label={copy.galleryLabel}
              fit="contain"
              zoomable
              closeLabel={closeLabel}
            />
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container>
          <div>
            {CONTENT_SECTIONS.map((section, index) => {
              const content = copy[section]
              return (
                <article
                  key={section}
                  className="mt-section-lg grid grid-cols-12 gap-grid border-t border-line pt-5 first:mt-0"
                >
                  <div className="col-span-12 lg:col-span-3">
                    <p className="font-mono text-meta text-content-tertiary uppercase">
                      {String(index + 1).padStart(2, '0')} /
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                    <h2 className="font-display text-display-project">{content.title}</h2>
                    <p className="mt-6 text-body-lg text-content-secondary">{content.body}</p>
                  </div>
                </article>
              )
            })}

            <article className="mt-section-lg grid grid-cols-12 gap-grid border-t border-line pt-5">
              <div className="col-span-12 lg:col-span-3">
                <p className="font-mono text-meta text-content-tertiary uppercase">05 /</p>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                <h2 className="font-display text-display-project">{copy.deliverables.title}</h2>
                <ul className="mt-6 border-t border-line">
                  {copy.deliverables.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-3 border-b border-line py-3 text-body text-content-secondary"
                    >
                      <DeliverableIcon name={item.icon} />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {copy.result ? (
              <article className="mt-section-lg grid grid-cols-12 gap-grid border-t border-line pt-5">
                <div className="col-span-12 lg:col-span-3">
                  <p className="font-mono text-meta text-content-tertiary uppercase">06 /</p>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                  <h2 className="font-display text-display-project">{copy.result.title}</h2>
                  <p className="mt-6 text-body-lg text-content-secondary">{copy.result.body}</p>
                </div>
              </article>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section spacing="large" className="bg-canvas-subtle">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-mono text-meta text-content-tertiary uppercase">
                07 / {copy.galleryLabel}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-grid sm:grid-cols-2">
                {gallerySources.map((src, index) => (
                  <MediaSlot
                    key={src}
                    id={`${project.media.id}-${index + 1}`}
                    ratio={project.media.ratio}
                    src={src}
                    alt={copy.title}
                    label={copy.galleryLabel}
                    fit="contain"
                    zoomable
                    closeLabel={closeLabel}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {copy.testimonial ? (
        <Section spacing="large" className="bg-canvas-subtle">
          <Container>
            <blockquote className="mx-auto max-w-measure text-center">
              <p className="font-display text-display-project">“{copy.testimonial.quote}”</p>
              <cite className="mt-5 block font-mono text-meta text-content-tertiary uppercase not-italic">
                {copy.testimonial.author}
              </cite>
            </blockquote>
          </Container>
        </Section>
      ) : null}

      <Section spacing="large" className="bg-canvas-subtle">
        <Container>
          <div className="grid grid-cols-12 gap-grid border-t border-line pt-5">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-display-project">{caseStudyClosing.title}</h2>
              <p className="mt-5 max-w-measure text-body-lg text-content-secondary">
                {caseStudyClosing.body}
              </p>
              <div className="mt-8">
                <TextLink href={localizedHref(ROUTES.contact, locale)}>
                  {caseStudyClosing.cta}
                </TextLink>
              </div>
            </div>
            <div className="col-span-12 flex flex-wrap items-end gap-x-6 gap-y-3 lg:col-span-3 lg:col-start-10 lg:justify-end">
              {nextProject ? (
                <TextLink href={nextProject.href}>
                  {copy.nextLabel} / {nextProject.title}
                </TextLink>
              ) : null}
              {project.liveUrl ? (
                <TextLink href={project.liveUrl} arrow="up-right" target="_blank" rel="noreferrer">
                  {liveCta}
                </TextLink>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
