import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils/cn'

type HandwrittenSignatureProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>

/** A small WP mark that reveals like a pen signature. */
export function HandwrittenSignature({ className, ...props }: HandwrittenSignatureProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn('handwritten-signature', className)}
      viewBox="0 0 140 100"
      {...props}
    >
      <text className="handwritten-signature__text" x="7" y="75">
        WP
      </text>
    </svg>
  )
}
