import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { TechBadgeList } from '@/components/ui/TechBadge'
import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? '')

  const active =
    skillCategories.find((category) => category.id === activeId) ??
    skillCategories[0]

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/[0.04] bg-ink-900/40 py-24 sm:py-28"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>TECH STACK</Eyebrow>

            <h2 className="mt-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Skills &amp; Technologies
            </h2>

            <p className="mt-4 font-body text-[15px] text-slate-400">
              Tools I use professionally or am actively learning.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap items-center gap-1"
          >
            {skillCategories.map((category) => {
              const isActive = category.id === active.id

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`skills-tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${category.id}`}
                  onClick={() => setActiveId(category.id)}
                  className={cn(
                    'focus-ring rounded-lg px-4 py-2 font-body text-sm transition-colors',
                    isActive
                      ? 'border border-amber-500/30 bg-amber-500/10 text-amber-300'
                      : 'border border-transparent text-slate-400 hover:text-slate-200',
                  )}
                >
                  {category.tab}
                </button>
              )
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`skills-panel-${active.id}`}
          aria-labelledby={`skills-tab-${active.id}`}
          className="surface-card mt-10 p-6 sm:p-8"
        >
          <h3 className="font-sans text-lg font-bold text-white">
            {active.title}
          </h3>

          <p className="mt-2 max-w-2xl font-body text-[13px] leading-relaxed text-slate-400">
            {active.description}
          </p>

          <div className="mt-8 space-y-7">
            {active.groups.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-[10px] tracking-label text-slate-500">
                  {group.label}
                </p>
                <TechBadgeList items={group.items} className="mt-3" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
