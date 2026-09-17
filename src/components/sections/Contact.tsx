import type { ComponentType, SVGProps } from 'react'
import { Container } from '@/components/ui/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/ui/Icons'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'
import { ContactForm } from './ContactForm'

interface ContactLink {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  href: string
  external: boolean
}

const contactLinks: ContactLink[] = [
  {
    icon: MailIcon,
    label: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: LinkedInIcon,
    label: profile.linkedinHandle,
    href: profile.linkedinUrl,
    external: true,
  },
  {
    icon: GitHubIcon,
    label: profile.githubHandle,
    href: profile.githubUrl,
    external: true,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.04] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-500/[0.07] blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>GET IN TOUCH</Eyebrow>

            <h2 className="mt-6 font-sans text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Let&apos;s build something
              <br />
              <span className="text-sky-400">together.</span>
            </h2>

            <p className="mt-6 max-w-md font-body text-[15px] leading-[1.8] text-slate-400">
              I&apos;m actively looking for junior backend (Java) and fullstack
              opportunities. If you have a role, a project, or just want to
              connect — I&apos;m always open to a conversation.
            </p>

            <ul className="mt-10 space-y-4">
              {contactLinks.map(({ icon: Icon, label, href, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                    className="focus-ring group inline-flex items-center gap-4 rounded-lg font-body text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-slate-400 transition-colors group-hover:border-sky-400/40 group-hover:text-sky-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  )
}
