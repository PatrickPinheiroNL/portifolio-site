import { Container } from '@/components/ui/Container'
import { ArrowUpRightIcon, GitHubIcon } from '@/components/ui/Icons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusChip } from '@/components/ui/StatusChip'
import { TechBadgeList } from '@/components/ui/TechBadge'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

/** Each card gets its own accent so the row reads as three distinct pieces of work. */
const accents = [
  { bar: 'from-emerald-400 via-emerald-400/40', kind: 'text-emerald-400' },
  { bar: 'from-sky-400 via-sky-400/40', kind: 'text-sky-400' },
  { bar: 'from-indigo-400 via-indigo-400/40', kind: 'text-indigo-400' },
] as const

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/[0.04] py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="PORTFOLIO"
          title="Recent Projects"
          description="A selection of things I've built — backend APIs, frontend apps, and everything in between."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              accent={accents[index % accents.length]}
            />
          ))}
        </ul>
      </Container>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  accent: (typeof accents)[number]
}

function ProjectCard({ project, accent }: ProjectCardProps) {
  const isComplete = project.status === 'complete'

  return (
    <li className="surface-card group relative flex flex-col overflow-hidden transition-colors hover:border-white/[0.14]">
      <span
        className={cn(
          'absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r to-transparent',
          accent.bar,
        )}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              'font-mono text-[10px] tracking-label',
              accent.kind,
            )}
          >
            {project.kind}
          </span>

          <StatusChip variant={isComplete ? 'complete' : 'progress'}>
            {isComplete ? 'Complete' : 'In Progress'}
          </StatusChip>
        </div>

        <h3 className="mt-5 font-sans text-lg font-bold text-white">
          {project.name}
        </h3>

        <p className="mt-3 font-body text-[13px] leading-[1.75] text-slate-400">
          {project.description}
        </p>

        <TechBadgeList items={project.stack} className="mb-6 mt-6" />

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.06] pt-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring inline-flex items-center gap-2 rounded font-body text-[13px] text-slate-400 transition-colors hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <span className="sr-only"> — {project.name} repository</span>
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-1.5 rounded font-body text-[13px] text-slate-400 transition-colors hover:text-white"
            >
              Live Demo
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
              <span className="sr-only"> — {project.name}</span>
            </a>
          ) : null}
        </div>
      </div>
    </li>
  )
}
