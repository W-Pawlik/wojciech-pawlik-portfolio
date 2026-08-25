import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge has to be told about our custom theme scales, otherwise it
 * classifies `text-display-section` and `text-accent` into the same group and
 * silently drops one of them. Keep these lists in sync with src/styles/theme.css -
 * `cn.test.ts` covers the trap for both groups.
 */
const FONT_SIZES = [
  'display-statement',
  'display-hero',
  'display-section',
  'display-project',
  'display-card',
  'numeric',
  'quote',
  'body-lg',
  'body',
  'body-sm',
  'label',
  'meta',
  'button',
]

const TEXT_COLORS = [
  'canvas',
  'canvas-subtle',
  'canvas-deep',
  'content',
  'content-secondary',
  'content-tertiary',
  'content-ghost',
  'content-dim',
  'content-invert',
  'content-invert-secondary',
  'content-invert-tertiary',
  'accent',
  'accent-hover',
  'accent-strong',
  'accent-contrast',
  'accent-subtle',
  'danger',
]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: FONT_SIZES }],
      'text-color': [{ text: TEXT_COLORS }],
    },
  },
})

/** Compose conditional class names, resolving Tailwind conflicts last-wins. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
