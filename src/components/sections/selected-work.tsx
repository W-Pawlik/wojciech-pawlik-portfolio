import { Container } from '@/components/ui/container'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { TextLink } from '@/components/ui/text-link'
import { SECTION_IDS } from '@/data/navigation'
import { PROJECTS } from '@/data/projects'
import { ROUTES } from '@/data/routes'
import { getDictionary } from '@/i18n/server'
import { getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'
import { cn } from '@/lib/utils/cn'

/**
 * One project per row keeps the work section closer to an editorial index than a card
 * grid. The title and description lead; the number is only a quiet registration mark.
 * The landing page keeps the descriptions brief and sends the interested visitor to the
 * full case study for context, decisions and implementation details.
 */
type SelectedWorkSectionProps = {
  scope?: 'landing' | 'all'
  headlineAs?: 'h1' | 'h2'
}

export async function SelectedWorkSection({
  scope = 'landing',
  headlineAs = 'h2',
}: SelectedWorkSectionProps) {
  const dict = await getDictionary()
  const locale = await getLocale()
  const projects = scope === 'all' ? PROJECTS : PROJECTS.filter((project) => project.showOnLanding)

  return (
    <Section id={SECTION_IDS.work} spacing="xl">
      <Container>
        <SectionHeader
          index={2}
          label={dict.work.label}
          headlineLines={dict.work.headline}
          headlineAs={headlineAs}
          aside={<p>{dict.work.intro}</p>}
        />

        <div className="mt-20 border-t border-line">
          {projects.map((project, index) => {
            const copy = dict.work.projects[project.key]
            const alignRight = index % 2 === 1
            const number = String(index + 1).padStart(2, '0')

            return (
              <article
                key={project.slug}
                className="grid grid-cols-12 gap-grid border-b border-line py-section-sm lg:items-center"
              >
                <div className="col-span-12 flex items-baseline justify-between lg:col-span-1 lg:block lg:self-stretch">
                  <span className="font-display text-numeric text-content-ghost">{number}</span>
                  <span className="font-mono text-meta text-content-tertiary lg:mt-4 lg:block">
                    {dict.work.projectLabel}
                  </span>
                </div>

                <div
                  className={cn(
                    'col-span-12 lg:col-span-7',
                    alignRight ? 'lg:col-start-6 lg:row-start-1' : 'lg:col-start-2',
                  )}
                >
                  <MediaSlot
                    id={project.media.id}
                    ratio={project.media.ratio}
                    src={project.media.src}
                    alt={`${copy.title} — ${dict.work.visualization}`}
                    label={dict.work.visualization}
                    fit="contain"
                    zoomable
                    closeLabel={dict.nav.closeMenu}
                  />
                </div>

                <div
                  className={cn(
                    'col-span-12 mt-7 lg:col-span-4 lg:mt-0',
                    alignRight ? 'lg:col-start-2 lg:row-start-1 lg:pr-6' : 'lg:col-start-9 lg:pl-2',
                  )}
                >
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-meta text-content-tertiary uppercase">
                    {project.tags.map((tag) => (
                      <span key={tag}>{dict.work.tags[tag]}</span>
                    ))}
                    {project.team === 'codebros' && (
                      <span className="text-accent-strong">{dict.work.teamCodebros}</span>
                    )}
                  </p>

                  <div className="mt-4">
                    <p className="font-mono text-meta text-content-tertiary uppercase">
                      {dict.work.projectLabel} {number} / {copy.title}
                    </p>
                    <h3 className="mt-3 font-display text-display-project">{copy.title}</h3>
                    <p className="mt-4 max-w-[26rem] text-body text-content-secondary">
                      {copy.description}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <TextLink
                      data-return-scroll
                      href={withLocale(`${ROUTES.work}/${project.slug}`, locale)}
                    >
                      {dict.work.caseStudyCta}
                    </TextLink>
                    {project.liveUrl ? (
                      <TextLink
                        href={project.liveUrl}
                        arrow="up-right"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {dict.work.liveCta}
                      </TextLink>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex justify-end">
          <TextLink href={withLocale(ROUTES.work, locale)}>{dict.work.allProjectsCta}</TextLink>
        </div>
      </Container>
    </Section>
  )
}
