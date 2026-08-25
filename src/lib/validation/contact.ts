import { z } from 'zod'

import { BUDGET_RANGES, CONTACT_LIMITS, PROJECT_STAGES, PROJECT_TYPES } from '@/data/contact'

/**
 * The lead form is the site's conversion goal, so its schema is shared: the client
 * validates for UX, the Server Action re-validates the whole payload. Never trust the
 * client half - see .agents/03-architecture.md.
 *
 * The schema is a **factory** rather than a module constant because the messages are
 * localised. The client builds it from its dictionary; the action rebuilds it from the
 * locale submitted with the form. That keeps a single definition of what is valid while
 * letting the wording follow the page language.
 *
 * Shape follows the brief: three choices, a description, then contact details. The three
 * choices are what makes this a qualification form rather than a message box (ADR-0010).
 */

/** Exactly the `validation` slice of a dictionary. */
export type ContactMessages = {
  name: string
  email: string
  phone: string
  projectType: string
  stage: string
  budget: string
  message: string
  consent: string
  /** Contains a `{max}` placeholder. */
  maxLength: string
}

/**
 * Polish mobile or landline, optionally with the +48 prefix and any mix of spaces, dashes
 * or parentheses - nine significant digits. The field is optional here (email is the reply
 * channel for a project enquiry), so the pattern only has to reject a typo, not a blank.
 */
const PHONE_PATTERN = /^(?:\+?48)?[\s-]?(?:\d[\s\-()]?){9}$/

/**
 * Honeypot. A field no human fills in, hidden from assistive technology and from the tab
 * order. Bots submit every input they find, so a non-empty value here is the cheapest spam
 * signal available - and it costs a real visitor nothing, unlike a captcha.
 *
 * It occupies the name `company`, which is why the visible optional "company" field from
 * the brief is not implemented: two inputs with one name would break both. If that field
 * is ever wanted, rename the honeypot first.
 */
export const HONEYPOT_FIELD = 'company'

export function createContactSchema(messages: ContactMessages) {
  const tooLong = (max: number) => messages.maxLength.replace('{max}', String(max))

  return z.object({
    // Choices first, mirroring the form. Each is an enum, so "not answered" is a real
    // state with its own message instead of Zod's default enum complaint.
    projectType: z.enum(PROJECT_TYPES, { error: messages.projectType }),
    stage: z.enum(PROJECT_STAGES, { error: messages.stage }),
    budget: z.enum(BUDGET_RANGES, { error: messages.budget }),

    message: z
      .string()
      .trim()
      .min(CONTACT_LIMITS.messageMin, { error: messages.message })
      .max(CONTACT_LIMITS.message, { error: tooLong(CONTACT_LIMITS.message) }),

    name: z
      .string()
      .trim()
      .min(1, { error: messages.name })
      .max(CONTACT_LIMITS.name, { error: tooLong(CONTACT_LIMITS.name) }),

    // Email is the required channel here, not the phone: this is a project enquiry that
    // gets a written answer, not a local business call (ADR-0010).
    email: z.email({ error: messages.email }),

    phone: z
      .union([z.literal(''), z.string().trim().regex(PHONE_PATTERN, { error: messages.phone })])
      .optional()
      .transform((value) => (value ? value : undefined)),

    consent: z.literal(true, { error: messages.consent }),

    [HONEYPOT_FIELD]: z.literal('', { error: 'spam' }).optional(),
  })
}

export type ContactSchema = ReturnType<typeof createContactSchema>

/** Validated, normalised request - what the delivery layer receives. */
export type ContactRequest = z.infer<ContactSchema>

export type ContactFieldErrors = Partial<Record<keyof ContactRequest, string[]>>

/**
 * Turn a Zod failure into the flat `field -> messages` map the form renders. Zod's own
 * flatten output is wider than our field union, hence the narrowing.
 */
export function toFieldErrors(error: z.ZodError<unknown>): ContactFieldErrors {
  return z.flattenError(error).fieldErrors as ContactFieldErrors
}
