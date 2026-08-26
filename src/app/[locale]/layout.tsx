import type { Metadata, Viewport } from 'next'
import { Allura, IBM_Plex_Mono, Instrument_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { SmoothAnchorScroll } from '@/components/motion/smooth-anchor-scroll'
import { ReturnScrollPosition } from '@/components/motion/return-scroll-position'
import { isLocale, locales, localeMeta } from '@/i18n/config'
import { getDictionary } from '@/i18n/server'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildStructuredData } from '@/lib/seo/structured-data'
import { cn } from '@/lib/utils/cn'

import '@/styles/globals.css'

/**
 * Brand typefaces. Two families, and the second one only carries utility type:
 * Instrument Sans for everything read, IBM Plex Mono for the BUILD TRACE layer
 * (.agents/01-brand-and-design.md).
 *
 * `latin-ext` is not optional - Polish diacritics live there. next/font self-hosts the
 * files, so there is no render-blocking third-party request and no layout shift from a
 * late swap.
 *
 * The variable names are the contract: `src/styles/base.css` maps `--font-*-family` onto
 * `--font-brand-*`, and the theme reads only those. Display and sans deliberately share
 * one instance - a second identical download to satisfy a naming convention would be
 * waste (base.css points both roles at `--font-sans-family`).
 */
const sans = Instrument_Sans({
  variable: '--font-sans-family',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  variable: '--font-mono-family',
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

const signature = Allura({
  variable: '--font-signature-family',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

/** Every locale is prerendered as static HTML at build time. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return buildMetadata({ locale })
}

/** Matches `--color-canvas` in theme.css and the manifest colours. */
export const viewport: Viewport = {
  themeColor: '#f3f0e9',
}

/**
 * Root layout. It lives under `[locale]` so `locale` becomes a root parameter, which lets
 * every Server Component read its copy via `getDictionary()` instead of having the locale
 * drilled through props.
 *
 * `Navbar` and `Footer` live here, around `<main>`: they are the same on every route.
 */
export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary()

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      className={cn('antialiased', sans.variable, mono.variable, signature.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildStructuredData(locale, dict.meta.description)).replace(
              /</g,
              '\\u003c',
            ),
          }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-body-sm focus:text-accent-contrast"
        >
          {dict.common.skipToContent}
        </a>
        <Navbar />
        <SmoothAnchorScroll />
        <ReturnScrollPosition />
        <main id="content">
          <span id="top" aria-hidden="true" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
