import 'server-only'

import { siteConfig } from '@/data/site'
import type { ContactRequest } from '@/lib/validation/contact'

/**
 * The only boundary between this site and the outside world.
 *
 * The provider is configured with server-only environment variables. If one is missing,
 * the action fails instead of showing a success message for a request nobody received.
 * See .agents/decisions/0007-contact-delivery.md.
 *
 * Swapping providers means changing this file and nothing else.
 *
 */

const EMAIL_ENDPOINT = 'https://api.resend.com/emails'

export async function deliverContactRequest(request: ContactRequest): Promise<void> {
  const apiKey = process.env.CONTACT_EMAIL_API_KEY
  const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || siteConfig.contact.email
  const sender = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !recipient || !sender) {
    console.warn(
      '[contact] Email provider is not configured - request was not delivered.',
      redact(request),
    )
    throw new Error('Email provider is not configured')
  }

  const response = await fetch(EMAIL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'PawlikWeb contact form',
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      // The visitor's address goes in reply-to, never in `from`: sending on someone
      // else's behalf from our domain fails SPF/DKIM and lands in spam.
      ...(request.email && { reply_to: request.email }),
      subject: `${siteConfig.name}: ${request.projectType} / ${request.budget} - ${request.name}`,
      text: asPlainText(request),
    }),
  })

  if (!response.ok) {
    // Propagated on purpose. The action turns this into a generic message plus a phone
    // number; the detail stays in the server log, never in the browser.
    throw new Error(`Email provider rejected the request: ${response.status}`)
  }
}

/** The contact details are the point of the form, but they do not belong in a log line. */
function redact(request: ContactRequest) {
  return {
    projectType: request.projectType,
    stage: request.stage,
    budget: request.budget,
    hasPhone: Boolean(request.phone),
    messageLength: request.message.length,
  }
}

/**
 * The email actually read on the other side. Ordered the way the first reply needs it: the
 * three qualification answers, then the description, then who to write back to.
 */
function asPlainText(request: ContactRequest): string {
  return [
    `Potrzeba: ${request.projectType}`,
    `Etap: ${request.stage}`,
    `Budżet: ${request.budget}`,
    '',
    request.message,
    '',
    `Imię i nazwisko: ${request.name}`,
    `E-mail: ${request.email}`,
    `Telefon: ${request.phone ?? '-'}`,
  ].join('\n')
}
