import Image from 'next/image'

import { SectionLabel } from '@/components/ui/section-label'
import { TextLink } from '@/components/ui/text-link'
import type { Project } from '@/data/projects'
import { projectRoute } from '@/data/projects'
import { localizedHref, ROUTES } from '@/data/routes'
import { withLocale, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

type SelectedWorkFallbackProps = {
  projects: readonly Project[]
  copy: Dictionary['work']
  locale: Locale
}

/**
 * Server-rendered preview shown until the interactive project reel is close to view.
 * Keeping the preview in the server tree preserves the portfolio content and layout
 * while the Motion carousel stays out of the initial client work.
 */
export function SelectedWorkFallback({ projects, copy, locale }: SelectedWorkFallbackProps) {
  const project = projects[0]
  if (!project) return null

  const projectCopy = copy.projects[project.key]

  return (
    <div className="relative h-viewport-minus-nav w-full overflow-hidden bg-canvas-invert text-content-invert">
      <Image
        src={project.media.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-canvas-invert/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-canvas-invert/70 via-transparent to-canvas-invert/90"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 px-gutter pt-gutter">
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
          <div className="max-w-xl">
            <SectionLabel index={4} tone="invert">
              {copy.label}
            </SectionLabel>
            <p className="mt-4 max-w-lg text-body text-content-invert-secondary">{copy.intro}</p>
          </div>
          <TextLink
            href={localizedHref(ROUTES.work, locale)}
            tone="invert"
            accent
            className="ml-auto"
          >
            {copy.allProjectsCta}
          </TextLink>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-canvas-invert/90 px-gutter pb-gutter">
        <div className="max-w-2xl">
          <p className="font-mono text-meta text-content-invert-tertiary uppercase">
            {projectCopy.title}
          </p>
          <h2 className="mt-3 font-display text-display-project text-content-invert">
            {projectCopy.title}
          </h2>
          <p className="mt-3 max-w-xl text-body text-content-invert-secondary">
            {projectCopy.description}
          </p>
          <TextLink
            href={withLocale(projectRoute(project, locale), locale)}
            tone="invert"
            accent
            className="mt-5"
          >
            {copy.caseStudyCta}
          </TextLink>
        </div>
      </div>
    </div>
  )
}
