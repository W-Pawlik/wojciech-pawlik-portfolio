import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { AIProcessExplorer } from './ai-process-explorer'

const copy = {
  sectionNumber: '06',
  label: 'AI automation',
  headline: ['Process first.', 'Then AI.'],
  body: 'A process comes first.',
  processLabel: 'Process',
  process: ['Input', 'Analysis'],
  explorerTitle: 'Choose a use case',
  inputLabel: 'Input',
  layerLabel: 'Layer',
  outputLabel: 'Output',
  humanLabel: 'Human',
  cta: 'Tell me about the process',
  useCases: {
    documents: {
      title: 'Documents',
      body: 'Document details',
      input: 'Files',
      layer: 'Extraction',
      output: 'Structured data',
      human: 'Review',
    },
    knowledge: {
      title: 'Knowledge',
      body: 'Knowledge details',
      input: 'Questions',
      layer: 'Search',
      output: 'Answers',
      human: 'Review',
    },
    operations: {
      title: 'Operations',
      body: 'Operations details',
      input: 'Requests',
      layer: 'Routing',
      output: 'Action',
      human: 'Review',
    },
    support: {
      title: 'Support',
      body: 'Support details',
      input: 'Messages',
      layer: 'Classification',
      output: 'Response',
      human: 'Review',
    },
  },
} as const

describe('AIProcessExplorer', () => {
  it('changes the selected use case on a touch interaction', async () => {
    render(<AIProcessExplorer copy={copy} />)

    const knowledge = screen.getByRole('button', { name: /Knowledge/ })
    fireEvent.touchStart(knowledge)

    expect(knowledge).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('Knowledge details')).toBeInTheDocument()
  })
})
