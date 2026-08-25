import type { MetadataRoute } from 'next'

import { siteConfig } from '@/data/site'
import { defaultLocale } from '@/i18n/config'

/**
 * The single SVG mark doubles as the favicon (`app/icon.svg`) and the manifest icon.
 * Raster sizes are missing on purpose - an installed shortcut falls back to the SVG,
 * which is better than pointing at files that do not exist.
 *
 * Colours match `--color-canvas` in theme.css and `viewport.themeColor` in the layout.
 * All three have to change together.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    lang: defaultLocale,
    start_url: `/${defaultLocale}`,
    display: 'standalone',
    background_color: '#f3f0e9',
    theme_color: '#f3f0e9',
    icons: [{ src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' }],
  }
}
