/**
 * Minimal class-name joiner. Accepts strings, falsy values and conditional maps,
 * keeping JSX readable without pulling in an extra dependency.
 */
export type ClassValue = string | number | null | undefined | false | ClassValue[]

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = []

  for (const input of inputs) {
    if (!input && input !== 0) continue

    if (Array.isArray(input)) {
      const nested = cn(...input)
      if (nested) out.push(nested)
      continue
    }

    out.push(String(input))
  }

  return out.join(' ')
}
