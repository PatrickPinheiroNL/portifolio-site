import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: ReactNode
  className?: string
}

/** Small monospaced label preceded by a short rule — used at the top of every section. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="h-px w-8 bg-sky-400/70" aria-hidden="true" />
      <span className="font-mono text-[11px] font-medium tracking-label text-sky-400">
        {children}
      </span>
    </div>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          'mt-6 font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  )
}
