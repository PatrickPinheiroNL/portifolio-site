import type { JourneyStep } from '@/types'

export const journeySteps: JourneyStep[] = [
  {
    id: 'frontend-foundations',
    title: 'Frontend Foundations',
    status: 'done',
    description:
      'HTML, CSS, JavaScript — learned the web layer end to end, from semantic markup to responsive layouts and browser APIs.',
    tags: [
      { name: 'HTML5', tone: 'java' },
      { name: 'CSS3', tone: 'devops' },
      { name: 'JavaScript', tone: 'java' },
    ],
  },
  {
    id: 'modern-react',
    title: 'Modern React Stack',
    status: 'done',
    description:
      'React + TypeScript + Tailwind CSS in a professional frontend internship. Building production-grade UI components daily.',
    tags: [
      { name: 'React', tone: 'frontend' },
      { name: 'TypeScript', tone: 'database' },
      { name: 'Tailwind CSS', tone: 'spring' },
      { name: 'Vite', tone: 'devops' },
    ],
  },
  {
    id: 'java-fundamentals',
    title: 'Java & CS Fundamentals',
    status: 'done',
    description:
      'Java OOP through the Computer Science curriculum — algorithms, data structures, design patterns, and software engineering principles.',
    tags: [
      { name: 'Java', tone: 'java' },
      { name: 'OOP', tone: 'devops' },
      { name: 'Data Structures', tone: 'spring' },
    ],
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot REST APIs',
    status: 'active',
    description:
      'Building complete RESTful backends: controllers, service layer, repositories, Spring Security, and JWT-based authentication.',
    tags: [
      { name: 'Spring Boot', tone: 'spring' },
      { name: 'REST APIs', tone: 'frontend' },
      { name: 'JWT', tone: 'frontend' },
      { name: 'Security', tone: 'devops' },
    ],
  },
  {
    id: 'docker-postgres',
    title: 'Docker & PostgreSQL',
    status: 'active',
    description:
      'Containerizing Spring Boot applications with Docker. Relational database design, query optimization, and JPA/Hibernate persistence.',
    tags: [
      { name: 'Docker', tone: 'database' },
      { name: 'PostgreSQL', tone: 'database' },
      { name: 'JPA', tone: 'spring' },
      { name: 'SQL', tone: 'frontend' },
    ],
  },
  {
    id: 'aws-ccp',
    title: 'AWS Cloud Practitioner',
    status: 'next',
    description:
      'Studying core AWS services — EC2, S3, RDS, VPC, IAM, Lambda — and cloud architecture fundamentals. Certification incoming.',
    tags: [
      { name: 'AWS', tone: 'java' },
      { name: 'Cloud', tone: 'spring' },
      { name: 'Certification', tone: 'java' },
    ],
  },
]
