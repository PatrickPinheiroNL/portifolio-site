import { Container } from '@/components/ui/Container'
import { CheckIcon, SpinnerIcon } from '@/components/ui/Icons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusChip, type StatusVariant } from '@/components/ui/StatusChip'
import { TechBadgeList } from '@/components/ui/TechBadge'
import { journeySteps } from '@/data/journey'
import { cn } from '@/lib/utils'
import type { JourneyStatus, JourneyStep } from '@/types'

const statusMeta: Record<
  JourneyStatus,
  {
    label: string
    chip: StatusVariant
    marker: string
    card: string
    title: string
    body: string
  }
> = {
  done: {
    label: 'Done',
    chip: 'complete',
    marker: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    card: 'border-white/[0.07] bg-white/[0.02]',
    title: 'text-white',
    body: 'text-slate-400',
  },
  active: {
    label: 'Active',
    chip: 'active',
    marker: 'border-sky-500/40 bg-sky-500/10 text-sky-400',
    card: 'border-sky-500/20 bg-sky-500/[0.04]',
    title: 'text-white',
    body: 'text-slate-400',
  },
  next: {
    label: 'Next',
    chip: 'next',
    marker: 'border-white/10 bg-white/[0.03] text-slate-500',
    card: 'border-white/[0.05] bg-white/[0.01]',
    title: 'text-slate-400',
    body: 'text-slate-500',
  },
}

export function Journey() {
  return (
    <section
      id="journey"
      className="scroll-mt-24 border-t border-white/[0.04] bg-ink-900/40 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="LEARNING PATH"
          title="The Journey"
          description="My progression from frontend intern to backend engineer — in progress, step by step."
        />

        <ol className="mt-12 space-y-6">
          {journeySteps.map((step, index) => (
            <JourneyRow
              key={step.id}
              step={step}
              index={index}
              isLast={index === journeySteps.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  )
}

interface JourneyRowProps {
  step: JourneyStep
  index: number
  isLast: boolean
}

function JourneyRow({ step, index, isLast }: JourneyRowProps) {
  const meta = statusMeta[step.status]

  return (
    <li className="relative flex gap-5 sm:gap-6">
      {/* Timeline rail */}
      <div className="relative flex w-8 shrink-0 justify-center sm:w-9">
        <span
          className={cn(
            'relative z-10 flex h-8 w-8 items-center justify-center rounded-full border sm:h-9 sm:w-9',
            meta.marker,
          )}
        >
          {step.status === 'done' ? (
            <CheckIcon className="h-3.5 w-3.5" />
          ) : step.status === 'active' ? (
            <SpinnerIcon className="h-3.5 w-3.5" />
          ) : (
            <span className="font-mono text-[11px]">{index + 1}</span>
          )}
        </span>

        {!isLast ? (
          <span
            className="absolute left-1/2 top-8 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-white/[0.07] sm:top-9"
            aria-hidden="true"
          />
        ) : null}
      </div>

      {/* Card */}
      <div className={cn('flex-1 rounded-2xl border p-5 sm:p-6', meta.card)}>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className={cn('font-sans text-[15px] font-bold', meta.title)}>
            {step.title}
          </h3>
          <StatusChip variant={meta.chip}>{meta.label}</StatusChip>
        </div>

        <p
          className={cn(
            'mt-3 font-body text-[13px] leading-relaxed',
            meta.body,
          )}
        >
          {step.description}
        </p>

        <TechBadgeList items={step.tags} className="mt-4" />
      </div>
    </li>
  )
}
