import type { ContactFieldErrors } from '@/lib/validation/contact'

/**
 * State shared between the Server Action and the form.
 *
 * Lives in its own module because a `'use server'` file may only export async
 * functions - a constant or a type exported from `submit-contact.ts` breaks the build.
 */
export type ContactFormState =
  | { status: 'idle' }
  | { status: 'success' }
  /**
   * `fieldErrors` means "fix these fields". Its absence means the submission was valid
   * but delivery failed - a different message and a different next step for the user.
   */
  | { status: 'error'; fieldErrors?: ContactFieldErrors }

export const initialContactFormState: ContactFormState = { status: 'idle' }
