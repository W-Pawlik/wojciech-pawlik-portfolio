'use client'

import { createContext, useContext, type ReactNode } from 'react'

import { useInView } from '@/hooks/use-in-view'
import { STAGGER } from '@/lib/motion/tokens'
import { cn } from '@/lib/utils/cn'

/**
 * Scroll reveals, in CSS.
 *
 * The animation is a keyframe in `utilities.css`, switched on by one
 * IntersectionObserver. Behaviour is what the animation system asks for — fade with a
 * short lift, once, at 30% visibility — but it can happen as soon as the app chunk
 * hydrates instead of after an animation library has been fetched, parsed and mounted.
 * See .agents/decisions/0009-css-reveals.md.
 *
 * Reduced motion lives in CSS, so there is no second source of truth to keep in sync.
 */

type RevealProps = {
  children: ReactNode
  /** Seconds. Use sparingly — prefer RevealGroup for sequencing siblings. */
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      className={cn(inView ? 'reveal-shown' : 'reveal-hidden', className)}
    >
      {children}
    </div>
  )
}

type GroupState = {
  inView: boolean
  stagger: number
  delayChildren: number
}

/** Outside a group an item still animates, just without a stagger offset. */
const RevealGroupContext = createContext<GroupState>({
  inView: true,
  stagger: 0,
  delayChildren: 0,
})

type RevealGroupProps = {
  children: ReactNode
  stagger?: number
  delayChildren?: number
  className?: string
}

/**
 * Parent of a staggered sequence. The **group** owns the observer, so one element
 * entering the viewport starts the whole row — which is what makes a stagger read as one
 * movement instead of five independent ones.
 */
export function RevealGroup({
  children,
  stagger = STAGGER.base,
  delayChildren = 0,
  className,
}: RevealGroupProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={className}>
      <RevealGroupContext.Provider value={{ inView, stagger, delayChildren }}>
        {children}
      </RevealGroupContext.Provider>
    </div>
  )
}

type RevealItemProps = {
  children: ReactNode
  /**
   * Position in the sequence, which is what the stagger is computed from. Passed
   * explicitly rather than counted during render: a render-order counter gives different
   * answers under StrictMode's double render.
   */
  index?: number
  className?: string
}

/** One element of a `RevealGroup`. Carries its own classes — it *is* the grid child. */
export function RevealItem({ children, index = 0, className }: RevealItemProps) {
  const { inView, stagger, delayChildren } = useContext(RevealGroupContext)
  const delay = delayChildren + index * stagger

  return (
    <div
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      className={cn(inView ? 'reveal-shown' : 'reveal-hidden', className)}
    >
      {children}
    </div>
  )
}
