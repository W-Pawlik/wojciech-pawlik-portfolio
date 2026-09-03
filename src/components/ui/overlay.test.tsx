import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './button'
import { Overlay } from './overlay'

function Harness({ onClose = vi.fn() }: { onClose?: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        onFocus={() => {
          /* focus target for the restore assertion */
        }}
      >
        Open
      </Button>
      <Overlay
        open={open}
        label="Panel"
        onClose={() => {
          setOpen(false)
          onClose()
        }}
      >
        <Button>Inside</Button>
        <Button>Also inside</Button>
      </Overlay>
    </>
  )
}

describe('Overlay', () => {
  it('renders nothing while closed', () => {
    render(<Harness />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('exposes a named modal dialog when open', async () => {
    render(<Harness />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))

    const dialog = screen.getByRole('dialog', { name: 'Panel' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('moves focus into the panel', async () => {
    render(<Harness />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByRole('button', { name: 'Inside' })).toHaveFocus()
  })

  it('closes on Escape', async () => {
    const onClose = vi.fn()
    render(<Harness onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))

    await userEvent.keyboard('{Escape}')

    expect(onClose).toHaveBeenCalled()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  /**
   * The trap is the part that silently regresses: without it Tab walks onto the
   * navigation behind the dimmed backdrop, where the user cannot see where they are.
   */
  it('keeps Tab inside the panel', async () => {
    render(<Harness />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))

    await userEvent.tab()
    expect(screen.getByRole('button', { name: 'Also inside' })).toHaveFocus()

    await userEvent.tab()
    expect(screen.getByRole('button', { name: 'Inside' })).toHaveFocus()
  })

  it('returns focus to the element that opened it', async () => {
    render(<Harness />)
    const opener = screen.getByRole('button', { name: 'Open' })
    const focus = vi.spyOn(opener, 'focus')
    await userEvent.click(opener)

    await userEvent.keyboard('{Escape}')

    expect(opener).toHaveFocus()
    expect(focus).toHaveBeenLastCalledWith({ preventScroll: true })
  })
})
