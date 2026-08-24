'use client'

import { useId, useState } from 'react'

type ProjectDetailsCopy = {
  toggle: string
  projectLabel: string
  problemLabel: string
  solutionLabel: string
  whyLabel: string
  project: string
  problem: string
  solution: string
  why: string
}

type ProjectDetailsProps = {
  copy: ProjectDetailsCopy
}

export function ProjectDetails({ copy }: ProjectDetailsProps) {
  const [open, setOpen] = useState(false)
  const contentId = useId()

  return (
    <div className="mt-8 border-t border-line">
      <button
        type="button"
        aria-controls={contentId}
        aria-expanded={open}
        className="group flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left font-mono text-meta text-content uppercase transition-colors hover:text-accent-strong"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{copy.toggle}</span>
        <span
          aria-hidden="true"
          className="font-sans text-body transition-transform duration-[var(--duration-base)]"
        >
          {open ? '−' : '+'}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-[var(--duration-base)] ease-out-quart ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <dl
            id={contentId}
            aria-hidden={!open}
            className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-line py-5 text-body-sm"
          >
            {(
              [
                [copy.projectLabel, copy.project],
                [copy.problemLabel, copy.problem],
                [copy.solutionLabel, copy.solution],
                [copy.whyLabel, copy.why],
              ] as const
            ).map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-meta text-content-tertiary uppercase">{label}</dt>
                <dd className="mt-1 text-content-secondary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
