'use client'

import { useState } from 'react'

import { TextLink } from '@/components/ui/text-link'
import { AI_USE_CASES, type AiUseCase } from '@/data/ai-automation'
import { SECTION_IDS } from '@/data/navigation'

type ExplorerCopy = {
  sectionNumber: string
  label: string
  headline: readonly string[]
  body: string
  processLabel: string
  process: readonly string[]
  explorerTitle: string
  inputLabel: string
  layerLabel: string
  outputLabel: string
  humanLabel: string
  cta: string
  useCases: Record<
    AiUseCase,
    { title: string; body: string; input: string; layer: string; output: string; human: string }
  >
}

export function AIProcessExplorer({ copy }: { copy: ExplorerCopy }) {
  const [active, setActive] = useState<AiUseCase>('documents')
  const current = copy.useCases[active]

  return (
    <>
      <div className="grid grid-cols-12 gap-grid">
        <div className="col-span-12 lg:col-span-7">
          <p className="font-mono text-meta text-content-tertiary uppercase">
            {copy.sectionNumber} / {copy.label}
          </p>
          <h2 className="mt-7 font-display text-display-section">
            {copy.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
        <div className="col-span-12 self-end lg:col-span-4 lg:col-start-9">
          <p className="text-body-lg text-content-secondary">{copy.body}</p>
          <div className="mt-8 border-t border-line pt-5">
            <p className="font-mono text-meta text-content-tertiary uppercase">
              {copy.processLabel}
            </p>
            <ol className="mt-4 space-y-2 font-mono text-label text-content uppercase">
              {copy.process.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-grid border-t border-line pt-5">
        <div className="col-span-12 lg:col-span-4">
          <p className="font-mono text-meta text-content-tertiary uppercase">
            {copy.explorerTitle}
          </p>
          <div className="mt-6 grid cursor-pointer grid-cols-2 border-t border-l border-line">
            {AI_USE_CASES.map((key, index) => {
              const selected = active === key
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(key)}
                  onTouchStart={() => setActive(key)}
                  className={`relative z-10 min-h-36 cursor-pointer touch-manipulation border-r border-b border-line p-5 text-left transition-colors duration-[var(--duration-fast)] select-none ${selected ? 'bg-accent text-accent-contrast' : 'text-content hover:bg-canvas-subtle'}`}
                >
                  <span
                    className={`font-mono text-meta ${selected ? 'text-accent-contrast/70' : 'text-accent'}`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-7 block font-display text-display-card">
                    {copy.useCases[key].title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="border-b border-line">
            <p className="py-5 text-body-lg text-content-secondary">{current.body}</p>
            {(
              [
                [copy.inputLabel, current.input],
                [copy.layerLabel, current.layer],
                [copy.outputLabel, current.output],
                [copy.humanLabel, current.human],
              ] as const
            ).map(([label, value], index) => (
              <div
                key={label}
                className="grid grid-cols-12 items-baseline gap-grid border-t border-line py-5"
              >
                <span className="col-span-3 font-mono text-meta text-accent uppercase">
                  {label}
                </span>
                <span className="col-span-9 text-body text-content">{value}</span>
                {index < 3 && (
                  <span
                    aria-hidden="true"
                    className="col-span-3 font-mono text-meta text-content-ghost"
                  >
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
          <TextLink href={`#${SECTION_IDS.contact}`} className="mt-8">
            {copy.cta}
          </TextLink>
        </div>
      </div>
    </>
  )
}
