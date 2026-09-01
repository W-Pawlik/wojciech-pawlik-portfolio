'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Overlay } from '@/components/ui/overlay'
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
  fit?: 'cover' | 'contain'
  zoomable?: boolean
  closeLabel?: string
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
  fit = 'cover',
  zoomable = false,
  closeLabel,
  tone = 'default',
  showAnnotation = false,
  className,
}: MediaSlotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const imageClassName = fit === 'contain' ? 'object-contain' : 'object-cover'

  function openPreview() {
    setIsOpen(true)
    setIsZoomed(false)
  }

  function closePreview() {
    setIsOpen(false)
    setIsZoomed(false)
  }

  return (
    <>
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
        {src && zoomable && closeLabel ? (
          <button
            type="button"
            aria-label={alt ?? label}
            className="absolute inset-0 z-0 block h-full w-full cursor-pointer border-0 bg-transparent p-0 text-left"
            onClick={openPreview}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 64rem) 68vw, 100vw"
              {...blurProps(src)}
              className={imageClassName}
            />
          </button>
        ) : (
          src && (
            <Image
              src={src}
              alt={alt ?? label}
              fill
              sizes="(min-width: 64rem) 68vw, 100vw"
              {...blurProps(src)}
              className={imageClassName}
            />
          )
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

      {src && zoomable && closeLabel ? (
        <Overlay
          open={isOpen}
          onClose={closePreview}
          label={alt ?? label}
          className="!inset-0 !w-full !bg-canvas-invert"
        >
          <div className="relative h-full w-full">
            <button
              type="button"
              aria-label={closeLabel}
              className="absolute top-0 right-0 z-10 inline-flex h-12 w-12 items-center justify-center border border-line-invert-strong bg-canvas-invert text-body-lg text-content-invert transition-colors hover:border-content-invert hover:bg-canvas-invert-surface"
              onClick={closePreview}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div
              className={cn(
                'relative h-full w-full',
                isZoomed ? 'overflow-auto' : 'overflow-hidden',
              )}
            >
              <button
                type="button"
                aria-label={alt ?? label}
                aria-pressed={isZoomed}
                className={cn(
                  'relative block min-h-full w-full border-0 bg-transparent p-0',
                  isZoomed ? 'cursor-zoom-out' : 'h-full cursor-zoom-in',
                )}
                onClick={() => setIsZoomed((current) => !current)}
              >
                <Image
                  src={src}
                  alt={alt ?? label}
                  fill
                  sizes="100vw"
                  className={cn(
                    isZoomed ? '!static !h-auto !w-full object-contain' : 'object-contain',
                  )}
                />
              </button>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  )
}
