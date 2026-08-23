/**
 * WCAG 2.1 contrast maths, used by the /system page to check every text/background
 * pair of the palette in the browser instead of in a spreadsheet nobody reopens.
 *
 * Kept deliberately small: it takes the same hex strings that live in
 * src/styles/theme.css, so a token edit shows up as a new ratio on /system.
 * Alpha is not supported — a translucent token has no single ratio, so those pairs
 * have to be checked against their composited value instead.
 */

type Rgb = readonly [number, number, number]

/**
 * `#RGB` or `#RRGGBB`, case-insensitive. Throws on anything else: a silent 0 here
 * would read as "fails contrast" and send someone fixing a colour that is fine.
 */
export function parseHex(hex: string): Rgb {
  const value = hex.trim().replace(/^#/, '')

  const expanded =
    value.length === 3
      ? value
          .split('')
          .map((char) => char + char)
          .join('')
      : value

  if (!/^[0-9a-f]{6}$/i.test(expanded)) {
    throw new Error(`Not a hex colour: ${hex}`)
  }

  return [
    Number.parseInt(expanded.slice(0, 2), 16),
    Number.parseInt(expanded.slice(2, 4), 16),
    Number.parseInt(expanded.slice(4, 6), 16),
  ]
}

/** Linearised sRGB channel, 0-1. */
function channelLuminance(channel: number): number {
  const srgb = channel / 255
  return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4
}

/** Relative luminance per WCAG 2.1, formula 1.4.3. */
function luminance([r, g, b]: Rgb): number {
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b)
}

/** Contrast ratio between two hex colours: 1 (identical) to 21 (black on white). */
export function contrastRatio(foreground: string, background: string): number {
  const lighter = Math.max(luminance(parseHex(foreground)), luminance(parseHex(background)))
  const darker = Math.min(luminance(parseHex(foreground)), luminance(parseHex(background)))

  return (lighter + 0.05) / (darker + 0.05)
}

export type ContrastLevel = 'AAA' | 'AA' | 'AA-large' | 'fail'

/**
 * The badge shown next to a pair on /system.
 *
 * `AA-large` is the honest answer for a ratio between 3 and 4.5: legal for text at
 * 24px (or 18.66px bold) and for non-text UI boundaries, not for metadata at 11px.
 * Anything below 3 fails outright.
 */
export function contrastLevel(ratio: number): ContrastLevel {
  if (ratio >= 7) return 'AAA'
  if (ratio >= 4.5) return 'AA'
  if (ratio >= 3) return 'AA-large'
  return 'fail'
}
