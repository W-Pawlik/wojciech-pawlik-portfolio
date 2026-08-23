'use client'

import { MEDIA_QUERY, useMediaQuery } from './use-media-query'

/**
 * The single motion-accessibility switch for JS-driven animation. Motion ships
 * its own `useReducedMotion`, but GSAP and our custom scroll code need the same
 * answer, so everything reads this hook instead.
 *
 * Contract when it returns true: no parallax, no transforms driven by scroll position,
 * and GSAP is never even downloaded. Opacity transitions may stay.
 * See .agents/05-animation-system.md.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery(MEDIA_QUERY.REDUCED_MOTION)
}
