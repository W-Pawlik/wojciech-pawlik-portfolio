'use server'

import { defaultLocale, isLocale } from '@/i18n/config'
import { dictionaryFor } from '@/i18n/dictionaries'
import { createContactSchema, HONEYPOT_FIELD, toFieldErrors } from '@/lib/validation/contact'

import { deliverContactRequest } from './contact-delivery'
import type { ContactFormState } from './contact-form-state'

/**
 * A Server Action is a **public POST endpoint**. Whatever the client validated is
 * irrelevant here: the whole payload is parsed again, with the same schema, before
 * anything is delivered. See .agents/03-architecture.md.
 *
 * The locale travels in the form so the error messages come back in the language the
 * visitor is reading - `next/root-params` is not available inside an action.
 */
export async function submitContact(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const localeValue = formData.get('locale')
  const submitted = typeof localeValue === 'string' ? localeValue : undefined
  const locale = isLocale(submitted) ? submitted : defaultLocale

  const schema = createContactSchema(dictionaryFor(locale).validation)

  const parsed = schema.safeParse({
    projectType: formData.get('projectType'),
    stage: formData.get('stage'),
    budget: formData.get('budget'),
    message: formData.get('message'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    // A checkbox is absent from FormData when unchecked, and `'on'` when checked.
    consent: formData.get('consent') === 'on',
    [HONEYPOT_FIELD]: formData.get(HONEYPOT_FIELD),
  })

  if (!parsed.success) {
    const fieldErrors = toFieldErrors(parsed.error)

    // A filled honeypot means a bot. Report success and drop the request: an error tells
    // the sender which field gave them away, and they adapt.
    if (HONEYPOT_FIELD in fieldErrors) {
      return { status: 'success' }
    }

    return { status: 'error', fieldErrors }
  }

  try {
    await deliverContactRequest(parsed.data)
  } catch (error) {
    console.error('[contact] delivery failed', error)
    // No `fieldErrors`: nothing is wrong with what the visitor typed, so the form must
    // not highlight their input. The UI shows a retry and the phone number instead.
    return { status: 'error' }
  }

  return { status: 'success' }
}
