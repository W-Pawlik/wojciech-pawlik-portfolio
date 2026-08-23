'use client'

/**
 * GSAP is loaded **on demand**, not imported at module scope.
 *
 * The reason is measured, not stylistic: GSAP plus ScrollTrigger is ~459 KB raw /
 * ~128 KB gzip, and it exists here for scroll-driven sequences in one or two sections —
 * below the fold, unable to run before hydration, and switched off entirely under
 * `prefers-reduced-motion`. A static import would put all of it on the critical path of
 * every visit. See .agents/decisions/0005-lazy-gsap.md.
 *
 * The promise is cached, so concurrent callers and remounts share one download and the
 * plugin is registered exactly once.
 *
 * Usage inside an effect — note the cancellation flag, because the component can unmount
 * while the library is still downloading:
 *
 *     useEffect(() => {
 *       if (reduceMotion) return
 *       let cancelled = false
 *       let context: gsap.Context | undefined
 *
 *       loadGsap().then(({ gsap }) => {
 *         if (cancelled) return
 *         context = gsap.context(() => { ... }, ref)
 *       })
 *
 *       return () => {
 *         cancelled = true
 *         context?.revert()
 *       }
 *     }, [reduceMotion])
 */

// Type-only import of the package's default export: erased at compile time, so naming
// GSAP's type here does not put GSAP back into the bundle.
import type GsapDefault from 'gsap'

type GsapCore = typeof GsapDefault

let loading: Promise<{ gsap: GsapCore }> | null = null

export function loadGsap(): Promise<{ gsap: GsapCore }> {
  loading ??= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
    ([core, scrollTrigger]) => {
      core.gsap.registerPlugin(scrollTrigger.ScrollTrigger)
      return { gsap: core.gsap }
    },
  )

  return loading
}
