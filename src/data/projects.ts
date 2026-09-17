import type { Project } from '@/types'
import { profile } from './profile'

/**
 * `repoUrl` / `demoUrl` currently point to the GitHub profile so no link is
 * ever broken. Swap each one for the individual repository (and deployed URL)
 * as those projects go public — this file is the only place to edit.
 */
export const projects: Project[] = [
  {
    id: 'library-rest-api',
    name: 'Library REST API',
    kind: 'BACKEND',
    status: 'complete',
    description:
      'Full-featured book management backend with JWT authentication, role-based access control, and complete CRUD operations. Containerized with Docker for reproducible deployments.',
    stack: [
      { name: 'Java', tone: 'java' },
      { name: 'Spring Boot', tone: 'spring' },
      { name: 'PostgreSQL', tone: 'database' },
      { name: 'Docker', tone: 'database' },
      { name: 'JWT', tone: 'frontend' },
    ],
    repoUrl: profile.githubUrl,
  },
  {
    id: 'taskboard',
    name: 'TaskBoard',
    kind: 'FRONTEND',
    status: 'complete',
    description:
      'Kanban-style task management app with drag-and-drop boards, priority filtering, and a clean TypeScript codebase. Built for responsiveness and performance from the ground up.',
    stack: [
      { name: 'React', tone: 'frontend' },
      { name: 'TypeScript', tone: 'database' },
      { name: 'Tailwind CSS', tone: 'spring' },
      { name: 'Vite', tone: 'devops' },
    ],
    repoUrl: profile.githubUrl,
    demoUrl: profile.githubUrl,
  },
  {
    id: 'shopapi',
    name: 'ShopAPI',
    kind: 'BACKEND',
    status: 'in-progress',
    description:
      'E-commerce backend with product catalog, cart management, and order processing. PostgreSQL persistence via JPA/Hibernate, designed with clean layered architecture and separation of concerns.',
    stack: [
      { name: 'Java', tone: 'java' },
      { name: 'Spring Boot', tone: 'spring' },
      { name: 'PostgreSQL', tone: 'database' },
      { name: 'JPA', tone: 'spring' },
      { name: 'REST APIs', tone: 'frontend' },
    ],
    repoUrl: profile.githubUrl,
  },
]
