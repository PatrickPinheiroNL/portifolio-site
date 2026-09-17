import { techToneClasses } from '@/lib/tone'
import { cn } from '@/lib/utils'
import type { Tech } from '@/types'

interface TechBadgeProps {
  tech: Tech
  className?: string
}

export function TechBadge({ tech, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium leading-none',
        techToneClasses[tech.tone],
        className,
      )}
    >
      {tech.name}
    </span>
  )
}

interface TechBadgeListProps {
  items: Tech[]
  className?: string
}

export function TechBadgeList({ items, className }: TechBadgeListProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((tech) => (
        <li key={tech.name}>
          <TechBadge tech={tech} />
        </li>
      ))}
    </ul>
  )
}
