import { PageHeader } from '@/components/pages/page-header'
import { Container } from '@/components/ui/container'
import { MediaSlot } from '@/components/ui/media-slot'
import { ProjectDetails } from '@/components/ui/project-details'
import { Section } from '@/components/ui/section'
import { TextLink } from '@/components/ui/text-link'
import { PROJECTS } from '@/data/projects'
import { ROUTES } from '@/data/routes'
import { getDictionary, getLocale } from '@/i18n/server'
import { withLocale } from '@/i18n/config'

/** The work index is an editorial archive, not the landing page's selected-work section. */
export async function WorkIndexPage() {
  const dict = await getDictionary()
  const locale = await getLocale()

  return (
    <>
      <PageHeader
        label={dict.work.label}
        headlineLines={dict.work.pageHeadline}
        intro={dict.work.pageIntro}
      />
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
                      alt={`${copy.title} — ${dict.work.visualization}`}
                      label={dict.work.visualization}
                    />
                  </div>
                  <div className="col-span-12 mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0">
                    <p className="font-mono text-meta text-content-tertiary uppercase">
                      {project.tags.map((tag) => dict.work.tags[tag]).join(' · ')}
                    </p>
                    <h2 className="mt-4 font-display text-display-project">{copy.title}</h2>
                    <p className="mt-4 text-body text-content-secondary">{copy.description}</p>
                    <TextLink
                      href={withLocale(`${ROUTES.work}/${project.slug}`, locale)}
                      className="mt-7"
                    >
                      {dict.work.caseStudyCta}
                    </TextLink>
                    <ProjectDetails copy={{ ...dict.work.details, ...copy.details }} />
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}
