import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { CodeIcon } from './Icons'

interface LogoProps {
  /** `full` shows the role subtitle (header), `compact` is the footer variant. */
  variant?: 'full' | 'compact'
  className?: string
}

export function Logo({ variant = 'full', className }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn(
        'group flex items-center gap-2.5 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950',
        className,
      )}
      aria-label={`${profile.brand} — back to top`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-sky-500 text-ink-950 shadow-lg shadow-sky-500/20">
        <CodeIcon className="h-4 w-4" />
      </span>

      {variant === 'full' ? (
        <span className="flex flex-col leading-none">
          <span className="font-sans text-sm font-bold tracking-tight text-white">
            {profile.brand}
          </span>
          <span className="mt-1 font-mono text-[9px] tracking-label text-slate-500">
            {profile.role}
          </span>
        </span>
      ) : (
        <span className="font-mono text-xs text-slate-400">
          {profile.brand} — {profile.year}
        </span>
      )}
    </a>
  )
}
