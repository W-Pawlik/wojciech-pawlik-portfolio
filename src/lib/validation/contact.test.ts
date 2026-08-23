import { describe, expect, it } from 'vitest'

import { CONTACT_LIMITS } from '@/data/contact'

import { createContactSchema, HONEYPOT_FIELD, toFieldErrors } from './contact'

const messages = {
  name: 'Podaj imię.',
  email: 'Podaj poprawny adres e-mail.',
  phone: 'Podaj numer telefonu (9 cyfr).',
  projectType: 'Wybierz, czego potrzebujesz.',
  stage: 'Wybierz etap.',
  budget: 'Wybierz budżet.',
  message: 'Napisz kilka zdań.',
  consent: 'Zgoda jest wymagana.',
  maxLength: 'Maksymalnie {max} znaków.',
}

const schema = createContactSchema(messages)

const valid = {
  projectType: 'website',
  stage: 'idea',
  budget: '10-20k',
  message: 'Potrzebujemy nowej strony dla biura architektonicznego.',
  name: 'Anna Kowalska',
  email: 'anna@example.com',
  consent: true,
}

describe('contact schema — happy path', () => {
  it('accepts a complete submission', () => {
    expect(schema.safeParse(valid).success).toBe(true)
  })

  it('trims whitespace instead of rejecting it', () => {
    expect(schema.parse({ ...valid, name: '  Anna  ' }).name).toBe('Anna')
  })

  /** The phone is optional here — email is the reply channel (ADR-0010). */
  it('accepts a submission without a phone', () => {
    expect(schema.safeParse({ ...valid, phone: undefined }).success).toBe(true)
  })

  /** Empty string from an untouched optional input must read as "not provided". */
  it('normalises an empty phone to undefined', () => {
    expect(schema.parse({ ...valid, phone: '' }).phone).toBeUndefined()
  })
})

describe('contact schema — phone', () => {
  it.each(['601234567', '+48601234567', '48 601-234-567', '601 234 567'])('accepts %s', (phone) => {
    expect(schema.safeParse({ ...valid, phone }).success).toBe(true)
  })

  it.each(['12345', 'brak', '+48 601 234 56'])('rejects %s', (phone) => {
    expect(schema.safeParse({ ...valid, phone }).success).toBe(false)
  })
})

describe('contact schema — the three qualifying answers', () => {
  /**
   * The whole point of the form is that these three are answered. An unanswered choice
   * has to produce our own message, not Zod's default enum complaint.
   */
  it.each(['projectType', 'stage', 'budget'] as const)('rejects a missing %s', (field) => {
    const result = schema.safeParse({ ...valid, [field]: undefined })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(toFieldErrors(result.error)[field]).toEqual([messages[field]])
    }
  })

  it('rejects a value outside the allowed set', () => {
    expect(schema.safeParse({ ...valid, budget: '100k+' }).success).toBe(false)
  })

  /** "Not sure yet" is a legitimate answer and must never block a real enquiry. */
  it('accepts the deliberately vague answers', () => {
    expect(schema.safeParse({ ...valid, projectType: 'unsure', budget: 'unknown' }).success).toBe(
      true,
    )
  })
})

describe('contact schema — required fields', () => {
  it('requires an email', () => {
    expect(schema.safeParse({ ...valid, email: '' }).success).toBe(false)
  })

  it('rejects an unchecked consent', () => {
    expect(schema.safeParse({ ...valid, consent: false }).success).toBe(false)
  })

  it('rejects a message below the minimum', () => {
    expect(schema.safeParse({ ...valid, message: 'hej' }).success).toBe(false)
  })

  it('interpolates the limit into the too-long message', () => {
    const result = schema.safeParse({ ...valid, message: 'x'.repeat(CONTACT_LIMITS.message + 1) })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(toFieldErrors(result.error).message?.[0]).toContain(String(CONTACT_LIMITS.message))
    }
  })
})

describe('honeypot', () => {
  it('accepts an empty honeypot', () => {
    expect(schema.safeParse({ ...valid, [HONEYPOT_FIELD]: '' }).success).toBe(true)
  })

  /** A filled honeypot is a bot. The action turns this into a silent success. */
  it('fails when the honeypot is filled', () => {
    const result = schema.safeParse({ ...valid, [HONEYPOT_FIELD]: 'Acme Ltd' })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(HONEYPOT_FIELD in toFieldErrors(result.error)).toBe(true)
    }
  })
})
