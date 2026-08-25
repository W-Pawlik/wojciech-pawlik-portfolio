/**
 * Shape of the lead form, minus every word.
 *
 * The form is a **qualification** tool, not a "message" box: three choices first, then the
 * description, then the contact details (.agents/00-project-brief.md#formularz,
 * ADR-0010). The order matters - the easiest answer comes first.
 *
 * Keys stay in English: they travel in the form payload and in the notification email.
 * Every key needs a label in every dictionary - `dictionaries.test.ts` fails otherwise,
 * which is the only mechanism that catches an option nobody translated.
 */

/** What the visitor needs. Maps onto the three offer pillars, plus an honest "no idea". */
export const PROJECT_TYPES = ['website', 'system', 'ai', 'unsure'] as const

export type ProjectType = (typeof PROJECT_TYPES)[number]

/** How far along they are. Decides whether the next step is a quote or a conversation. */
export const PROJECT_STAGES = ['scope', 'idea', 'rebuild', 'help'] as const

export type ProjectStage = (typeof PROJECT_STAGES)[number]

/**
 * Budget bracket. The main filter of the form - and `unknown` is a legitimate answer, so
 * an honest visitor is never blocked from sending.
 */
export const BUDGET_RANGES = ['900-2000', '2000-5000', '5000-10000', '10000+', 'unknown'] as const

export type BudgetRange = (typeof BUDGET_RANGES)[number]

/** Field length limits. Shared by the client schema and the server re-validation. */
export const CONTACT_LIMITS = {
  name: 60,
  message: 1200,
  /** Low on purpose: the bar for "wrote something useful" is a sentence, not an essay. */
  messageMin: 20,
} as const
