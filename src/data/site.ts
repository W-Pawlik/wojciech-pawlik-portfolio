/**
 * Single source of truth for facts about the business: name, contact details, opening
 * hours, social links. Referenced by the footer, the contact section, the error page and
 * the metadata, so a change here propagates everywhere.
 *
 * Contact details are supplied by the owner and rendered wherever a direct contact route
 * is useful. Legal details and social profiles remain empty until they are confirmed.
 *
 * This project is a personal brand, not a local business - see ADR-0010
 * (.agents/decisions/0010-personal-brand-and-two-tier-architecture.md):
 * - e-mail is the primary channel, phone and address are optional,
 * - `openingHours` stays empty by design; the equivalent promise is the reply time
 *   declared next to the form,
 * - `hasPublishableContactDetails` gates on "e-mail or phone", not on the template's
 *   `phone && street`.
 */

import { resolveSiteUrl } from '@/lib/seo/site-url'

/**
 * Written out rather than inferred with `as const`, so the fields that can legitimately
 * be empty stay typed as `string`. With literal types, `phone !== ''` narrows to "always
 * true" and TypeScript reports the gates below as dead code - which they are not.
 */
type SiteConfig = {
  name: string
  legalName: string
  /** Formal name - company details, footer, anything that has to match public records. */
  fullLegalName: string
  description: string
  /** 0 while unknown. Feeds "in business since" copy and the planned JSON-LD. */
  foundedYear: number
  /** Static, not derived from the clock - a build in January must not roll it back. */
  copyrightYear: number
  address: { street: string; postalCode: string; city: string; country: string }
  contact: { phone: string; phoneHref: string; email: string }
  openingHours: ReadonlyArray<{ days: string; hours: string }>
  social: ReadonlyArray<{ label: string; href: string }>
}

export const siteConfig: SiteConfig = {
  name: 'PawlikWeb',
  legalName: 'Wojciech Pawlik',
  fullLegalName: 'Wojciech Pawlik',
  description:
    'Projektuję i buduję strony, systemy webowe i automatyzacje AI dopasowane do tego, jak firma naprawdę działa. Przy większych produktach pracuję z bratem jako CodeBros.',
  /** TODO(brief): first year of client projects - no number on the site until confirmed. */
  foundedYear: 0,
  copyrightYear: 2026,

  address: { street: 'Widok 22', postalCode: '55-040', city: 'Bielany Wrocławskie', country: 'PL' },

  contact: {
    phone: '+48 666 223 853',
    phoneHref: 'tel:+48666223853',
    email: 'wojciech.pawlikweb@gmail.com',
  },

  /** Empty by design - a project service has no opening hours (ADR-0010). */
  openingHours: [],

  /** TODO(brief): GitHub / LinkedIn once confirmed. */
  social: [],
}

/**
 * True once there is a channel worth rendering. Components use this instead of checking
 * individual fields, so an unfinished `site.ts` never ships an empty line where a contact
 * route should be.
 *
 * "Email **or** phone", per ADR-0010: this is a remote project service, so the address is
 * optional and the phone may never exist - the template's original `phone && street` would
 * hide the contact block permanently.
 */
export const hasPublishableContactDetails =
  siteConfig.contact.email !== '' || siteConfig.contact.phone !== ''

/**
 * Absolute origin of the deployment. Needed for metadataBase, Open Graph and the
 * sitemap. Localhost is a development convenience only - a production build without
 * `NEXT_PUBLIC_SITE_URL` fails instead of shipping a canonical nobody can resolve.
 * See `@/lib/seo/site-url`.
 */
export const siteUrl = resolveSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.NODE_ENV === 'production',
)
