import { useState, type FormEvent } from 'react'
import { contactForm, profile } from '@/data/profile'
import { cn } from '@/lib/utils'

interface FormState {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'mailto' }
  | { kind: 'error' }

const emptyForm: FormState = { name: '', email: '', message: '' }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const ENDPOINT = 'https://api.web3forms.com/submit'

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
 * Contact form for a fully static site: validates on submit, then POSTs to
 * Web3Forms, which relays the message to the inbox tied to the access key.
 * That key is public and write-only by design, so it is safe to ship in the
 * bundle — see `contactForm` in `src/data/profile.ts`.
 *
 * With no key configured the form falls back to `mailto:` rather than failing
 * silently.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  // Honeypot: hidden from real visitors, but bots fill in every field.
  const [botcheck, setBotcheck] = useState(false)

  const sending = status.kind === 'sending'

  const update = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setStatus({ kind: 'idle' })
  }

  const openMailClient = (draft: FormState) => {
    const subject = encodeURIComponent(
      `Portfolio contact — ${draft.name.trim()}`,
    )
    const body = encodeURIComponent(
      `${draft.message.trim()}\n\n—\n${draft.name.trim()}\n${draft.email.trim()}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (sending) return

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    // Accept the submission without relaying it when the honeypot is tripped.
    if (botcheck) {
      setStatus({ kind: 'sent' })
      setValues(emptyForm)
      return
    }

    if (!contactForm.accessKey) {
      openMailClient(values)
      setStatus({ kind: 'mailto' })
      setValues(emptyForm)
      return
    }

    setStatus({ kind: 'sending' })

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: `Portfolio contact — ${values.name.trim()}`,
          from_name: 'patrick.dev portfolio',
          name: values.name.trim(),
          email: values.email.trim(),
          replyto: values.email.trim(),
          message: values.message.trim(),
        }),
      })

      const result = (await response.json().catch(() => null)) as {
        success?: boolean
      } | null

      if (!response.ok || !result?.success) {
        setStatus({ kind: 'error' })
        return
      }

      setStatus({ kind: 'sent' })
      setValues(emptyForm)
    } catch {
      setStatus({ kind: 'error' })
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
      <Field
        id="contact-name"
        label="NAME"
        placeholder="Your full name"
        value={values.name}
        error={errors.name}
        disabled={sending}
        onChange={(value) => update('name', value)}
      />

      <Field
        id="contact-email"
        label="EMAIL"
        type="email"
        placeholder="you@company.com"
        value={values.email}
        error={errors.email}
        disabled={sending}
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
          disabled={sending}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(
            'focus-ring mt-2 block w-full resize-y rounded-lg border bg-ink-800/60 px-4 py-3 font-body text-sm text-slate-200 placeholder:text-slate-600 transition-colors disabled:opacity-60',
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

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        checked={botcheck}
        onChange={(event) => setBotcheck(event.target.checked)}
        className="hidden"
      />

      <button
        type="submit"
        disabled={sending}
        className="focus-ring mt-6 w-full rounded-lg bg-sky-400 px-5 py-3 font-body text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-300 disabled:cursor-not-allowed disabled:bg-sky-400/60"
      >
        {sending ? 'Sending…' : 'Send Message'}
      </button>

      <p aria-live="polite" className="mt-4 text-center font-body text-[13px]">
        {status.kind === 'sent' ? (
          <span className="text-emerald-400">
            Thanks — your message is on its way. I&apos;ll reply to the address
            you left above.
          </span>
        ) : null}
        {status.kind === 'mailto' ? (
          <span className="text-emerald-400">
            Your email client just opened — hit send and it reaches me directly.
          </span>
        ) : null}
        {status.kind === 'error' ? (
          <span className="text-rose-400">
            Something went wrong sending that. Please try again, or email me at{' '}
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded underline underline-offset-2 hover:text-rose-300"
            >
              {profile.email}
            </a>
            .
          </span>
        ) : null}
      </p>
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
  disabled?: boolean
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
  disabled,
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
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'focus-ring mt-2 block w-full rounded-lg border bg-ink-800/60 px-4 py-3 font-body text-sm text-slate-200 placeholder:text-slate-600 transition-colors disabled:opacity-60',
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
