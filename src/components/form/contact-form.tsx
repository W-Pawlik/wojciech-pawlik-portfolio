'use client'

import { useActionState } from 'react'

import { ChoiceGroup } from '@/components/form/choice-group'
import { Button } from '@/components/ui/button'
import { CONTROL_CLASS, Field } from '@/components/ui/field'
import {
  BUDGET_RANGES,
  CONTACT_LIMITS,
  PROJECT_STAGES,
  PROJECT_TYPES,
  type ProjectType,
} from '@/data/contact'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { HONEYPOT_FIELD } from '@/lib/validation/contact'
import { submitContact } from '@/server/contact/submit-contact'
import { initialContactFormState } from '@/server/contact/contact-form-state'

type ContactFormProps = {
  locale: Locale
  /** Copy is passed in: a client component cannot call getDictionary(). */
  copy: Dictionary['contact']
  /** `common.optional` - the form is the only place that needs it. */
  optionalLabel: string
  /**
   * Preselected project type, for a visitor who arrived from a service row. Wiring the
   * links up is Phase 04; the prop exists so the form does not change then.
   */
  defaultType?: ProjectType
}

/**
 * The conversion point of the site, and the only interactive island in its section.
 *
 * It submits through a Server Action with `useActionState`, so it works before hydration
 * (a plain form POST) and re-validates everything on the server regardless of what the
 * browser checked - see .agents/03-architecture.md.
 *
 * The order of the questions is the point: three quick choices, then the description, then
 * the contact details. Asking for a name first is what makes a contact form feel like
 * work (.agents/00-project-brief.md#formularz).
 */
export function ContactForm({ locale, copy, optionalLabel, defaultType }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactFormState)

  if (state.status === 'success') {
    return (
      <div role="status" className="max-w-measure">
        <p className="font-display text-display-project">{copy.successTitle}</p>
        <p className="mt-4 text-body-lg text-content-secondary">{copy.successBody}</p>
      </div>
    )
  }

  const fieldErrors = state.status === 'error' ? state.fieldErrors : undefined

  return (
    <form action={formAction} noValidate>
      {/* The locale travels with the payload: a Server Action cannot read root params,
          and error messages have to come back in the language being read. */}
      <input type="hidden" name="locale" value={locale} />

      <div className="flex flex-col gap-10">
        <ChoiceGroup
          name="projectType"
          legend={copy.steps.type}
          options={PROJECT_TYPES}
          labels={copy.types}
          error={fieldErrors?.projectType?.[0]}
          defaultValue={defaultType}
        />

        <ChoiceGroup
          name="stage"
          legend={copy.steps.stage}
          options={PROJECT_STAGES}
          labels={copy.stages}
          error={fieldErrors?.stage?.[0]}
        />

        <ChoiceGroup
          name="budget"
          legend={copy.steps.budget}
          options={BUDGET_RANGES}
          labels={copy.budgets}
          error={fieldErrors?.budget?.[0]}
        />

        <div className="max-w-measure">
          <Field label={copy.steps.brief} required error={fieldErrors?.message?.[0]}>
            {({ id, describedBy, invalid }) => (
              <textarea
                id={id}
                name="message"
                rows={5}
                placeholder={copy.messagePlaceholder}
                maxLength={CONTACT_LIMITS.message}
                aria-describedby={describedBy}
                aria-invalid={invalid || undefined}
                className={CONTROL_CLASS}
              />
            )}
          </Field>
        </div>

        <div className="max-w-measure">
          <p className="font-mono text-label text-content-secondary uppercase">
            {copy.steps.contact}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-x-grid sm:grid-cols-2">
            <Field label={copy.fields.name} required error={fieldErrors?.name?.[0]}>
              {({ id, describedBy, invalid }) => (
                <input
                  id={id}
                  name="name"
                  autoComplete="name"
                  maxLength={CONTACT_LIMITS.name}
                  aria-describedby={describedBy}
                  aria-invalid={invalid || undefined}
                  className={CONTROL_CLASS}
                />
              )}
            </Field>

            <Field label={copy.fields.email} required error={fieldErrors?.email?.[0]}>
              {({ id, describedBy, invalid }) => (
                <input
                  id={id}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-describedby={describedBy}
                  aria-invalid={invalid || undefined}
                  className={CONTROL_CLASS}
                />
              )}
            </Field>

            {/* Second row, first column: optional, so it must not look as important as
                the two fields above it. */}
            <Field label={copy.fields.phone} hint={optionalLabel} error={fieldErrors?.phone?.[0]}>
              {({ id, describedBy, invalid }) => (
                <input
                  id={id}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  aria-describedby={describedBy}
                  aria-invalid={invalid || undefined}
                  className={CONTROL_CLASS}
                />
              )}
            </Field>
          </div>
        </div>
      </div>

      {/* Honeypot: no human fills this in. Hidden from assistive technology and from the
          tab order, so it costs a real visitor nothing - unlike a captcha (ADR-0007).
          `sr-only` would still expose it to a screen reader, hence the inline offset. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Company</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-8 flex max-w-measure items-start gap-3 text-body-sm text-content-secondary">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 size-4 shrink-0 accent-[var(--color-accent)]"
        />
        <span>{copy.consent}</span>
      </label>
      <p aria-live="polite" className="min-h-5 text-body-sm text-danger">
        {fieldErrors?.consent?.[0]}
      </p>

      {/* Delivery failed rather than validation: nothing is wrong with what the visitor
          typed, so no field is highlighted - they get a retry and another route instead. */}
      {state.status === 'error' && !fieldErrors && (
        <p role="alert" className="mb-4 text-body-sm text-danger">
          {copy.errorTitle} {copy.errorBody}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-6">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? copy.submitting : copy.submit}
        </Button>
        <span className="font-mono text-meta text-content-tertiary uppercase">{copy.note}</span>
      </div>
    </form>
  )
}
