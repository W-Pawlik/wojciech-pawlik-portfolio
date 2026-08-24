import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

const { back } = vi.hoisted(() => ({ back: vi.fn() }))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ back }),
}))

import { BackLink } from './back-link'

describe('BackLink', () => {
  it('returns to the previous browser route and keeps a fallback href', async () => {
    const user = userEvent.setup()
    render(<BackLink href="/pl/work">Back to work</BackLink>)

    const link = screen.getByRole('link', { name: 'Back to work' })
    expect(link).toHaveAttribute('href', '/pl/work')

    await user.click(link)

    expect(back).toHaveBeenCalledOnce()
  })
})
