import { useEffect, useMemo, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { CloseIcon, MenuIcon } from '@/components/ui/Icons'
import { Logo } from '@/components/ui/Logo'
import { navItems } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    [],
  )
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-white/[0.07] bg-ink-950/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeId === item.href.replace('#', '')

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'focus-ring rounded font-body text-sm transition-colors',
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="focus-ring hidden rounded-lg bg-sky-400 px-4 py-2 font-body text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-300 sm:inline-flex"
            >
              Let&apos;s Connect
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-slate-300 transition-colors hover:text-white md:hidden"
            >
              {menuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-white/[0.07] py-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="focus-ring block rounded-lg px-2 py-2.5 font-body text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring block rounded-lg bg-sky-400 px-4 py-2.5 text-center font-body text-sm font-semibold text-ink-950"
                >
                  Let&apos;s Connect
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  )
}
