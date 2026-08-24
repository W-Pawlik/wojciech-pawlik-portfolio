import Image from 'next/image'

import { cn } from '@/lib/utils/cn'
import { blurProps } from '@/lib/images/blur'

type MediaSlotProps = {
  /** Shot-list id, e.g. `IMG-01`. Rendered as part of the technical annotation. */
  id: string
  /** CSS aspect ratio, e.g. `16 / 10`. Comes from the data, not from the component. */
  ratio: string
  /** What the shot is, in the reader's language. Copy, so it arrives as a prop. */
  label: string
  src?: string
  alt?: string
  tone?: 'default' | 'invert'
  showAnnotation?: boolean
  className?: string
}

/**
 * A photograph or visual placeholder inside the annotated media frame.
 *
 * The frame keeps the shot-list crop and BUILD TRACE annotation while allowing a real
 * photograph to fill it. Static string paths use the generated blur preview from
 * `src/lib/images/blur.ts`, so the layout does not flash an empty placeholder while the
 * responsive image loads.
 *
 * All responsive image sizing remains in one place, so a new photograph does not require
 * a second rendering path in each section.
 */
export function MediaSlot({
  id,
  ratio,
  label,
  src,
  alt,
  tone = 'default',
  showAnnotation = false,
  className,
}: MediaSlotProps) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        'relative flex w-full flex-col justify-between overflow-hidden rounded-image border p-5',
        tone === 'invert'
          ? 'border-line-invert bg-canvas-invert-surface'
          : 'border-line bg-canvas-subtle',
        className,
      )}
    >
      {src && (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(min-width: 64rem) 68vw, 100vw"
          {...blurProps(src)}
          className="object-cover"
        />
      )}

      {showAnnotation && (
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p
            className={cn(
              'w-fit px-2 py-1 font-mono text-meta uppercase',
              src && (tone === 'invert' ? 'bg-canvas-invert/90' : 'bg-canvas/90'),
              tone === 'invert' ? 'text-content-invert-tertiary' : 'text-content-tertiary',
            )}
          >
            {id} <span aria-hidden="true">/</span> {ratio.replace(/\s/g, '')}
          </p>
          <p
            className={cn(
              'w-fit px-2 py-1 font-mono text-meta uppercase',
              src && (tone === 'invert' ? 'bg-canvas-invert/90' : 'bg-canvas/90'),
              tone === 'invert' ? 'text-content-invert-tertiary' : 'text-content-tertiary',
            )}
          >
            {label}
          </p>
        </div>
      )}
    </div>
  )
}
