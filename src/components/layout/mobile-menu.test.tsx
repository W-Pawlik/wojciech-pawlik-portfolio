import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { MobileMenu } from './mobile-menu'

vi.mock('next/navigation', () => ({
  usePathname: () => '/pl',
}))

const props = {
  logoName: 'PawlikWeb',
  homeHref: '/pl#top',
  openLabel: 'Menu',
  closeLabel: 'Close',
  languageLabel: 'Change language',
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
    expect(opener).toHaveAttribute('aria-hidden', 'true')

    const dialog = screen.getByRole('dialog', { name: 'Menu' })
    const closeButton = within(dialog).getByRole('button', { name: 'Close' })
    expect(within(dialog).getByRole('link', { name: 'PawlikWeb' })).toHaveAttribute(
      'href',
      '/pl#top',
    )

    await user.click(closeButton)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(opener).toHaveAttribute('aria-expanded', 'false')
  })
})
