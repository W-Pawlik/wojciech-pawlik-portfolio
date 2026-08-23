import { describe, expect, it } from 'vitest'

import { fadeIn, fadeUp, maskRow, staggerContainer, stepSlide } from './variants'
import { DURATION, REVEAL_DISTANCE, STAGGER } from './tokens'

/**
 * The contract worth guarding is the reduced-motion degradation: every factory has to
 * be able to return an animation with no transform at all. The exact pixel values are
 * tokens, so they are asserted against the tokens, not against literals.
 */

describe('fadeUp', () => {
  it('travels by the reveal distance token by default', () => {
    expect(fadeUp().hidden).toEqual({ opacity: 0, y: REVEAL_DISTANCE })
  })

  it('drops the transform under reduced motion', () => {
    expect(fadeUp({ reduceMotion: true }).hidden).toEqual({ opacity: 0, y: 0 })
  })
})

describe('fadeIn', () => {
  it('never contains a transform', () => {
    expect(fadeIn().hidden).toEqual({ opacity: 0 })
  })
})

describe('maskRow', () => {
  it('moves the line out of the mask', () => {
    expect(maskRow().hidden).toEqual({ y: '110%' })
  })

  /** A mask wipe has no opacity-only equivalent, so it degrades to a plain fade. */
  it('degrades to a fade under reduced motion', () => {
    expect(maskRow({ reduceMotion: true })).toEqual(fadeIn())
  })
})

describe('staggerContainer', () => {
  it('uses the base stagger token unless told otherwise', () => {
    const visible = staggerContainer().visible

    expect(visible).toMatchObject({ transition: { staggerChildren: STAGGER.base } })
  })
})

describe('stepSlide', () => {
  it('enters from the direction of travel and exits the other way', () => {
    const forward = stepSlide(1)

    expect(forward.initial.x).toBeGreaterThan(0)
    expect(forward.exit.x).toBeLessThan(0)
  })

  it('has no horizontal movement under reduced motion', () => {
    const reduced = stepSlide(1, { reduceMotion: true })

    expect(reduced.initial.x).toBe(0)
    expect(reduced.exit.x).toBe(0)
  })

  it('uses duration tokens', () => {
    expect(stepSlide(1).animate.transition.duration).toBe(DURATION.base)
  })
})
