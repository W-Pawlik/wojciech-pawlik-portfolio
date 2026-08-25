/**
 * The four customer-facing stages of working together, and the three principles behind them.
 *
 * Keys only - copy is in the dictionaries under `process.steps` and `approach.principles`.
 * The process is rendered as a connected editorial sequence, never as a row of cards.
 */

export const PROCESS_STEPS = ['understand', 'design', 'build', 'launch'] as const

export type ProcessStep = (typeof PROCESS_STEPS)[number]

/** What differentiates the offer, in three lines. Shown right after the hero. */
export const PRINCIPLES = ['businessFirst', 'customByDefault', 'builtToShip'] as const

export type Principle = (typeof PRINCIPLES)[number]

/**
 * Trust metadata under the About text: three concise rows instead of a paragraph of
 * self-praise. Every one of them has to be backed by a fact from the brief.
 */
export const TRUST_ROWS = ['experience', 'projects', 'hobbies'] as const

export type TrustRow = (typeof TRUST_ROWS)[number]
