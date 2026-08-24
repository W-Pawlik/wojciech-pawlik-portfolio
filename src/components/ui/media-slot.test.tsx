import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { MediaSlot } from './media-slot'

describe('MediaSlot', () => {
  it('opens a zoomable image in an accessible overlay', async () => {
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

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog', { name: 'Project screen' })).not.toBeInTheDocument()
  })
})
