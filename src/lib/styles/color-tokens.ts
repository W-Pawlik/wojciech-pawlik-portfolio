import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Reads the `--color-*` declarations straight out of src/styles/theme.css.
 *
 * Server-only, and used by one page: /system renders the palette and computes every
 * contrast ratio from *these* values. Parsing the stylesheet instead of restating the
 * hexes in TypeScript is the whole point - a second copy of the palette would drift,
 * and the contrast table would then certify colours nobody ships.
 *
 * The read happens when /system is prerendered, so it costs nothing at runtime.
 */

/** Matches `--color-content-secondary: #3d3f42;` and captures name plus value. */
const COLOR_DECLARATION = /--color-([a-z0-9-]+):\s*([^;]+);/g

export type ColorTokens = Readonly<Record<string, string>>

export function readColorTokens(path = join(process.cwd(), 'src/styles/theme.css')): ColorTokens {
  const stylesheet = readFileSync(path, 'utf8')
  const tokens: Record<string, string> = {}

  for (const [, name, value] of stylesheet.matchAll(COLOR_DECLARATION)) {
    if (name && value) tokens[name] = value.trim()
  }

  return tokens
}

/**
 * Looks a token up and fails loudly if it is gone. A renamed token would otherwise
 * silently become black in the swatch grid and read as an intentional colour.
 */
export function colorToken(tokens: ColorTokens, name: string): string {
  const value = tokens[name]
  if (!value) throw new Error(`--color-${name} is not declared in theme.css`)

  return value
}
