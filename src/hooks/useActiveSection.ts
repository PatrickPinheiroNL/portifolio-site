import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the header can highlight
 * the matching nav link. Ids are passed without the leading `#`.
 */
export function useActiveSection(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const handleScroll = () => {
      // No section is highlighted until the first one reaches the offset line,
      // so the hero does not borrow the "About" link's active state.
      let current = ''

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id
        }
      }

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [sectionIds, offset])

  return activeId
}
