import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

import { DURATION, EASE } from './tokens'

/**
 * Guard tests for a duplication we accepted on purpose: the easing and duration
 * scales exist twice, as CSS custom properties (for Tailwind) and as numbers (for
 * Motion and GSAP). A change on one side that is not mirrored on the other produces
 * two slightly different motion languages on the same page - visible, but almost
 * impossible to attribute. See .agents/02-design-system.md.
 */

/** Read from the repo root: Vitest always runs with the project root as cwd. */
const readStylesheet = (name: string) =>
  readFileSync(join(process.cwd(), 'src/styles', name), 'utf8')

const theme = readStylesheet('theme.css')
const base = readStylesheet('base.css')

/** `outExpo` -> `--ease-out-expo` */
function easeCustomProperty(token: string): string {
  return `--ease-${token.replace(/([A-Z])/g, '-$1').toLowerCase()}`
}

describe('easing tokens', () => {
  it.each(Object.entries(EASE))('%s matches the CSS cubic-bezier', (token, curve) => {
    const property = easeCustomProperty(token)
    const declared = new RegExp(`${property}:\\s*cubic-bezier\\(([^)]+)\\)`).exec(theme)

    expect(declared, `${property} is missing from theme.css`).not.toBeNull()

    const values = declared?.[1]?.split(',').map((part) => Number(part.trim()))
    expect(values).toEqual([...curve])
  })
})

describe('duration tokens', () => {
  it.each(Object.entries(DURATION))('%s matches the CSS millisecond value', (token, seconds) => {
    const property = `--duration-${token}`
    const declared = new RegExp(`${property}:\\s*(\\d+)ms`).exec(base)

    expect(declared, `${property} is missing from base.css`).not.toBeNull()
    expect(Number(declared?.[1])).toBe(Math.round(seconds * 1000))
  })
})
