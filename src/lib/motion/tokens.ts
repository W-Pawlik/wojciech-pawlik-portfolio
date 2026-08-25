/**
 * Motion tokens - the JS mirror of the easing scale in src/styles/theme.css and
 * the duration scale in src/styles/base.css. Two representations are unavoidable
 * (Tailwind needs CSS custom properties, Motion and GSAP need numbers), so when
 * one changes, change the other. `tokens.test.ts` fails if they drift apart.
 *
 * Nothing else may invent its own curve or its own duration.
 *
 * Reference: .agents/05-animation-system.md
 */

export type Bezier = [number, number, number, number]

/** Seconds - Motion and GSAP both take seconds, CSS takes the `ms` mirror. */
export const DURATION = {
  instant: 0.12,
  fast: 0.2,
  base: 0.32,
  /** Drawer and other panel transitions. */
  slow: 0.44,
  /** Section reveal. */
  reveal: 0.7,
  /** The longest transition the art direction allows. Nothing runs past this. */
  hero: 1.1,
} as const

export type DurationToken = keyof typeof DURATION

/** Decisive start, soft settle. Symmetric ease-in-out is deliberately absent. */
export const EASE = {
  outExpo: [0.16, 1, 0.3, 1],
  outQuint: [0.22, 1, 0.36, 1],
  outQuart: [0.25, 1, 0.5, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
} as const satisfies Record<string, Bezier>

export type EaseToken = keyof typeof EASE

/**
 * Delay between siblings in a staggered group. `tight` and `base` are the section
 * reveal (60–100ms); `loose` is the line-by-line hero reveal (80–120ms).
 */
export const STAGGER = {
  tight: 0.06,
  base: 0.09,
  loose: 0.12,
} as const

/**
 * Default viewport contract for scroll reveals: play once, when a third of the
 * element is visible. Reveals must never replay on scroll-up.
 */
export const VIEWPORT = {
  once: true,
  amount: 0.3,
} as const

/** Vertical travel of a reveal, in pixels. Subtle by design - never 100px. */
export const REVEAL_DISTANCE = 28

/** Parallax range, in pixels. The effect should be almost subconscious. */
export const PARALLAX_RANGE = 40
