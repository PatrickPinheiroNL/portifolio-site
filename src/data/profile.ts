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

/**
 * Contact form delivery (Web3Forms).
 *
 * Get a key at https://web3forms.com — enter `profile.email`, and the access
 * key arrives by email in seconds. No account needed.
 *
 * The key is public and write-only: it can only send mail to the address it was
 * created for, so it is safe to commit and to ship in the JS bundle. Leaving it
 * empty makes the form fall back to opening the visitor's email client.
 */
export const contactForm: { accessKey: string } = {
  accessKey: 'dc7b49a0-cb8b-433c-80a3-de09ca20f9a5',
}

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
