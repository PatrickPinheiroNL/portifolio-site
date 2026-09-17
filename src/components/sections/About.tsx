import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/SectionHeading'
import { aboutParagraphs, aboutStats } from '@/data/about'
import { accentToneClasses } from '@/lib/tone'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/[0.04] py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>WHO I AM</Eyebrow>

            <h2 className="mt-6 font-sans text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-[44px]">
              Developer in transition —{' '}
              <span className="text-indigo-400">frontend to backend.</span>
            </h2>

            <div className="mt-8 space-y-6">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="font-body text-[15px] leading-[1.8] text-slate-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {aboutStats.map((stat) => (
              <div
                key={stat.title}
                className="surface-card p-5 transition-colors hover:border-white/[0.12] sm:p-6"
              >
                <p
                  className={`font-sans text-3xl font-extrabold tracking-tight ${accentToneClasses[stat.tone]}`}
                >
                  {stat.value}
                </p>
                <p className="mt-3 font-body text-[13px] font-semibold text-white">
                  {stat.title}
                </p>
                <p className="mt-1 font-body text-[12px] text-slate-500">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
