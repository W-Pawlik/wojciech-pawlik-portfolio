'use client'

import Image from 'next/image'
import * as React from 'react'
import { AnimatePresence, animate, motion, useMotionValue } from 'motion/react'

import { ButtonLink, CtaArrow } from '@/components/ui/button'
import { SectionLabel } from '@/components/ui/section-label'
import { TextLink } from '@/components/ui/text-link'
import type { Project } from '@/data/projects'
import { localizedHref, ROUTES } from '@/data/routes'
import { projectRoute } from '@/data/projects'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { type Locale, withLocale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { cn } from '@/lib/utils/cn'

type SelectedWorkStageProps = {
  projects: readonly Project[]
  copy: Dictionary['work']
  locale: Locale
}

const CARD_HEIGHT_RATIO = 0.25
const CARD_ASPECT_RATIO = 1.35
const CARD_GAP_RATIO = 0.04
const WHEEL_THRESHOLD = 80
const WHEEL_COOLDOWN = 650
const ALIGNMENT_TOLERANCE = 4
const SNAP_DISTANCE_RATIO = 0.35

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function readNavigationHeight(): number {
  const header = document.querySelector<HTMLElement>('header')
  const measuredHeight = header?.getBoundingClientRect().height ?? 0

  if (measuredHeight > 0) return measuredHeight

  const rootStyle = window.getComputedStyle(document.documentElement)
  const cssValue = rootStyle.getPropertyValue('--navbar-height').trim()
  const value = Number.parseFloat(cssValue)

  if (!Number.isFinite(value)) return 0
  if (cssValue.endsWith('rem')) {
    const rootFontSize = Number.parseFloat(rootStyle.fontSize)
    return Number.isFinite(rootFontSize) ? value * rootFontSize : 0
  }

  return value
}

/**
 * Full-screen project reel inspired by the supplied reference: the selected screenshot
 * sets the background, while temporary project wordmarks form the navigable filmstrip.
 * Wheel and drag both commit one project at a time; at either end normal page scrolling
 * continues.
 */
export function SelectedWorkStage({ projects, copy, locale }: SelectedWorkStageProps) {
  const stageRef = React.useRef<HTMLDivElement>(null)
  const [box, setBox] = React.useState({ width: 0, height: 0 })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [dragging, setDragging] = React.useState(false)
  const reduced = useReducedMotion()
  const lastIndex = projects.length - 1
  const index = clamp(selectedIndex, 0, Math.max(0, lastIndex))
  const activeProject = projects[index]
  const indexRef = React.useRef(index)

  React.useEffect(() => {
    indexRef.current = index
  }, [index])

  React.useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const readSize = () => setBox({ width: stage.clientWidth, height: stage.clientHeight })
    readSize()
    const observer = new ResizeObserver(readSize)
    observer.observe(stage)

    return () => observer.disconnect()
  }, [])

  const go = React.useCallback(
    (nextIndex: number) => {
      const next = clamp(nextIndex, 0, Math.max(0, lastIndex))
      indexRef.current = next
      setSelectedIndex(next)
    },
    [lastIndex],
  )

  const cardHeight = clamp(box.height * CARD_HEIGHT_RATIO, 112, 280)
  const cardWidth = cardHeight * CARD_ASPECT_RATIO
  const cardGap = Math.max(8, Math.round(cardWidth * CARD_GAP_RATIO))
  const cardStep = cardWidth + cardGap
  const stripX = useMotionValue(0)
  const stripTarget = box.width / 2 - (index * cardStep + cardWidth / 2)
  const spring = React.useMemo(
    () =>
      reduced
        ? { duration: 0 }
        : { type: 'spring' as const, stiffness: 150, damping: 30, mass: 1.1 },
    [reduced],
  )

  React.useEffect(() => {
    if (dragging) return
    const animation = animate(stripX, stripTarget, spring)
    return () => animation.stop()
  }, [dragging, reduced, spring, stripTarget, stripX])

  React.useEffect(() => {
    const stage = stageRef.current
    if (!stage || projects.length < 2) return

    let accumulated = 0
    let cooldownUntil = 0

    const onWheel = (event: WheelEvent) => {
      if (window.getComputedStyle(document.body).overflowY === 'hidden') return

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      const bounds = stage.getBoundingClientRect()
      if (delta === 0) return

      const navigationHeight = readNavigationHeight()
      const topDelta = bounds.top - navigationHeight
      const fitsViewport = bounds.bottom <= window.innerHeight + ALIGNMENT_TOLERANCE
      const fullScreen = Math.abs(topDelta) <= ALIGNMENT_TOLERANCE && fitsViewport
      const closeToFullScreen = Math.abs(topDelta) <= window.innerHeight * SNAP_DISTANCE_RATIO
      const movingTowardFullScreen =
        (delta > 0 && topDelta > ALIGNMENT_TOLERANCE) ||
        (delta < 0 && topDelta < -ALIGNMENT_TOLERANCE)
      const stageVisible = bounds.bottom > navigationHeight && bounds.top < window.innerHeight
      const currentIndex = indexRef.current
      const horizontalDirectionAvailable =
        (delta > 0 && currentIndex < lastIndex) || (delta < 0 && currentIndex > 0)
      const wheelCrossesAlignment =
        delta > 0
          ? topDelta - delta <= ALIGNMENT_TOLERANCE
          : topDelta - delta >= -ALIGNMENT_TOLERANCE

      if (!fullScreen) {
        accumulated = 0
        const shouldSnapToStage =
          horizontalDirectionAvailable &&
          (stageVisible || (movingTowardFullScreen && (closeToFullScreen || wheelCrossesAlignment)))

        if (shouldSnapToStage) {
          event.preventDefault()
          window.scrollTo({ top: Math.max(0, window.scrollY + topDelta), behavior: 'auto' })
        }
        return
      }

      const atEnd = (delta > 0 && currentIndex === lastIndex) || (delta < 0 && currentIndex === 0)

      if (atEnd) {
        accumulated = 0
        return
      }

      event.preventDefault()
      if (event.timeStamp < cooldownUntil) return

      accumulated += delta
      if (Math.abs(accumulated) < WHEEL_THRESHOLD) return

      go(currentIndex + Math.sign(accumulated))
      accumulated = 0
      cooldownUntil = event.timeStamp + WHEEL_COOLDOWN
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [go, lastIndex, projects.length])

  if (!activeProject) return null

  const activeCopy = copy.projects[activeProject.key]
  const activeNumber = String(index + 1).padStart(2, '0')
  const projectCount = String(projects.length).padStart(2, '0')

  return (
    <div
      ref={stageRef}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label={copy.selectorLabel}
      onKeyDown={(event) => {
        const keys: Record<string, number> = {
          ArrowLeft: index - 1,
          ArrowRight: index + 1,
          Home: 0,
          End: lastIndex,
        }
        if (!(event.key in keys)) return
        event.preventDefault()
        go(keys[event.key] ?? index)
      }}
      className="relative h-viewport-minus-nav w-full touch-pan-y scroll-mt-navbar overflow-hidden bg-canvas-invert text-content-invert outline-none select-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-inset"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={activeProject.slug}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduced ? { duration: 0 } : { duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: reduced ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            transition={reduced ? { duration: 0 } : { duration: 1.4, ease: 'easeOut' }}
          >
            <Image
              src={activeProject.media.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-65"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-canvas-invert/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-canvas-invert/70 via-transparent to-canvas-invert/90"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 z-10 px-gutter pt-gutter">
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
          <div className="max-w-xl">
            <SectionLabel index={4} tone="invert">
              {copy.label}
            </SectionLabel>
            <p className="mt-4 max-w-lg text-body text-content-invert-secondary">{copy.intro}</p>
          </div>
          <TextLink
            href={localizedHref(ROUTES.work, locale)}
            tone="invert"
            accent
            className="ml-auto"
          >
            {copy.allProjectsCta}
          </TextLink>
        </div>
      </div>

      <div className="absolute inset-x-0 top-1/3 z-10 overflow-hidden lg:top-1/2">
        <motion.div
          className="flex items-start"
          style={{ gap: cardGap, x: stripX, cursor: dragging ? 'grabbing' : 'grab' }}
          drag="x"
          dragMomentum={false}
          dragElastic={0.08}
          dragConstraints={{
            left: box.width / 2 - (lastIndex * cardStep + cardWidth / 2),
            right: box.width / 2 - cardWidth / 2,
          }}
          onDragStart={() => setDragging(true)}
          onDragEnd={(_, info) => {
            setDragging(false)
            const thrownPosition = stripX.get() + info.velocity.x * 0.12
            const nearest = Math.round((box.width / 2 - thrownPosition - cardWidth / 2) / cardStep)
            go(nearest)
          }}
        >
          {projects.map((project, projectIndex) => {
            const selected = projectIndex === index
            const projectCopy = copy.projects[project.key]

            return (
              <motion.button
                key={project.slug}
                type="button"
                aria-label={`${copy.selectorLabel}: ${projectCopy.title}`}
                aria-current={selected}
                aria-pressed={selected}
                onClick={() => go(projectIndex)}
                className="relative shrink-0 overflow-hidden rounded-image border border-line-invert-strong bg-white focus-visible:outline-1 focus-visible:outline-accent"
                style={{ width: cardWidth }}
                animate={{ height: selected ? cardHeight : cardHeight / 2 }}
                transition={spring}
              >
                <span className={cn('absolute inset-0 isolate overflow-hidden', 'bg-white')}>
                  <Image
                    src={project.logoSrc}
                    alt=""
                    fill
                    sizes="(min-width: 64rem) 20rem, 45vw"
                    unoptimized={project.logoSrc.endsWith('.svg')}
                    className="object-contain p-5 sm:p-8"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-0 bg-canvas-invert transition-opacity duration-fast',
                    selected ? 'opacity-0' : 'opacity-15',
                  )}
                />
              </motion.button>
            )
          })}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-canvas-invert/90 px-gutter pb-gutter lg:bg-transparent">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="flex w-fit max-w-full flex-wrap gap-x-2 gap-y-1 bg-canvas-invert/75 px-2 py-1 font-mono text-meta text-content-invert-tertiary uppercase lg:gap-x-4 lg:bg-transparent lg:px-0 lg:py-0">
              {activeProject.tags.map((tag) => (
                <span key={tag} className="max-w-full">
                  {copy.tags[tag]}
                </span>
              ))}
              <span className="max-w-full text-accent">
                {activeProject.team === 'codebros' ? copy.teamCodebros : copy.teamSolo}
              </span>
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="font-mono text-meta text-content-invert-tertiary">
                {activeNumber} <span aria-hidden="true">/</span> {projectCount}
              </span>
              <h2 className="font-display text-display-project text-content-invert">
                {activeCopy.title}
              </h2>
            </div>
            <p className="mt-3 max-w-xl text-body text-content-invert-secondary">
              {activeCopy.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink
              data-return-scroll
              href={withLocale(projectRoute(activeProject, locale), locale)}
              variant="invert"
              size="md"
              className="border-accent"
            >
              {copy.caseStudyCta}
              <CtaArrow />
            </ButtonLink>
            {activeProject.liveUrl ? (
              <TextLink
                href={activeProject.liveUrl}
                arrow="up-right"
                tone="invert"
                accent
                target="_blank"
                rel="noreferrer"
              >
                {copy.liveCta}
              </TextLink>
            ) : null}
          </div>
        </div>

        <div className="mt-5 flex w-full max-w-xs items-center gap-4">
          <span className="font-mono text-meta text-content-invert-tertiary">{activeNumber}</span>
          <div className="relative h-px flex-1 bg-line-invert-strong">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              animate={{ width: `${100 / projects.length}%`, x: `${index * 100}%` }}
              transition={spring}
            />
          </div>
          <span className="font-mono text-meta text-content-invert-tertiary">{projectCount}</span>
        </div>
      </div>
    </div>
  )
}
