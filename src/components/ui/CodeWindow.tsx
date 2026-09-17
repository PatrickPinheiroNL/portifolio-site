import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CodeWindowProps {
  fileName: string
  path: string
  children: ReactNode
  className?: string
}

/** macOS-style editor chrome wrapping a pre-formatted code block. */
export function CodeWindow({
  fileName,
  path,
  children,
  className,
}: CodeWindowProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/90 shadow-2xl shadow-sky-950/40 backdrop-blur-sm',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <span className="font-mono text-[11px] text-slate-400">{fileName}</span>

        <span className="ml-auto hidden font-mono text-[10px] text-slate-600 sm:inline">
          {path}
        </span>
      </div>

      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[11.5px] leading-[1.75] text-slate-300 sm:text-xs">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}

/* Token helpers — keep the JSX below readable and the palette in one place. */

type TokenProps = { children: ReactNode }

export const Kw = ({ children }: TokenProps) => (
  <span className="text-violet-400">{children}</span>
)

export const Type = ({ children }: TokenProps) => (
  <span className="text-sky-300">{children}</span>
)

export const Cls = ({ children }: TokenProps) => (
  <span className="text-amber-300">{children}</span>
)

export const Str = ({ children }: TokenProps) => (
  <span className="text-emerald-400">{children}</span>
)

export const Fn = ({ children }: TokenProps) => (
  <span className="text-sky-200">{children}</span>
)

export const Cmt = ({ children }: TokenProps) => (
  <span className="text-slate-600">{children}</span>
)

export const Var = ({ children }: TokenProps) => (
  <span className="text-slate-200">{children}</span>
)
