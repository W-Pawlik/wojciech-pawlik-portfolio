/**
 * Selected work. Structure, slugs and metadata only - every word lives in the
 * dictionaries under `work.projects`, keyed by `key` (.agents/03-architecture.md).
 *
 * Two entries, both real builds. The brief asks for a third (a commercial client site);
 * it is deliberately absent rather than invented - an imaginary case study on a page
 * whose whole job is proving capability would be the worst possible lie.
 *
 * `status` drives what the card offers: a case-study page exists, or it says so. Nothing
 * links to a route that would 404.
 */

export const PROJECT_TAGS = [
  'webApp',
  'website',
  'branding',
  'logoCreation',
  'businessAnalysis',
  'fullStack',
  'internalSystem',
  'riskScoring',
] as const

export type ProjectTag = (typeof PROJECT_TAGS)[number]

export type Project = {
  /** Shared across locales, indexed once `/work/[slug]` exists (ADR-0003). */
  slug: string
  /** Dictionary key under `work.projects`. */
  key: 'planik' | 'creditRisk' | 'mawAuto' | 'agnieszkaLuzarska' | 'vantaDetailing'
  tags: readonly ProjectTag[]
  /**
   * Displayed as mono metadata when known. A string, not a number: some builds span two
   * years. TODO(brief): both years are unknown - an invented date on a case study is a
   * fabricated fact, so the metadata row simply omits it until confirmed.
   */
  year?: string
  /** Who built it. Drives the CodeBros badge. */
  team: 'solo' | 'codebros'
  /** The landing shows a curated proof set; the archive shows every project. */
  showOnLanding: boolean
  /** Optional public URL; omitted until a live project URL is confirmed. */
  liveUrl?: string
  /**
   * `pending` = the build is real, the case study is not written yet. Renders a status
   * label instead of a link (.agents/specs/01-home.md).
   */
  status: 'published' | 'pending'
  /** Shot-list id and crop, until the screenshots exist (01-brand-and-design.md). */
  media: { id: string; ratio: string; src: string }
  /** Project logo used in the landing-page filmstrip and project archive. */
  logoSrc: string
  /** The supplied logo artwork may be designed for a dark or light surface. */
  logoSurface?: 'light' | 'dark'
}

export const PROJECTS: readonly Project[] = [
  {
    slug: 'maw-autoserwis',
    key: 'mawAuto',
    tags: ['website', 'branding'],
    team: 'solo',
    showOnLanding: true,
    status: 'pending',
    media: {
      id: 'IMG-08',
      ratio: '16 / 10',
      src: '/images/projects/maw-autoserwis/realization.png',
    },
    logoSrc: '/images/projects/maw-autoserwis/logo.png',
  },
  {
    slug: 'agnieszka-luzarska-website',
    key: 'agnieszkaLuzarska',
    tags: ['website', 'logoCreation'],
    team: 'solo',
    showOnLanding: true,
    liveUrl: 'https://agnieszka-luzarska-site.vercel.app/',
    status: 'pending',
    media: {
      id: 'IMG-09',
      ratio: '16 / 10',
      src: '/images/projects/agnieszka-luzarska/realization.png',
    },
    logoSrc: '/images/projects/agnieszka-luzarska/logo.svg',
  },
  {
    slug: 'vanta-detailing',
    key: 'vantaDetailing',
    tags: ['website', 'branding'],
    team: 'solo',
    showOnLanding: true,
    liveUrl: 'https://vanta-website-pied.vercel.app/pl',
    status: 'pending',
    media: {
      id: 'IMG-10',
      ratio: '16 / 10',
      src: '/images/projects/vanta-detailing/realization.png',
    },
    logoSrc: '/images/projects/vanta-detailing/logo.svg',
    logoSurface: 'dark',
  },
  {
    slug: 'planik',
    key: 'planik',
    tags: ['webApp', 'businessAnalysis', 'branding'],
    team: 'codebros',
    showOnLanding: true,
    status: 'pending',
    media: {
      id: 'IMG-05',
      ratio: '16 / 10',
      src: '/images/projects/planik/realization.png',
    },
    logoSrc: '/images/projects/planik/logo.svg',
  },
  {
    slug: 'credit-risk-system',
    key: 'creditRisk',
    tags: ['internalSystem', 'riskScoring', 'fullStack'],
    team: 'codebros',
    showOnLanding: false,
    status: 'pending',
    media: {
      id: 'IMG-07',
      ratio: '16 / 10',
      src: '/images/projects/credit-risk-system/realization.png',
    },
    logoSrc: '/images/projects/credit-risk-system/logo.svg',
  },
]
