/**
 * Section anchors and the main navigation.
 *
 * Anchors end up in the URL as `#work`, so they stay in English — a translated fragment
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
 * These are **anchors on the home page**, not routes: `/work`, `/services` and `/about`
 * only get their own pages once there is case-study content to fill them
 * (.agents/specs/01-home.md). Labels come from `dict.nav.items`, keyed by these.
 */
export const NAV_ITEM_KEYS = ['work', 'services', 'about'] as const

export type NavItemKey = (typeof NAV_ITEM_KEYS)[number]

/** Nav key -> section anchor. Explicit, so a renamed anchor cannot silently 404. */
export const NAV_ITEM_ANCHORS: Record<NavItemKey, SectionId> = {
  work: SECTION_IDS.work,
  services: SECTION_IDS.services,
  about: SECTION_IDS.about,
}
