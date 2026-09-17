import type { HighlightCard, NavItem } from '@/types'

export const profile = {
  firstName: 'Patrick',
  fullName: 'Patrick Freitas Pinheiro',
  brand: 'patrick.dev',
  role: 'Java Backend Developer',
  email: 'patrick.99pinheiro@gmail.com',
  githubUrl: 'https://github.com/PatrickPinheiroNL',
  githubHandle: 'github.com/PatrickPinheiroNL',
  linkedinUrl: 'https://www.linkedin.com/in/patrick-freitas-pinheiro/',
  linkedinHandle: 'linkedin.com/in/patrick-freitas-pinheiro',
  availability: 'Open to junior backend & fullstack roles',
  year: 2026,
} as const

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const heroStack = ['JAVA', 'SPRING BOOT', 'AWS', 'DOCKER']

export const heroHighlights: HighlightCard[] = [
  { label: 'CAREER FOCUS', value: 'Junior Java Backend', tone: 'accent' },
  { label: 'ALSO OPEN TO', value: 'Fullstack / Frontend', tone: 'indigo' },
  { label: 'CLOUD PATH', value: 'AWS CCP — Studying', tone: 'java' },
  { label: 'EDUCATION', value: 'BSc Computer Science', tone: 'amber' },
]
