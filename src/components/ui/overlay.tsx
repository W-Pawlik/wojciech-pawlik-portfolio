'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll'
import { cn } from '@/lib/utils/cn'

type OverlayProps = {
  open: boolean
  onClose: () => void
  /** Accessible name of the dialog. Required - an unnamed dialog is announced as nothing. */
  label: string
  children: ReactNode
  className?: string
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * The one overlay implementation. Everything the accessibility contract in .agents/08
 * asks for lives here, so no modal has to remember it: dialog role and name, Escape,
 * backdrop click, page scroll lock, focus trap, and focus restored to whatever opened it.
 *
 * It portals to `document.body` on purpose. `Section` sets `isolate`, so an overlay
 * rendered inside a section could never paint over the sticky navbar
 * (.agents/02-design-system.md).
 */
export function Overlay({ open, onClose, label, children, className }: OverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return

    // Remembered before focus moves into the panel, and restored on close: losing focus
    // to the top of the document is disorienting for a keyboard user.
    openerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    const panel = panelRef.current
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panel) return

      // Without this, Tab walks out of the panel and onto the navigation behind the
      // dimmed backdrop, where the user cannot see where they are.
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      openerRef.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Decorative: the same action is available on the close button inside the panel,
          which is what assistive technology and the keyboard use. */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-canvas-invert/70 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={cn(
          'absolute inset-x-0 bottom-0 bg-canvas p-gutter md:inset-y-0 md:left-auto md:w-1/2',
          className,
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}
