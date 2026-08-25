/**
 * The AI pillar: the entry flow and the use cases it applies to.
 *
 * Keys only - copy is in the dictionaries under `ai`. The flow is rendered as five mono
 * steps separated by arrows, not as a diagram of a brain (.agents/01-brand-and-design.md).
 */

/** `REPETITIVE WORK → PROCESS ANALYSIS → PROTOTYPE → AUTOMATION → MEASURE` */
export const AI_FLOW_STEPS = [
  'repetitiveWork',
  'processAnalysis',
  'prototype',
  'automation',
  'measure',
] as const

export type AiFlowStep = (typeof AI_FLOW_STEPS)[number]

/** Where AI actually saves work. Rows, not cards - and never an icon per row. */
export const AI_USE_CASES = ['documents', 'knowledge', 'operations', 'support'] as const

export type AiUseCase = (typeof AI_USE_CASES)[number]
