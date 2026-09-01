import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'invert' | 'quiet'
export type ButtonSize = 'md' | 'lg'

/**
 * Solid, quiet, no effects: no glow, no gradient, no large shadow, no magnetic travel.
 * Only colour and a 1px lift animate - never width, height or padding, which would force
 * layout on every frame, and never a scale on the whole control, which reads cheap.
 */
const BASE_CLASS =
  'group inline-flex shrink-0 items-center justify-center gap-2 rounded-control text-button ' +
  'transition-[color,background-color,border-color,transform] duration-fast ease-out-quart ' +
  'hover:-translate-y-px disabled:pointer-events-none disabled:opacity-40 disabled:hover:translate-y-0'

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  /**
   * Dark, not orange. The accent arrives on hover - a whole button in Signal Orange
   * would blow the 5–8% accent budget on its own, and the flip to orange is the
   * clearest state change this palette can make (.agents/01-brand-and-design.md).
   */
  primary: 'bg-content text-content-invert hover:bg-accent hover:text-accent-contrast',
  /** Outline on light surfaces: the stronger hairline, not the full text colour. */
  secondary: 'border border-line-strong text-content hover:border-content hover:bg-content/5',
  /** The same button on the dark interlude. */
  invert:
    'border border-line-invert-strong text-content-invert hover:border-content-invert hover:bg-content-invert/10',
  quiet: 'text-content-secondary hover:text-content',
}

/** 48px and 56px, per the art direction. Both clear the 44px tap target (.agents/08). */
const SIZE_CLASS: Record<ButtonSize, string> = {
  md: 'h-12 px-5',
  lg: 'h-14 px-6',
}

type StyleProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Mobile CTAs run edge to edge; desktop ones do not. */
  fullWidth?: boolean
}

function buttonClass({ variant = 'primary', size = 'md', fullWidth }: StyleProps, extra?: string) {
  return cn(BASE_CLASS, VARIANT_CLASS[variant], SIZE_CLASS[size], fullWidth && 'w-full', extra)
}

type ButtonProps = StyleProps & ComponentPropsWithoutRef<'button'>

/** A real button: submits the form, opens the mobile menu. */
export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClass({ variant, size, fullWidth }, className)}
      {...props}
    />
  )
}

type ButtonLinkProps = StyleProps & ComponentPropsWithoutRef<typeof Link>

/** Navigation that looks like a button. Anchors to a section, or leaves the site. */
export function ButtonLink({ variant, size, fullWidth, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClass({ variant, size, fullWidth }, className)} {...props} />
}

/**
 * The small arrow that trails a CTA. Nudges 4px on the parent's hover - the button itself
 * stays put.
 */
export function CtaArrow({ direction = 'right' }: { direction?: 'up-right' | 'right' }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-fast ease-out-quart group-hover:translate-x-1"
    >
      {direction === 'up-right' ? '↗' : '→'}
    </span>
  )
}
