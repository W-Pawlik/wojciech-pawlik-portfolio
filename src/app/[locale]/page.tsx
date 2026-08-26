import { AboutSection } from '@/components/sections/about'
import { AIAutomationSection } from '@/components/sections/ai-automation'
import { ApproachSection } from '@/components/sections/approach'
import { CodeBrosSection } from '@/components/sections/codebros'
import { ContactSection } from '@/components/sections/contact'
import { FinalCtaSection } from '@/components/sections/final-cta'
import { HeroSection } from '@/components/sections/hero'
import { PricingSection } from '@/components/sections/pricing'
import { ProcessSection } from '@/components/sections/process'
import { SelectedWorkSection } from '@/components/sections/selected-work'
import { ServicesSection } from '@/components/sections/services'

/**
 * The home page is a **flat list of sections** and nothing else: no layout glue, no
 * wrappers, no conditionals. Sections own their spacing and tone, so this file stays
 * readable as a table of contents (.agents/03-architecture.md).
 *
 * The order is the funnel, not a ranking of what matters to the brand:
 * `RECOGNITION → DIFFERENTIATION → OFFER → PROOF → SCALE → PROCESS → CONVERSION`
 * (.agents/specs/01-home.md).
 *
 * Testimonials sit between About and the final CTA in the brief and are deliberately
 * absent: there are no real ones yet, and a section of invented praise on the page whose
 * job is proving capability would undo the rest of it.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <SelectedWorkSection />
      <CodeBrosSection />
      <AIAutomationSection />
      <ProcessSection />
      <PricingSection />
      <AboutSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  )
}
