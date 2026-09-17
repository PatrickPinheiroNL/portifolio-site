import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    tab: 'Backend',
    title: 'Backend — Primary Focus',
    description:
      'Building RESTful APIs, managing relational databases, and containerizing applications. This is where I invest most of my learning time outside work.',
    groups: [
      {
        label: 'LANGUAGE',
        items: [{ name: 'Java', tone: 'java' }],
      },
      {
        label: 'FRAMEWORK & ECOSYSTEM',
        items: [
          { name: 'Spring Boot', tone: 'spring' },
          { name: 'JPA', tone: 'spring' },
          { name: 'Maven', tone: 'java' },
          { name: 'Security', tone: 'devops' },
        ],
      },
      {
        label: 'DATABASE',
        items: [
          { name: 'PostgreSQL', tone: 'database' },
          { name: 'SQL', tone: 'database' },
        ],
      },
      {
        label: 'DEVOPS & API LAYER',
        items: [
          { name: 'Docker', tone: 'database' },
          { name: 'REST APIs', tone: 'frontend' },
          { name: 'JWT', tone: 'frontend' },
          { name: 'Git', tone: 'devops' },
        ],
      },
    ],
  },
  {
    id: 'frontend',
    tab: 'Frontend',
    title: 'Frontend — Professional Experience',
    description:
      'What I build every day as a frontend developer intern: production interfaces, typed components, and responsive layouts shipped to real users.',
    groups: [
      {
        label: 'LANGUAGE',
        items: [
          { name: 'TypeScript', tone: 'database' },
          { name: 'JavaScript', tone: 'java' },
        ],
      },
      {
        label: 'FRAMEWORK & ECOSYSTEM',
        items: [
          { name: 'React', tone: 'frontend' },
          { name: 'Vite', tone: 'frontend' },
          { name: 'React Router', tone: 'spring' },
        ],
      },
      {
        label: 'STYLING & MARKUP',
        items: [
          { name: 'Tailwind CSS', tone: 'database' },
          { name: 'HTML5', tone: 'java' },
          { name: 'CSS3', tone: 'devops' },
        ],
      },
      {
        label: 'PRACTICES',
        items: [
          { name: 'Responsive UI', tone: 'frontend' },
          { name: 'Accessibility', tone: 'spring' },
          { name: 'Clean Code', tone: 'devops' },
          { name: 'Git', tone: 'devops' },
        ],
      },
    ],
  },
  {
    id: 'cloud',
    tab: 'Cloud & DevOps',
    title: 'Cloud & DevOps — Actively Learning',
    description:
      'Studying for the AWS Cloud Practitioner certification and learning how to deploy, containerize, and operate backend services in production.',
    groups: [
      {
        label: 'CLOUD PLATFORM',
        items: [
          { name: 'AWS', tone: 'java' },
          { name: 'EC2', tone: 'java' },
          { name: 'S3', tone: 'spring' },
          { name: 'RDS', tone: 'database' },
        ],
      },
      {
        label: 'CONTAINERS',
        items: [
          { name: 'Docker', tone: 'database' },
          { name: 'Docker Compose', tone: 'frontend' },
        ],
      },
      {
        label: 'WORKFLOW',
        items: [
          { name: 'Git', tone: 'devops' },
          { name: 'GitHub', tone: 'devops' },
          { name: 'Linux CLI', tone: 'spring' },
        ],
      },
      {
        label: 'CERTIFICATION',
        items: [{ name: 'AWS Cloud Practitioner', tone: 'java' }],
      },
    ],
  },
]
