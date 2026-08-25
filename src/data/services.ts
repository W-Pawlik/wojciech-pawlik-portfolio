/**
 * The three offer pillars. Structure and links only - copy lives in the dictionaries
 * under `services.items`, keyed by `key`.
 *
 * `formContext` is the value the lead form should preselect when a visitor arrives from
 * this row. Wiring it up is Phase 04 (.agents/specs/01-home.md); the key exists here so
 * the data model does not have to change then.
 */

import { SECTION_IDS, type SectionId } from './navigation'
import type { ProjectType } from './contact'

export type Service = {
  key: 'websites' | 'systems' | 'ai'
  /** Where the row's CTA goes. An anchor, until the service pages exist. */
  target: SectionId
  formContext: ProjectType
}

export const SERVICES: readonly Service[] = [
  { key: 'websites', target: SECTION_IDS.contact, formContext: 'website' },
  { key: 'systems', target: SECTION_IDS.codebros, formContext: 'system' },
  { key: 'ai', target: SECTION_IDS.ai, formContext: 'ai' },
]

/** Visual evidence used by the dedicated service pages. Copy and alt text stay localized. */
export const SERVICE_MEDIA = {
  websites: {
    id: 'IMG-07',
    ratio: '16 / 10',
    src: '/images/homepage-seen-laptop-screen.jpg',
  },
  systems: {
    id: 'IMG-08',
    ratio: '16 / 9',
    src: '/images/uslugi_custom_systems.jpg',
  },
  ai: {
    id: 'IMG-09',
    ratio: '16 / 9',
    src: '/images/uslugi_ai.jpg',
  },
} as const
