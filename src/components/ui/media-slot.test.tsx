import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { MediaSlot } from './media-slot'

describe('MediaSlot', () => {
  it('opens a normal preview first and zooms on the second click', async () => {
    const user = userEvent.setup()
    render(
      <MediaSlot
        id="IMG-01"
        ratio="16 / 10"
        label="Project view"
        src="/images/project.png"
        alt="Project screen"
        fit="contain"
        zoomable
        closeLabel="Close"
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Project screen' }))

    expect(screen.getByRole('dialog', { name: 'Project screen' })).toBeInTheDocument()
    expect(document.documentElement.style.overflowY).toBe('hidden')
    expect(document.body.style.overflowY).toBe('hidden')

    const previewButton = screen.getByRole('button', { name: 'Project screen', pressed: false })
    await user.click(previewButton)
    expect(previewButton).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog', { name: 'Project screen' })).not.toBeInTheDocument()
    expect(document.documentElement.style.overflowY).toBe('')
    expect(document.body.style.overflowY).toBe('')
  })
})
