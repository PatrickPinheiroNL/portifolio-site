import { useState, type FormEvent } from 'react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

interface FormState {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const emptyForm: FormState = { name: '', email: '', message: '' }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please write a short message.'

  return errors
}

/**
 * Static-site friendly contact form: validates on submit, then hands the
 * message off to the visitor's email client. Swap `handleSubmit` for a POST
 * once a backend endpoint is available.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(
      `Portfolio contact — ${values.name.trim()}`,
    )
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setSent(true)
    setValues(emptyForm)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
      <Field
        id="contact-name"
        label="NAME"
        placeholder="Your full name"
        value={values.name}
        error={errors.name}
        onChange={(value) => update('name', value)}
      />

      <Field
        id="contact-email"
        label="EMAIL"
        type="email"
        placeholder="you@company.com"
        value={values.email}
        error={errors.email}
        onChange={(value) => update('email', value)}
        className="mt-5"
      />

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="font-mono text-[10px] tracking-label text-slate-500"
        >
          MESSAGE
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell me about the role or opportunity..."
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(
            'focus-ring mt-2 block w-full resize-y rounded-lg border bg-ink-800/60 px-4 py-3 font-body text-sm text-slate-200 placeholder:text-slate-600 transition-colors',
            errors.message
              ? 'border-rose-500/50'
              : 'border-white/[0.07] hover:border-white/[0.12]',
          )}
        />
        {errors.message ? (
          <p
            id="contact-message-error"
            className="mt-2 font-body text-xs text-rose-400"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="focus-ring mt-6 w-full rounded-lg bg-sky-400 px-5 py-3 font-body text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-300"
      >
        Send Message
      </button>

      <p aria-live="polite" className="sr-only">
        {sent ? 'Your email client has been opened with the message.' : ''}
      </p>

      {sent ? (
        <p className="mt-4 text-center font-body text-[13px] text-emerald-400">
          Your email client just opened — hit send and it reaches me directly.
        </p>
      ) : null}
    </form>
  )
}

interface FieldProps {
  id: string
  label: string
  placeholder: string
  value: string
  error?: string
  type?: 'text' | 'email'
  className?: string
  onChange: (value: string) => void
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  type = 'text',
  className,
  onChange,
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="font-mono text-[10px] tracking-label text-slate-500"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'focus-ring mt-2 block w-full rounded-lg border bg-ink-800/60 px-4 py-3 font-body text-sm text-slate-200 placeholder:text-slate-600 transition-colors',
          error
            ? 'border-rose-500/50'
            : 'border-white/[0.07] hover:border-white/[0.12]',
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 font-body text-xs text-rose-400">
          {error}
        </p>
      ) : null}
    </div>
  )
}
