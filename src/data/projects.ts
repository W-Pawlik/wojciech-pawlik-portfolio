/**
 * Selected work. Structure, slugs and metadata only - every word lives in the
 * dictionaries under `work.projects`, keyed by `key` (.agents/03-architecture.md).
 *
 * Every entry represents a real build or a documented portfolio project. Copy lives in
 * the locale dictionaries; this module only describes routing, media and classification.
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

import type { Locale } from '@/i18n/config'
import { routePath } from './routes'

export type Project = {
  /** Polish slug retained as the stable data identifier. */
  slug: string
  /** Search-friendly case-study slugs for every published language. */
  slugs: Record<Locale, string>
  /** Dictionary key under `work.projects`. */
  key: 'planik' | 'creditRisk' | 'mawAuto' | 'agnieszkaLuzarska' | 'vantaDetailing' | 'dzendzera'
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
  /** Shot-list id and crop, with an optional project-specific gallery. */
  media: { id: string; ratio: string; src: string; gallery?: readonly string[] }
  /** Project logo used in the landing-page filmstrip and project archive. */
  logoSrc: string
  /** The supplied logo artwork may be designed for a dark or light surface. */
  logoSurface?: 'light' | 'dark'
}

export const PROJECTS: readonly Project[] = [
  {
    slug: 'dzendzera',
    slugs: { pl: 'dzendzera', en: 'dzendzera-photography' },
    key: 'dzendzera',
    tags: ['website', 'branding'],
    team: 'solo',
    showOnLanding: true,
    liveUrl: 'https://dzendzera.vercel.app',
    status: 'pending',
    media: {
      id: 'IMG-11',
      ratio: '16 / 10',
      src: '/images/projects/dzendzera/hero-section.png',
      gallery: [
        '/images/projects/dzendzera/one-event-one-rhythm.png',
        '/images/projects/dzendzera/contact.png',
        '/images/projects/dzendzera/parallax-section.png',
        '/images/projects/dzendzera/performance.png',
        '/images/projects/dzendzera/collaboration.png',
        '/images/projects/dzendzera/mobile-1.png',
        '/images/projects/dzendzera/mobile-2.png',
        '/images/projects/dzendzera/full-page.png',
      ],
    },
    logoSrc: '/images/projects/dzendzera/logo-black.svg',
  },
  {
    slug: 'maw-autoserwis',
    slugs: { pl: 'maw-autoserwis', en: 'maw-autoservice' },
    key: 'mawAuto',
    tags: ['website', 'branding'],
    team: 'solo',
    showOnLanding: true,
    liveUrl: 'https://maw-autoserwis-eosin.vercel.app',
    status: 'pending',
    media: {
      id: 'IMG-08',
      ratio: '16 / 10',
      src: '/images/projects/maw-autoserwis/hero-section.png',
      gallery: [
        '/images/projects/maw-autoserwis/commercial-vehicles.png',
        '/images/projects/maw-autoserwis/pricing.png',
        '/images/projects/maw-autoserwis/our-approach.png',
        '/images/projects/maw-autoserwis/auto-electrics.png',
        '/images/projects/maw-autoserwis/scope.png',
        '/images/projects/maw-autoserwis/mobile-2.png',
        '/images/projects/maw-autoserwis/mobile-hero.png',
        '/images/projects/maw-autoserwis/full-size-landingpage.png',
      ],
    },
    logoSrc: '/images/projects/maw-autoserwis/logo.svg',
  },
  {
    slug: 'agnieszka-luzarska-website',
    slugs: { pl: 'agnieszka-luzarska-strona', en: 'agnieszka-luzarska-website' },
    key: 'agnieszkaLuzarska',
    tags: ['website', 'logoCreation'],
    team: 'solo',
    showOnLanding: true,
    liveUrl: 'https://agnieszka-luzarska-site.vercel.app/',
    status: 'pending',
    media: {
      id: 'IMG-09',
      ratio: '16 / 10',
      src: '/images/projects/agnieszka-luzarska/hero_section.png',
      gallery: [
        '/images/projects/agnieszka-luzarska/cards.png',
        '/images/projects/agnieszka-luzarska/liczby.png',
        '/images/projects/agnieszka-luzarska/oferta.png',
        '/images/projects/agnieszka-luzarska/o_mnie.png',
        '/images/projects/agnieszka-luzarska/proces.png',
        '/images/projects/agnieszka-luzarska/mobile_1.png',
        '/images/projects/agnieszka-luzarska/mobile_2.png',
        '/images/projects/agnieszka-luzarska/full_size.png',
      ],
    },
    logoSrc: '/images/projects/agnieszka-luzarska/logo.svg',
  },
  {
    slug: 'vanta-detailing',
    slugs: { pl: 'vanta-detailing', en: 'vanta-detailing' },
    key: 'vantaDetailing',
    tags: ['website', 'branding'],
    team: 'solo',
    showOnLanding: true,
    liveUrl: 'https://vanta-website-pied.vercel.app/pl',
    status: 'pending',
    media: {
      id: 'IMG-10',
      ratio: '16 / 10',
      src: '/images/projects/vanta-detailing/hero-section.png',
      gallery: [
        '/images/projects/vanta-detailing/why-vanta.png',
        '/images/projects/vanta-detailing/services.png',
        '/images/projects/vanta-detailing/before-after.png',
        '/images/projects/vanta-detailing/gallery.png',
        '/images/projects/vanta-detailing/gallery-2.png',
        '/images/projects/vanta-detailing/mobile-1.png',
        '/images/projects/vanta-detailing/mobile-2.png',
      ],
    },
    logoSrc: '/images/projects/vanta-detailing/logo_black.svg',
  },
  {
    slug: 'planik',
    slugs: { pl: 'planik', en: 'planik' },
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
    slugs: { pl: 'system-oceny-ryzyka-kredytowego', en: 'credit-risk-system' },
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

export function projectSlug(project: Project, locale: Locale): string {
  return project.slugs[locale]
}

export function projectRoute(project: Project, locale: Locale): string {
  return `${routePath('work', locale)}/${projectSlug(project, locale)}`
}

export function projectBySlug(slug: string, locale?: Locale): Project | undefined {
  return PROJECTS.find(
    (project) =>
      project.slug === slug ||
      project.slugs.pl === slug ||
      project.slugs.en === slug ||
      (locale !== undefined && project.slugs[locale] === slug),
  )
}
