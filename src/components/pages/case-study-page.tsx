import Image from 'next/image'

import { Container } from '@/components/ui/container'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { TextLink } from '@/components/ui/text-link'
import type { Project } from '@/data/projects'
import { ROUTES } from '@/data/routes'
import { withLocale, type Locale } from '@/i18n/config'

type CaseStudyCopy = {
  label: string
  title: string
  categories: string
  statement: string
  meta?: Record<'role' | 'team' | 'status', { label: string; value: string }>
  context: { title: string; body: string }
  problem: { title: string; body: string }
  solution: { title: string; body: string }
  challenge: { title: string; body: string }
  role?: { title: string; body: string; items: string[] }
  result?: { title: string; body: string }
  testimonial?: { quote: string; author: string }
  galleryLabel: string
  nextLabel: string
  contactCta: string
}

type CaseStudyPageProps = {
  copy: CaseStudyCopy
  liveCta: string
  locale: Locale
  project: Project
  nextProject?: { slug: string; title: string }
}

const CONTENT_SECTIONS = ['context', 'problem', 'solution', 'challenge'] as const

export function CaseStudyPage({ copy, liveCta, locale, project, nextProject }: CaseStudyPageProps) {
  return (
    <>
      <Section spacing="xl">
        <Container>
          <TextLink href={withLocale(ROUTES.work, locale)} arrow="left">
            {copy.label.split(' / ')[0]}
          </TextLink>

          <div className="mt-16 grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-mono text-label text-content-tertiary uppercase">{copy.label}</p>
              <h1 className="mt-6 font-display text-display-section">{copy.title}</h1>
              <p className="mt-5 font-mono text-label text-accent-strong uppercase">
                {copy.categories}
              </p>
              <p className="mt-10 max-w-measure text-body-lg text-content-secondary">
                {copy.statement}
              </p>
            </div>

            <div className="col-span-12 mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0" />
          </div>

          <div className="mt-20">
            <MediaSlot
              id={project.media.id}
              ratio="16 / 9"
              src={project.media.src}
              alt={copy.title}
              label={copy.galleryLabel}
            />
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container>
          <div className="grid grid-cols-12 gap-grid">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-meta text-content-tertiary uppercase">
                01 / {copy.context.title}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <h2 className="font-display text-display-project">{copy.context.title}</h2>
              <p className="mt-6 text-body-lg text-content-secondary">{copy.context.body}</p>
            </div>
          </div>

          <div className="mt-section-lg grid grid-cols-12 gap-grid">
            {CONTENT_SECTIONS.slice(1).map((section, index) => {
              const content = copy[section]
              return (
                <article
                  key={section}
                  className="col-span-12 border-t border-line pt-5 lg:col-span-5 lg:col-start-3"
                >
                  <p className="font-mono text-meta text-content-tertiary uppercase">
                    {String(index + 2).padStart(2, '0')} / {content.title}
                  </p>
                  <p className="mt-5 text-body text-content-secondary">{content.body}</p>
                </article>
              )
            })}
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
              <div className="mt-6 grid grid-cols-2 gap-grid">
                <div className="relative aspect-square overflow-hidden rounded-image">
                  <Image
                    src={project.media.src}
                    alt=""
                    fill
                    sizes="(min-width: 64rem) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-image">
                  <Image
                    src={project.media.src}
                    alt=""
                    fill
                    sizes="(min-width: 64rem) 33vw, 50vw"
                    className="object-cover object-right"
                  />
                </div>
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

      <Section spacing="large">
        <Container>
          <div className="mt-section-lg flex flex-wrap items-center justify-between gap-6 border-t border-line pt-5">
            {nextProject ? (
              <TextLink href={withLocale(`${ROUTES.work}/${nextProject.slug}`, locale)}>
                {copy.nextLabel} / {nextProject.title}
              </TextLink>
            ) : null}
            {project.liveUrl ? (
              <TextLink href={project.liveUrl} arrow="up-right" target="_blank" rel="noreferrer">
                {liveCta}
              </TextLink>
            ) : null}
            <TextLink href={withLocale(ROUTES.contact, locale)}>{copy.contactCta}</TextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
