import { describe, expect, it } from 'vitest'

import { AI_FLOW_STEPS, AI_USE_CASES } from '@/data/ai-automation'
import { BUDGET_RANGES, PROJECT_STAGES, PROJECT_TYPES } from '@/data/contact'
import { PRICING_ROWS } from '@/data/pricing'
import { PRINCIPLES, PROCESS_STEPS, TRUST_ROWS } from '@/data/process'
import { PROJECT_TAGS, PROJECTS } from '@/data/projects'
import { SERVICES } from '@/data/services'

import { locales } from './config'
import { dictionaryFor, dictionaryForUnknown, interpolate } from './dictionaries'

describe('dictionaryFor', () => {
  it.each(locales)('returns a dictionary for %s', (locale) => {
    expect(dictionaryFor(locale).meta.title).toBeTruthy()
  })
})

describe('dictionaryForUnknown', () => {
  it('resolves a known segment', () => {
    expect(dictionaryForUnknown('en', 'pl')).toBe(dictionaryFor('en'))
  })

  it('falls back for anything else', () => {
    expect(dictionaryForUnknown('de', 'pl')).toBe(dictionaryFor('pl'))
    expect(dictionaryForUnknown(undefined, 'pl')).toBe(dictionaryFor('pl'))
  })
})

describe('interpolate', () => {
  it('fills a placeholder', () => {
    expect(interpolate('Max {max} chars.', { max: 80 })).toBe('Max 80 chars.')
  })

  /** An unknown placeholder is left visible on purpose: silence would ship a gap. */
  it('leaves an unknown placeholder in place', () => {
    expect(interpolate('Hi {name}.', {})).toBe('Hi {name}.')
  })
})

/**
 * Key parity between data and copy. TypeScript cannot catch this: the keys in the data
 * modules are plain strings as far as the dictionary type is concerned, so an option added
 * to the data with no label would render an empty row — and a label left behind after a
 * key was removed would sit in the dictionary forever.
 *
 * Every list rendered from `src/data` is checked here. That is the whole point of keeping
 * structure in the data and words in the dictionaries.
 */
describe('data and copy parity', () => {
  const keysOf = (record: object) => Object.keys(record).sort()

  it.each(locales)('%s labels every form choice', (locale) => {
    const copy = dictionaryFor(locale).contact

    expect(keysOf(copy.types)).toEqual([...PROJECT_TYPES].sort())
    expect(keysOf(copy.stages)).toEqual([...PROJECT_STAGES].sort())
    expect(keysOf(copy.budgets)).toEqual([...BUDGET_RANGES].sort())
  })

  it.each(locales)('%s labels every project and tag', (locale) => {
    const copy = dictionaryFor(locale).work

    expect(keysOf(copy.projects)).toEqual(PROJECTS.map((project) => project.key).sort())
    expect(keysOf(copy.tags)).toEqual([...PROJECT_TAGS].sort())
  })

  it.each(locales)('%s labels every service and pricing row', (locale) => {
    const dict = dictionaryFor(locale)

    expect(keysOf(dict.services.items)).toEqual(SERVICES.map((service) => service.key).sort())
    expect(keysOf(dict.pricing.rows)).toEqual(PRICING_ROWS.map((row) => row.key).sort())
  })

  it.each(locales)('%s labels every process step, principle and trust row', (locale) => {
    const dict = dictionaryFor(locale)

    expect(keysOf(dict.process.steps)).toEqual([...PROCESS_STEPS].sort())
    expect(keysOf(dict.approach.principles)).toEqual([...PRINCIPLES].sort())
    expect(keysOf(dict.about.trust)).toEqual([...TRUST_ROWS].sort())
  })

  it.each(locales)('%s labels every AI flow step and use case', (locale) => {
    const dict = dictionaryFor(locale).ai

    expect(keysOf(dict.flow)).toEqual([...AI_FLOW_STEPS].sort())
    expect(keysOf(dict.useCases)).toEqual([...AI_USE_CASES].sort())
  })
})

/**
 * Headlines are arrays because the line break is a design decision. An empty array would
 * render a heading with no text, which no type system notices.
 */
describe('headlines', () => {
  it.each(locales)('%s has a non-empty headline in every section that owns one', (locale) => {
    const dict = dictionaryFor(locale)
    const headlines = [
      dict.hero.headline,
      dict.approach.headline,
      dict.work.headline,
      dict.services.headline,
      dict.codebrosTransition.headline,
      dict.codebros.headline,
      dict.ai.headline,
      dict.process.headline,
      dict.pricing.headline,
      dict.about.headline,
      dict.finalCta.headline,
      dict.contact.headline,
    ]

    for (const headline of headlines) {
      expect(headline.length).toBeGreaterThan(0)
      expect(headline.every((line) => line.trim().length > 0)).toBe(true)
    }
  })
})
