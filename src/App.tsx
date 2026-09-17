import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Journey } from '@/components/sections/Journey'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky-400 focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
