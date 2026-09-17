import type { TechTone } from '@/types'

/** Badge palette shared by skills, project stacks and journey tags. */
export const techToneClasses: Record<TechTone, string> = {
  java: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  spring: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  database: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
  devops: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
  frontend: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
  cloud: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
  neutral: 'border-white/10 bg-white/5 text-slate-300',
}

export type AccentTone = 'accent' | 'indigo' | 'java' | 'amber'

/** Text color used by the hero highlight cards and the about stat cards. */
export const accentToneClasses: Record<AccentTone, string> = {
  accent: 'text-sky-400',
  indigo: 'text-indigo-400',
  java: 'text-amber-500',
  amber: 'text-amber-400',
}
