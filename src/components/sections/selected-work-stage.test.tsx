import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { PROJECTS } from '@/data/projects'
import { pl } from '@/i18n/dictionaries/pl'

import { SelectedWorkStage } from './selected-work-stage'

const landingProjects = PROJECTS.filter((project) => project.showOnLanding)
const nextProject = landingProjects[1]!
const nextProjectTitle = pl.work.projects[nextProject.key].title

describe('SelectedWorkStage', () => {
  it('changes the active project with a button interaction', () => {
    render(
      <SelectedWorkStage
        projects={PROJECTS.filter((project) => project.showOnLanding)}
        copy={pl.work}
        locale="pl"
      />,
    )

    const agnieszka = screen.getByRole('button', { name: /Agnieszka Luzarska/ })
    fireEvent.click(agnieszka)

    expect(agnieszka).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: 'Agnieszka Luzarska' })).toBeInTheDocument()
    expect(screen.getByText(pl.work.projects.agnieszkaLuzarska.description)).toBeInTheDocument()
  })

  it('maps a full-screen wheel gesture to the next horizontal project', () => {
    document.documentElement.style.fontSize = '16px'
    document.documentElement.style.setProperty('--navbar-height', '5rem')
    render(
      <SelectedWorkStage
        projects={PROJECTS.filter((project) => project.showOnLanding)}
        copy={pl.work}
        locale="pl"
      />,
    )

    const stage = screen.getByRole('group', { name: pl.work.selectorLabel })
    vi.spyOn(stage, 'getBoundingClientRect').mockReturnValue({
      top: 80,
      bottom: window.innerHeight,
      height: window.innerHeight - 80,
    } as DOMRect)

    fireEvent.wheel(stage, { deltaY: 100, timeStamp: 1000 })

    expect(screen.getByRole('heading', { name: nextProjectTitle })).toBeInTheDocument()
  })

  it('keeps the wheel cooldown while the active project rerenders', () => {
    render(
      <SelectedWorkStage
        projects={PROJECTS.filter((project) => project.showOnLanding)}
        copy={pl.work}
        locale="pl"
      />,
    )

    const stage = screen.getByRole('group', { name: pl.work.selectorLabel })
    vi.spyOn(stage, 'getBoundingClientRect').mockReturnValue({
      top: 80,
      bottom: window.innerHeight,
      height: window.innerHeight - 80,
    } as DOMRect)

    fireEvent.wheel(stage, { deltaY: 100, timeStamp: 1000 })
    fireEvent.wheel(stage, { deltaY: 100, timeStamp: 1100 })

    expect(screen.getByRole('heading', { name: nextProjectTitle })).toBeInTheDocument()
  })

  it('catches a wheel gesture even when the pointer is outside the stage', () => {
    render(
      <SelectedWorkStage
        projects={PROJECTS.filter((project) => project.showOnLanding)}
        copy={pl.work}
        locale="pl"
      />,
    )

    const stage = screen.getByRole('group', { name: pl.work.selectorLabel })
    vi.spyOn(stage, 'getBoundingClientRect').mockReturnValue({
      top: 80,
      bottom: window.innerHeight,
      height: window.innerHeight - 80,
    } as DOMRect)

    fireEvent.wheel(window, { deltaY: 100, timeStamp: 1000 })

    expect(screen.getByRole('heading', { name: nextProjectTitle })).toBeInTheDocument()
  })
})
