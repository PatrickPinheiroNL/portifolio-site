import { Container } from '@/components/ui/Container'
import {
  Cls,
  CodeWindow,
  Cmt,
  Fn,
  Kw,
  Str,
  Type,
  Var,
} from '@/components/ui/CodeWindow'
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/ui/Icons'
import { heroHighlights, heroStack, profile } from '@/data/profile'
import { accentToneClasses } from '@/lib/tone'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44"
    >
      {/* Ambient background — z-0 keeps it above the page background, below content. */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid mask-fade-b" />
        <div className="absolute -left-40 top-0 h-[560px] w-[560px] rounded-full bg-sky-500/[0.13] blur-[130px]" />
        <div className="absolute -right-32 top-32 h-[520px] w-[520px] rounded-full bg-indigo-600/[0.12] blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* Left column */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
              <span
                className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-sky-400"
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] tracking-label text-slate-400">
                {heroStack.join(' · ')}
              </span>
            </div>

            <h1 className="mt-8 font-sans text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Building clean
              <br />
              <span className="text-sky-400">backend APIs</span>
              <br />
              with ambition.
            </h1>

            <p className="mt-7 max-w-xl font-body text-[15px] leading-[1.75] text-slate-400">
              CS student and frontend developer specializing in Java backend
              engineering. Building REST APIs with Spring Boot, containerizing
              with Docker, working with PostgreSQL, and actively studying for the
              AWS Cloud Practitioner certification.
            </p>

            <div className="mt-8 inline-flex items-center gap-2.5 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.07] px-4 py-2">
              <span
                className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="font-body text-[13px] text-emerald-300">
                {profile.availability}
              </span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 font-body text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-300"
              >
                View Projects
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-3 font-body text-sm text-slate-200 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-3 font-body text-sm text-slate-200 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <CodeWindow
              fileName="DeveloperProfile.java"
              path="/src/main/java/dev"
            >
              <Cmt>{'// production-minded backend developer'}</Cmt>
              {'\n\n'}
              <Kw>public</Kw> <Kw>class</Kw> <Cls>DeveloperProfile</Cls> {'{'}
              {'\n\n'}
              {'  '}
              <Kw>private</Kw> <Kw>final</Kw> <Type>String</Type> <Var>name</Var>
              {'  = '}
              <Str>&quot;{profile.firstName}&quot;</Str>;{'\n'}
              {'  '}
              <Kw>private</Kw> <Kw>final</Kw> <Type>String</Type> <Var>focus</Var>
              {' = '}
              <Str>&quot;Java Backend&quot;</Str>;{'\n'}
              {'  '}
              <Kw>private</Kw> <Kw>final</Kw> <Type>String</Type>[]{' '}
              <Var>stack</Var>
              {' = {'}
              {'\n'}
              {'    '}
              <Str>&quot;Spring Boot&quot;</Str>, <Str>&quot;Docker&quot;</Str>,
              {'\n'}
              {'    '}
              <Str>&quot;PostgreSQL&quot;</Str>, <Str>&quot;JWT&quot;</Str>
              {'\n'}
              {'  };'}
              {'\n'}
              {'  '}
              <Kw>private</Kw> <Kw>final</Kw> <Type>String</Type> <Var>cloud</Var>
              {' = '}
              <Str>&quot;AWS (studying)&quot;</Str>;{'\n\n'}
              {'  '}
              <Kw>public</Kw> <Type>String</Type> <Fn>career</Fn>() {'{'}
              {'\n'}
              {'    '}
              <Kw>return</Kw> <Str>&quot;Junior Backend Engineer&quot;</Str>;
              {'\n'}
              {'  }'}
              {'\n'}
              {'}'}
            </CodeWindow>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {heroHighlights.map((card) => (
                <div
                  key={card.label}
                  className="surface-card p-4 transition-colors hover:border-white/[0.12]"
                >
                  <p className="font-mono text-[9px] tracking-label text-slate-500">
                    {card.label}
                  </p>
                  <p
                    className={`mt-2 font-body text-sm font-medium ${accentToneClasses[card.tone]}`}
                  >
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
