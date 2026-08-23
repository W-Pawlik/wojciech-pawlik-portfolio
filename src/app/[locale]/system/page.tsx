import type { Metadata } from 'next'

import { Reveal } from '@/components/motion/reveal'
import { Button, CtaArrow } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Headline } from '@/components/ui/headline'
import { Section } from '@/components/ui/section'
import { SectionLabel } from '@/components/ui/section-label'
import { DURATION, EASE, STAGGER } from '@/lib/motion/tokens'
import { colorToken, readColorTokens } from '@/lib/styles/color-tokens'
import { cn } from '@/lib/utils/cn'
import { contrastLevel, contrastRatio } from '@/lib/utils/contrast'

/**
 * Internal design-system reference. The one page in the project allowed to carry literal
 * English strings: it is a developer tool, never shown to a visitor, and putting its
 * labels in the dictionaries would mean translating copy nobody reads
 * (.agents/02-design-system.md).
 *
 * Excluded from the index by metadata only — a `Disallow` in robots.txt would stop the
 * crawler from ever reading the `noindex` (.agents/08).
 */
export const metadata: Metadata = {
  title: 'Design system',
  robots: { index: false, follow: false },
}

const SURFACES = ['canvas', 'canvas-subtle', 'canvas-deep', 'surface', 'surface-raised'] as const
const SURFACES_INVERT = ['canvas-invert', 'canvas-invert-surface'] as const
const ACCENTS = ['accent', 'accent-hover', 'accent-strong', 'accent-subtle', 'danger'] as const
const LINES = ['line', 'line-strong', 'line-control', 'line-invert', 'line-invert-strong'] as const
const TEXT_STEPS = [
  { token: 'content', use: 'headings, critical copy' },
  { token: 'content-secondary', use: 'body copy — the default for prose' },
  { token: 'content-tertiary', use: 'metadata and labels — on canvas and surface only' },
  { token: 'content-ghost', use: 'decoration and graphical trace — below AA on purpose' },
  { token: 'content-dim', use: 'resting state of animated text' },
] as const

/**
 * Pairs that have to be checked. `note` records the intent, so a failing row can be read
 * as either a bug or a documented exception instead of being argued about.
 */
const CONTRAST_PAIRS = [
  { fg: 'content', bg: 'canvas', note: 'headings and critical copy' },
  { fg: 'content-secondary', bg: 'canvas', note: 'body copy' },
  { fg: 'content-secondary', bg: 'canvas-subtle', note: 'body copy on the second surface' },
  { fg: 'content-secondary', bg: 'canvas-deep', note: 'body copy on the third surface' },
  { fg: 'content-tertiary', bg: 'canvas', note: 'labels and metadata' },
  { fg: 'content-tertiary', bg: 'surface', note: 'labels on a panel' },
  { fg: 'content-ghost', bg: 'canvas', note: 'decorative only — AA not required' },
  {
    fg: 'accent',
    bg: 'canvas',
    note: 'brand orange on light: fills and markers only, never small text',
  },
  { fg: 'accent-strong', bg: 'canvas', note: 'accent as text and links on light' },
  { fg: 'accent-hover', bg: 'canvas', note: 'focus ring on light — 3:1 is enough' },
  { fg: 'accent-hover', bg: 'canvas-invert', note: 'the same focus ring on dark' },
  { fg: 'accent-contrast', bg: 'accent', note: 'text on the accent' },
  { fg: 'line-control', bg: 'canvas', note: 'form field border — 3:1 (WCAG 1.4.11)' },
  { fg: 'content-invert', bg: 'canvas-invert', note: 'the tonal interlude / CodeBros mode' },
  { fg: 'content-invert-secondary', bg: 'canvas-invert', note: 'body copy on dark' },
  { fg: 'content-invert-tertiary', bg: 'canvas-invert', note: 'metadata on dark' },
  { fg: 'accent', bg: 'canvas-invert', note: 'the accent *is* readable as text on dark' },
  { fg: 'danger', bg: 'canvas', note: 'validation messages' },
] as const

/**
 * The class names are written out in full rather than built from the token name.
 * Tailwind scans the source as text, so `text-${token}` would produce a class that is
 * never generated — and the sample would silently render at the inherited size.
 */
const TYPE_STEPS = [
  { token: 'display-statement', className: 'text-display-statement' },
  { token: 'display-hero', className: 'text-display-hero' },
  { token: 'display-section', className: 'text-display-section' },
  { token: 'display-project', className: 'text-display-project' },
  { token: 'display-card', className: 'text-display-card' },
  { token: 'numeric', className: 'text-numeric' },
  { token: 'quote', className: 'text-quote' },
  { token: 'body-lg', className: 'text-body-lg' },
  { token: 'body', className: 'text-body' },
  { token: 'body-sm', className: 'text-body-sm' },
] as const

