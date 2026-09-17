export type TechTone =
  | 'java'
  | 'spring'
  | 'database'
  | 'devops'
  | 'frontend'
  | 'cloud'
  | 'neutral'

export interface Tech {
  name: string
  tone: TechTone
}

export interface SkillGroup {
  label: string
  items: Tech[]
}

export interface SkillCategory {
  id: string
  tab: string
  title: string
  description: string
  groups: SkillGroup[]
}

export type ProjectStatus = 'complete' | 'in-progress'

export interface Project {
  id: string
  name: string
  kind: 'BACKEND' | 'FRONTEND' | 'FULLSTACK'
  status: ProjectStatus
  description: string
  stack: Tech[]
  repoUrl: string
  demoUrl?: string
}

export type JourneyStatus = 'done' | 'active' | 'next'

export interface JourneyStep {
  id: string
  title: string
  status: JourneyStatus
  description: string
  tags: Tech[]
}

export interface NavItem {
  label: string
  href: string
}

export interface HighlightCard {
  label: string
  value: string
  tone: 'accent' | 'indigo' | 'java' | 'amber'
}

export interface StatCard {
  value: string
  title: string
  caption: string
  tone: 'accent' | 'indigo' | 'java' | 'amber'
}
