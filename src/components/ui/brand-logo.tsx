import { cn } from '@/lib/utils/cn'

type BrandLogoProps = {
  name: string
  size?: 'sm' | 'md'
  className?: string
}

const SIZE_CLASS = {
  sm: { type: 'text-display-card', suffix: 'text-meta' },
  md: { type: 'text-display-project', suffix: 'text-label' },
} as const

/** A compact PawlikWeb lockup: a personal wordmark with a technical Web accent. */
export function BrandLogo({ name, size = 'sm', className }: BrandLogoProps) {
  const sizeClass = SIZE_CLASS[size]
  const primaryName = name.endsWith('Web') ? name.slice(0, -3) : name
  const accentName = name.endsWith('Web') ? name.slice(-3) : ''

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span className={cn('font-display tracking-tight', sizeClass.type)}>
        {primaryName}
        {accentName && (
          <span
            className={cn(
              'ml-1 font-mono font-medium tracking-wide text-accent uppercase',
              sizeClass.suffix,
            )}
          >
            {accentName}
          </span>
        )}
      </span>
    </span>
  )
}
