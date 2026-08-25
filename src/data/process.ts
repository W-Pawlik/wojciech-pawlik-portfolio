/**
 * The seven steps of working together, and the three principles behind them.
 *
 * Keys only - copy is in the dictionaries under `process.steps` and `approach.principles`.
 * Both lists are rendered as editorial rows separated by hairlines, never as a row of
 * cards or a seven-card timeline (.agents/01-brand-and-design.md).
 */

export const PROCESS_STEPS = [
  'understand',
  'define',
  'design',
  'build',
  'review',
  'refine',
  'launch',
] as const

export type ProcessStep = (typeof PROCESS_STEPS)[number]

export const PROCESS_PHASES = [
  { key: 'direction', steps: ['understand', 'define', 'design'] },
  { key: 'production', steps: ['build', 'review'] },
  { key: 'release', steps: ['refine', 'launch'] },
] as const

export type ProcessPhase = (typeof PROCESS_PHASES)[number]

/** What differentiates the offer, in three lines. Shown right after the hero. */
export const PRINCIPLES = ['businessFirst', 'customByDefault', 'builtToShip'] as const

export type Principle = (typeof PRINCIPLES)[number]

/**
 * Trust metadata under the About text: three concise rows instead of a paragraph of
 * self-praise. Every one of them has to be backed by a fact from the brief.
 */
export const TRUST_ROWS = ['experience', 'projects', 'hobbies'] as const

export type TrustRow = (typeof TRUST_ROWS)[number]
