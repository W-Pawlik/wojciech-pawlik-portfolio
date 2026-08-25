import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { MobileMenu } from './mobile-menu'

const props = {
  openLabel: 'Menu',
  closeLabel: 'Close',
  items: [{ href: '/pl', label: 'Home' }],
  cta: { href: '/pl/contact', label: 'Tell me about your project' },
} as const

describe('MobileMenu', () => {
  it('opens from the hamburger button and closes from the close button', async () => {
    const user = userEvent.setup()
    render(<MobileMenu {...props} />)

    const opener = screen.getByRole('button', { name: 'Menu' })
    expect(opener).toHaveAttribute('aria-expanded', 'false')
    expect(opener).toHaveClass('touch-manipulation')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(opener)

    expect(screen.getByRole('dialog', { name: 'Menu' })).toBeInTheDocument()
    expect(opener).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(opener).toHaveAttribute('aria-expanded', 'false')
  })
})
