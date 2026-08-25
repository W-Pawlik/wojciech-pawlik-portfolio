/**
 * Section anchors and the main navigation.
 *
 * Anchors end up in the URL as `#work`, so they stay in English - a translated fragment
 * on a translated page reads as sloppy. Route slugs are the opposite case: they are
 * indexed, so they follow the main language (see `routes.ts` and ADR-0003).
 *
 * A section renders exactly the id listed here. Nothing anchors to a string literal.
 * Order matches the page (.agents/specs/01-home.md).
 */
export const SECTION_IDS = {
  approach: 'approach',
  work: 'work',
  services: 'services',
  codebros: 'codebros',
  ai: 'ai-automation',
  process: 'process',
  pricing: 'pricing',
  about: 'about',
  contact: 'contact',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

/**
 * Main navigation. Three entries plus the CTA: the navbar must not compete with the hero,
 * and a menu is not a table of contents (ADR-0006).
 *
 * Labels come from `dict.nav.items`, keyed by these. The navigation points to the detailed
 * multipager routes; the homepage keeps shorter summary sections for the sales flow.
 */
export const NAV_ITEM_KEYS = ['home', 'work', 'services', 'pricing', 'about'] as const

export type NavItemKey = (typeof NAV_ITEM_KEYS)[number]

/** Nav key -> section anchor. Explicit, so a renamed anchor cannot silently 404. */
import { ROUTES } from './routes'

export const NAV_ITEM_ROUTES: Record<NavItemKey, string> = {
  home: ROUTES.home,
  work: ROUTES.work,
  services: ROUTES.services,
  pricing: ROUTES.pricing,
  about: ROUTES.about,
}
