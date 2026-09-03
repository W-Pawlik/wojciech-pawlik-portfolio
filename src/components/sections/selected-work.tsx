import { SelectedWorkFallback } from '@/components/sections/selected-work-fallback'
import { SelectedWorkLazy } from '@/components/sections/selected-work-lazy'
import { Section } from '@/components/ui/section'
import { SECTION_IDS } from '@/data/navigation'
import { PROJECTS } from '@/data/projects'
import { getDictionary } from '@/i18n/server'
import { getLocale } from '@/i18n/server'

/** The landing page turns the project archive into one focused full-screen proof moment. */
type SelectedWorkSectionProps = {
  scope?: 'landing' | 'all'
}

export async function SelectedWorkSection({ scope = 'landing' }: SelectedWorkSectionProps) {
  const dict = await getDictionary()
  const locale = await getLocale()
  const projects = scope === 'all' ? PROJECTS : PROJECTS.filter((project) => project.showOnLanding)

  return (
    <Section id={SECTION_IDS.work} spacing="none" tone="invert">
      <SelectedWorkLazy projects={projects} copy={dict.work} locale={locale}>
        <SelectedWorkFallback projects={projects} copy={dict.work} locale={locale} />
      </SelectedWorkLazy>
    </Section>
  )
}
