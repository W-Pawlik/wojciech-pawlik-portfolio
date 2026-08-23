import { cn } from '@/lib/utils/cn'

type ChoiceGroupProps<Value extends string> = {
  /** Form field name. The same for every option — that is what makes it one answer. */
  name: string
  /** The question, rendered as the fieldset legend. */
  legend: string
  options: readonly Value[]
  labels: Record<Value, string>
  error?: string
  /** Preselected value, e.g. when the visitor arrived from a service row (Phase 04). */
  defaultValue?: Value
}

/**
 * One question of the lead form, as a set of large, clickable answers.
 *
 * Native radios, visually hidden and driven with `peer-checked`: keyboard support, arrow
 * keys, screen-reader semantics and a working no-JavaScript submit all come for free, and
 * the selected state is still a border plus a signal-orange marker rather than a
 * dashboard-style checkbox (.agents/01-brand-and-design.md).
 *
 * No `'use client'`: the parent form is the client island, and this component holds no
 * state of its own — the DOM does.
 */
export function ChoiceGroup<Value extends string>({
  name,
  legend,
  options,
  labels,
  error,
  defaultValue,
}: ChoiceGroupProps<Value>) {
  const errorId = `${name}-error`

  return (
    <fieldset
      aria-describedby={error ? errorId : undefined}
      aria-invalid={error ? true : undefined}
    >
      <legend className="font-mono text-label text-content-secondary uppercase">{legend}</legend>

      <div className="mt-4 flex flex-wrap gap-3">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={option === defaultValue}
              className="peer sr-only"
            />
            <span
              className={cn(
                'flex items-center gap-3 rounded-control border border-line-control px-5 py-3.5 text-body text-content-secondary',
                'transition-colors duration-[var(--duration-fast)]',
                'hover:border-content-tertiary hover:text-content',
                'peer-checked:border-accent peer-checked:bg-accent-subtle peer-checked:text-content',
                // The dot is a descendant, not a sibling of the radio, so `peer-checked:`
                // alone would never reach it — hence the nested selector.
                'peer-checked:[&>span]:bg-accent',
                // The ring has to follow the radio, which is the element that receives
                // focus — the visible box is a sibling.
                'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-accent-hover',
              )}
            >
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-line-strong transition-colors duration-[var(--duration-fast)]"
              />
              {labels[option]}
            </span>
          </label>
        ))}
      </div>

      {/* Reserved region rather than a conditional node: an appearing message would push
          the rest of the form down as the visitor answers. */}
      <p id={errorId} aria-live="polite" className="mt-2 min-h-5 text-body-sm text-danger">
        {error}
      </p>
    </fieldset>
  )
}
