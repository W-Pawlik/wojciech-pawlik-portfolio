'use client'

import { useId, type ReactNode } from 'react'

import { cn } from '@/lib/utils/cn'

type FieldProps = {
  label: string
  /** Rendered next to the label, not as a placeholder. */
  hint?: string
  error?: string
  required?: boolean
  className?: string
  /**
   * Receives the ids the control has to carry. Passing them explicitly (instead of
   * cloning children) keeps the wiring visible in the consuming component, which is where
   * a missing `aria-describedby` would otherwise hide.
   */
  children: (props: { id: string; describedBy: string | undefined; invalid: boolean }) => ReactNode
}

/**
 * Label plus control plus error, wired together for assistive technology.
 *
 * Contract from .agents/08: every field has a real `<label>` (a placeholder is not a
 * label), and a validation message is associated with its control through
 * `aria-describedby` - otherwise a screen reader announces the error nowhere near the
 * input it belongs to.
 */
export function Field({ label, hint, error, required, className, children }: FieldProps) {
  const id = useId()
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {/* Labels are always visible - no floating labels, no placeholder-as-label. Set in
          `content-secondary` rather than `content-tertiary`: a form usually sits on
          `canvas-subtle`, where tertiary drops below AA (see theme.css). */}
      <label htmlFor={id} className="font-mono text-label text-content-secondary uppercase">
        {label}
        {!required && hint && (
          <span id={hintId} className="ml-2 text-content-ghost normal-case">
            {hint}
          </span>
        )}
      </label>

      {children({ id, describedBy, invalid: Boolean(error) })}

      {/* Reserved region rather than a conditional node: an appearing message would
          otherwise push the rest of the form down as the user types. */}
      <p id={errorId} aria-live="polite" className="min-h-5 text-body-sm text-danger">
        {error}
      </p>
    </div>
  )
}

/**
 * Shared input styling. Inputs are not primitives on their own - they are always fields.
 *
 * Two deliberate choices from the art direction and .agents/08:
 * - the border is `line-control`, the one hairline dark enough to clear 3:1; on a form
 *   field the border is the only thing that says "this is a control" (WCAG 1.4.11),
 * - the global focus ring is *not* suppressed. The orange border is the brand-flavoured
 *   part of the focus state, the ring is the accessible part.
 */
export const CONTROL_CLASS =
  'w-full rounded-control border border-line-control bg-surface px-4 py-3.5 text-body text-content ' +
  'transition-colors duration-[var(--duration-fast)] placeholder:text-content-ghost ' +
  'hover:border-content-tertiary focus:border-accent aria-invalid:border-danger'
