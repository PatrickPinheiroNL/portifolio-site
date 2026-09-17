import { Container } from '@/components/ui/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/ui/Icons'
import { Logo } from '@/components/ui/Logo'
import { profile } from '@/data/profile'

const socials = [
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: profile.githubUrl,
    external: true,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: profile.linkedinUrl,
    external: true,
  },
  {
    icon: MailIcon,
    label: 'Email',
    href: `mailto:${profile.email}`,
    external: false,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo variant="compact" />

          <ul className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono text-[11px] text-slate-600">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  )
}
