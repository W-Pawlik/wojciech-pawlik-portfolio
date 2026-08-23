import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button, ButtonLink } from './button'

describe('Button', () => {
  it('renders as a button, not a submit by default', () => {
    render(<Button>Send</Button>)

    expect(screen.getByRole('button', { name: 'Send' })).toHaveAttribute('type', 'button')
  })

  it('can be an explicit submit', () => {
    render(<Button type="submit">Send</Button>)

    expect(screen.getByRole('button', { name: 'Send' })).toHaveAttribute('type', 'submit')
  })

  it('calls the handler on click', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Send</Button>)

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('does not fire while disabled', async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Send
      </Button>,
    )

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).not.toHaveBeenCalled()
  })

  /**
   * The class prop has to win over the variant, otherwise every section that needs a
   * one-off tweak forks the component instead of passing a class.
   */
  it('lets a passed class override the variant class', () => {
    render(<Button className="bg-danger">Send</Button>)

    // Compared as class tokens, not as substrings: `hover:bg-accent-hover` contains the
    // string "bg-accent" and would make a substring assertion pass or fail for the
    // wrong reason.
    const classes = screen.getByRole('button').className.split(/\s+/)
    expect(classes).toContain('bg-danger')
    expect(classes).not.toContain('bg-accent')
  })
})

describe('ButtonLink', () => {
  it('renders a link that keeps its href', () => {
    render(<ButtonLink href="/pl/kontakt">Contact</ButtonLink>)

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/pl/kontakt')
  })
})