const SPACING_STEPS = [
  'section-xl',
  'section-lg',
  'section',
  'section-sm',
  'section-tight',
] as const

export default function SystemPage() {
  const tokens = readColorTokens()

  return (
    <>
      <Section spacing="small">
        <Container>
          <SectionLabel index={0}>Design system</SectionLabel>
          <Headline as="h1" lines={['Tokens, primitives', 'and computed contrast.']} />
          <p className="mt-6 max-w-measure text-body text-content-secondary">
            Every value on this page is read from <code>src/styles/theme.css</code>. A token that is
            not here is not finished.
          </p>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">Surfaces</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
            {SURFACES.map((name) => (
              <div key={name}>
                <div
                  style={{ backgroundColor: colorToken(tokens, name) }}
                  className="h-24 rounded-panel border border-line"
                />
                <p className="mt-2 font-mono text-meta text-content-tertiary uppercase">{name}</p>
                <p className="font-mono text-meta text-content-ghost">{colorToken(tokens, name)}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-mono text-label text-content-tertiary uppercase">
            Inverted surfaces — the CodeBros mode
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
            {SURFACES_INVERT.map((name) => (
              <div key={name}>
                <div
                  style={{ backgroundColor: colorToken(tokens, name) }}
                  className="h-24 rounded-panel border border-line"
                />
                <p className="mt-2 font-mono text-meta text-content-tertiary uppercase">{name}</p>
                <p className="font-mono text-meta text-content-ghost">{colorToken(tokens, name)}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-mono text-label text-content-tertiary uppercase">
            Accent and state
          </h2>
          <p className="mt-3 max-w-measure text-body-sm text-content-secondary">
            Signal Orange is a signal: fills, markers, hover, and text on the dark tone.
            <code> accent-strong </code>
            is the same colour darkened until it is AA as text on light;
            <code> accent-hover </code>
            doubles as the focus ring because it clears 3:1 on both tones. The composition has to
            survive the accent being deleted.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
            {ACCENTS.map((name) => (
              <div key={name}>
                <div
                  style={{ backgroundColor: colorToken(tokens, name) }}
                  className="h-24 rounded-panel border border-line"
                />
                <p className="mt-2 font-mono text-meta text-content-tertiary uppercase">{name}</p>
                <p className="font-mono text-meta text-content-ghost">{colorToken(tokens, name)}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-mono text-label text-content-tertiary uppercase">
            Hairlines — the load-bearing separator
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
            {LINES.map((name) => (
              <div key={name}>
                <div
                  style={{ borderColor: colorToken(tokens, name) }}
                  className="h-24 border bg-surface"
                />
                <p className="mt-2 font-mono text-meta text-content-tertiary uppercase">{name}</p>
                <p className="font-mono text-meta text-content-ghost">{colorToken(tokens, name)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">
            BUILD TRACE — the signature element
          </h2>
          <p className="mt-3 max-w-measure text-body-sm text-content-secondary">
            Section numbers, coordinate-like labels and construction hairlines. A label that carries
            meaning is <code>content-tertiary</code>; a purely graphical mark may be
            <code> content-ghost </code>. The rule draws itself once, from the left.
          </p>
          <div className="mt-8">
            <p className="font-mono text-meta text-content-tertiary uppercase">
              02 / selected work
            </p>
            <span className="mt-3 trace-rule trace-rule-shown" />
            <div className="mt-3 flex items-baseline justify-between">
              <span className="font-mono text-meta text-content-ghost uppercase">system_02</span>
              <span className="font-mono text-meta text-content-ghost uppercase">wp / cb</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">Text hierarchy</h2>
          <dl className="mt-6 flex flex-col gap-4">
            {TEXT_STEPS.map((step) => (
              <div key={step.token} className="flex flex-wrap items-baseline gap-4">
                <dt
                  style={{ color: colorToken(tokens, step.token) }}
                  className="min-w-64 text-body-lg"
                >
                  {step.token}
                </dt>
                <dd className="text-body-sm text-content-tertiary">{step.use}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">
            Contrast — computed, not declared
          </h2>
          <p className="mt-3 max-w-measure text-body-sm text-content-secondary">
            Ratios are computed from the tokens themselves, so editing a colour changes this table.
            AA means 4.5:1 for text, 3:1 for large text and UI elements.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left text-body-sm">
              <thead>
                <tr className="border-b border-line font-mono text-meta text-content-tertiary uppercase">
                  <th className="py-2 pr-4 font-normal">Foreground</th>
                  <th className="py-2 pr-4 font-normal">Background</th>
                  <th className="py-2 pr-4 font-normal">Ratio</th>
                  <th className="py-2 pr-4 font-normal">Level</th>
                  <th className="py-2 font-normal">Intended use</th>
                </tr>
              </thead>
              <tbody>
                {CONTRAST_PAIRS.map((pair) => {
                  const ratio = contrastRatio(
                    colorToken(tokens, pair.fg),
                    colorToken(tokens, pair.bg),
                  )
                  const level = contrastLevel(ratio)

                  return (
                    <tr key={`${pair.fg}-${pair.bg}`} className="border-b border-line">
                      <td className="py-3 pr-4 font-mono text-meta">{pair.fg}</td>
                      <td className="py-3 pr-4 font-mono text-meta">{pair.bg}</td>
                      <td className="py-3 pr-4 font-mono text-meta">{ratio.toFixed(2)}</td>
                      <td className="py-3 pr-4 font-mono text-meta">
                        <span className={level === 'fail' ? 'text-danger' : 'text-content'}>
                          {level}
                        </span>
                      </td>
                      <td className="py-3 text-content-tertiary">{pair.note}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">Type scale</h2>
          <div className="mt-6 flex flex-col gap-6">
            {TYPE_STEPS.map((step) => (
              <div key={step.token} className="border-b border-line pb-4">
                <p className="font-mono text-meta text-content-tertiary uppercase">{step.token}</p>
                <p className={cn('mt-1 font-display', step.className)}>Aa Ćż 0123</p>
              </div>
            ))}
            <div className="border-b border-line pb-4">
              <p className="font-mono text-meta text-content-tertiary uppercase">label / meta</p>
              <p className="mt-1 font-mono text-label uppercase">Label — 01 / section</p>
              <p className="font-mono text-meta text-content-tertiary uppercase">Meta</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">
            Spacing and radii
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {SPACING_STEPS.map((step) => (
              <div key={step} className="flex items-center gap-4">
                <span className="w-40 font-mono text-meta text-content-tertiary uppercase">
                  {step}
                </span>
                <span
                  style={{ height: `var(--spacing-${step})` }}
                  className="w-8 rounded-control bg-accent-subtle"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {(['control', 'marker', 'panel', 'image'] as const).map((radius) => (
              <div key={radius} className="text-center">
                <div
                  style={{ borderRadius: `var(--radius-${radius})` }}
                  className="size-24 border border-line bg-surface"
                />
                <p className="mt-2 font-mono text-meta text-content-tertiary uppercase">{radius}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">Primitives</h2>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button>
              Primary <CtaArrow />
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="quiet">Quiet</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Container>
      </Section>

      <Section tone="invert" spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-invert-tertiary uppercase">
            Inverted tone
          </h2>
          <p className="mt-4 max-w-measure text-body text-content-invert-secondary">
            The tonal interlude. One or two sections per page, plus the footer — a dark shell for
            the whole site is a different brand decision.
          </p>
          <div className="mt-6">
            <Button variant="invert">Invert</Button>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="font-mono text-label text-content-tertiary uppercase">Motion tokens</h2>
          <p className="mt-3 max-w-measure text-body-sm text-content-secondary">
            The JS mirror of the CSS scales. `tokens.test.ts` fails if the two drift apart.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
            <dl className="text-body-sm">
              <dt className="font-mono text-meta text-content-tertiary uppercase">duration</dt>
              {Object.entries(DURATION).map(([token, seconds]) => (
                <dd key={token} className="font-mono text-meta">
                  {token} — {seconds}s
                </dd>
              ))}
            </dl>
            <dl className="text-body-sm">
              <dt className="font-mono text-meta text-content-tertiary uppercase">ease</dt>
              {Object.keys(EASE).map((token) => (
                <dd key={token} className="font-mono text-meta">
                  {token}
                </dd>
              ))}
            </dl>
            <dl className="text-body-sm">
              <dt className="font-mono text-meta text-content-tertiary uppercase">stagger</dt>
              {Object.entries(STAGGER).map(([token, seconds]) => (
                <dd key={token} className="font-mono text-meta">
                  {token} — {seconds}s
                </dd>
              ))}
            </dl>
          </div>

          <Reveal className="mt-10">
            <p className="max-w-measure text-body text-content-secondary">
              This paragraph is wrapped in <code>Reveal</code>: a CSS keyframe switched on by one
              IntersectionObserver, once, at 30% visibility. Under
              <code> prefers-reduced-motion </code>
              it is simply here.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
