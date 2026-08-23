import { Container } from '@/components/ui/container'
import { MediaSlot } from '@/components/ui/media-slot'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { SECTION_IDS } from '@/data/navigation'
import { PROJECTS } from '@/data/projects'
import { getDictionary } from '@/i18n/server'
import { cn } from '@/lib/utils/cn'

/**
 * The strongest proof on the page, so it gets the most space: one project per block,
 * large media, metadata alongside — never three small cards in a row
 * (.agents/01-brand-and-design.md).
 *
 * Blocks alternate their alignment, which is what keeps a list of two or three projects
 * from reading as a grid.
 *
 * No `Zobacz case study` link yet: `/work/[slug]` does not exist, because the case-study
 * content does not exist. A status label is honest; a link to a 404 is not
 * (.agents/specs/01-home.md).
 */
export async function SelectedWorkSection() {
  const dict = await getDictionary()

  return (
    <Section id={SECTION_IDS.work} spacing="xl">
      <Container>
        <SectionHeader
          index={2}
          label={dict.work.label}
          headlineLines={dict.work.headline}
          aside={<p>{dict.work.intro}</p>}
        />

        <div className="mt-20 flex flex-col gap-section-sm">
          {PROJECTS.map((project, index) => {
            const copy = dict.work.projects[project.key]
            /* Odd blocks sit to the right. Two projects, two alignments — the rhythm has
               to come from composition, because there is no third project yet. */
            const alignRight = index % 2 === 1

            return (
              <article key={project.slug} className="grid grid-cols-12 gap-grid">
                <div
                  className={cn(
                    'col-span-12',
                    alignRight ? 'lg:col-span-9 lg:col-start-4' : 'lg:col-span-9',
                  )}
                >
                  <MediaSlot
                    id={project.media.id}
                    ratio={project.media.ratio}
                    label={dict.work.mediaPending}
                  />
                </div>

                <div
                  className={cn(
                    'col-span-12 mt-6',
                    alignRight ? 'lg:col-span-9 lg:col-start-4' : 'lg:col-span-9',
                  )}
                >
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-meta text-content-tertiary uppercase">
                    {project.tags.map((tag) => (
                      <span key={tag}>{dict.work.tags[tag]}</span>
                    ))}
                    {project.team === 'codebros' && (
                      <span className="text-accent-strong">{dict.work.teamCodebros}</span>
                    )}
                    {project.year && <span>{project.year}</span>}
                  </p>

                  <div className="mt-4 grid grid-cols-12 gap-grid">
                    <h3 className="col-span-12 font-display text-display-project lg:col-span-5">
                      {copy.title}
                    </h3>
                    <p className="col-span-12 mt-3 text-body text-content-secondary lg:col-span-6 lg:col-start-7 lg:mt-0">
                      {copy.description}
                    </p>
                  </div>

                  <p className="mt-6 font-mono text-meta text-content-ghost uppercase">
                    {dict.work.casePending}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
