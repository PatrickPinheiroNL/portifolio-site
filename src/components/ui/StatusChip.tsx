import { cn } from '@/lib/utils'

export type StatusVariant = 'complete' | 'progress' | 'active' | 'next'

const variants: Record<StatusVariant, string> = {
  complete: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  progress: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  active: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
  next: 'border-white/10 bg-white/5 text-slate-400',
}

interface StatusChipProps {
  variant: StatusVariant
  children: string
  className?: string
}

export function StatusChip({ variant, children, className }: StatusChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium leading-none',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
