'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { hasPublishableContactDetails, siteConfig } from '@/data/site'
import { defaultLocale } from '@/i18n/config'
import { dictionaryForUnknown } from '@/i18n/dictionaries'

/**
 * Route-level error boundary. Never shows the raw error to the visitor, and always leaves
 * a way to reach the business - a failed page must not cost a phone call.
 *
 * This is a Client Component, so it cannot use `next/root-params`. The locale is read from
 * the URL instead, falling back to the default.
 */
export default function RouteError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('[route error]', error)
  }, [error])

  const segment = typeof window === 'undefined' ? '' : window.location.pathname.split('/')[1]
  const dict = dictionaryForUnknown(segment, defaultLocale)

  return (
    <Section className="flex min-h-svh items-center">
      <Container>
        <SectionLabel className="mb-6">{dict.errorPage.label}</SectionLabel>
        <h1 className="max-w-[22ch] font-display text-display-section">
          {dict.errorPage.headline}
        </h1>
        <p className="mt-6 max-w-measure text-body text-content-secondary">{dict.errorPage.body}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button size="lg" onClick={reset}>
            {dict.errorPage.cta}
          </Button>
          {/* The fallback route is email, not a phone call: this is a project service
              (ADR-0010). Rendered only when there is a real address to render. */}
          {hasPublishableContactDetails && siteConfig.contact.email && (
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex h-14 items-center px-2 text-body text-content-secondary transition-colors hover:text-content"
            >
              {siteConfig.contact.email}
            </a>
          )}
        </div>
      </Container>
    </Section>
  )
}
