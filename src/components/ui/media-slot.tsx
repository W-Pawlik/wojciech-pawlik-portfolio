import { cn } from '@/lib/utils/cn'

type MediaSlotProps = {
  /** Shot-list id, e.g. `IMG-01`. Rendered as part of the technical annotation. */
  id: string
  /** CSS aspect ratio, e.g. `16 / 10`. Comes from the data, not from the component. */
  ratio: string
  /** What the shot is, in the reader's language. Copy, so it arrives as a prop. */
  label: string
  tone?: 'default' | 'invert'
  className?: string
}

/**
 * A photograph that does not exist yet.
 *
 * The shot list is written (.agents/01-brand-and-design.md#shot-list-do-sesji) and the
 * session has not happened, so the layout reserves the exact crop and says what belongs
 * there. Deliberately **not** a grey box: it is an annotated frame in the BUILD TRACE
 * language, so an unfinished page reads as unfinished rather than as a design choice —
 * and it is never tempting to drop a stock photo in "for now" (.agents/09).
 *
 * When the images arrive this component becomes a `next/image` with `priority` on the
 * hero crop, and the frame below is deleted in one place.
 */
export function MediaSlot({ id, ratio, label, tone = 'default', className }: MediaSlotProps) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        'flex w-full flex-col justify-between rounded-image border p-5',
        tone === 'invert'
          ? 'border-line-invert bg-canvas-invert-surface'
          : 'border-line bg-canvas-subtle',
        className,
      )}
    >
      <p
        className={cn(
          'font-mono text-meta uppercase',
          tone === 'invert' ? 'text-content-invert-tertiary' : 'text-content-tertiary',
        )}
      >
        {id} <span aria-hidden="true">/</span> {ratio.replace(/\s/g, '')}
      </p>
      <p
        className={cn(
          'font-mono text-meta uppercase',
          tone === 'invert' ? 'text-content-invert-tertiary' : 'text-content-tertiary',
        )}
      >
        {label}
      </p>
    </div>
  )
}
