/**
 * Selected work. Structure, slugs and metadata only — every word lives in the
 * dictionaries under `work.projects`, keyed by `key` (.agents/03-architecture.md).
 *
 * Two entries, both real builds. The brief asks for a third (a commercial client site);
 * it is deliberately absent rather than invented — an imaginary case study on a page
 * whose whole job is proving capability would be the worst possible lie.
 *
 * `status` drives what the card offers: a case-study page exists, or it says so. Nothing
 * links to a route that would 404.
 */

export const PROJECT_TAGS = [
  'webApp',
  'productDesign',
  'fullStack',
  'internalSystem',
  'riskScoring',
] as const

export type ProjectTag = (typeof PROJECT_TAGS)[number]

export type Project = {
  /** Shared across locales, indexed once `/work/[slug]` exists (ADR-0003). */
  slug: string
  /** Dictionary key under `work.projects`. */
  key: 'planik' | 'creditRisk'
  tags: readonly ProjectTag[]
  /**
   * Displayed as mono metadata when known. A string, not a number: some builds span two
   * years. TODO(brief): both years are unknown — an invented date on a case study is a
   * fabricated fact, so the metadata row simply omits it until confirmed.
   */
  year?: string
  /** Who built it. Drives the CodeBros badge. */
  team: 'solo' | 'codebros'
  /**
   * `pending` = the build is real, the case study is not written yet. Renders a status
   * label instead of a link (.agents/specs/01-home.md).
   */
  status: 'published' | 'pending'
  /** Shot-list id and crop, until the screenshots exist (01-brand-and-design.md). */
  media: { id: string; ratio: string }
}

export const PROJECTS: readonly Project[] = [
  {
    slug: 'planik',
    key: 'planik',
    tags: ['webApp', 'productDesign', 'fullStack'],
    team: 'codebros',
    status: 'pending',
    media: { id: 'IMG-05', ratio: '16 / 10' },
  },
  {
    slug: 'credit-risk-system',
    key: 'creditRisk',
    tags: ['internalSystem', 'riskScoring', 'fullStack'],
    team: 'codebros',
    status: 'pending',
    media: { id: 'IMG-07', ratio: '16 / 10' },
  },
]
