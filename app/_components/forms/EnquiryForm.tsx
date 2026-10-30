"use client"

import { useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { AlertCircle, CheckCircle2, FileSearch, LoaderCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { gtagEvent } from "@/lib/analytics"
import { siteConfig } from "@/lib/site-config"
import {
  BUDGET_OPTIONS,
  INDUSTRY_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  contactSchema,
  type RequestType,
} from "@/lib/schemas/contact-schema"

interface FormValues {
  name: string
  businessName: string
  email: string
  phone: string
  location: string
  industry: string
  website: string
  services: string[]
  description: string
  budget: string
  timeline: string
  company: string
}

type Field = keyof FormValues
type FieldErrors = Partial<Record<Field, string>>
type Status = "idle" | "loading" | "success" | "error"

const EMPTY: FormValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  location: "",
  industry: "",
  website: "",
  services: [],
  description: "",
  budget: "",
  timeline: "",
  company: "",
}

// Order used to focus the first invalid field after submit
const FIELD_ORDER: Field[] = [
  "name",
  "businessName",
  "email",
  "phone",
  "location",
  "industry",
  "website",
  "services",
  "description",
]

const COPY: Record<RequestType, { title: string; intro: string; description: string; placeholder: string; submit: string }> = {
  quote: {
    title: "Get a free quote",
    intro: "Tell me about your business and what you need. I'll reply with next steps and, if it's a good fit, a clear proposal.",
    description: "Tell me about your project",
    placeholder: "e.g. I need a new website for my cleaning business with online booking, and I'd like to show up when people search in Hobart.",
    submit: "Send my enquiry",
  },
  review: {
    title: "Request a free website review",
    intro: "Already have a website? I'll look at it and send you honest feedback on what could be working harder for your business.",
    description: "What would you like to improve?",
    placeholder: "e.g. My site looks dated, it's slow on mobile and we rarely get enquiries through it.",
    submit: "Request my website review",
  },
}

const inputClass =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-[15px] text-navy shadow-xs outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15 aria-invalid:border-destructive aria-invalid:focus:ring-destructive/15"

export function EnquiryFormFromParams() {
  const params = useSearchParams()
  const type: RequestType = params.get("type") === "review" ? "review" : "quote"
  // key resets the form if the visitor follows a link to the other path while on /contact
  return <EnquiryForm key={type} initialType={type} />
}

export function EnquiryForm({ initialType = "quote" }: { initialType?: RequestType }) {
  const [requestType, setRequestType] = useState<RequestType>(initialType)
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const copy = COPY[requestType]

  function update(field: Field, value: FormValues[Field]) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    update(e.target.name as Field, e.target.value)
  }

  function toggleService(service: string) {
    update(
      "services",
      values.services.includes(service)
        ? values.services.filter((s) => s !== service)
        : [...values.services, service]
    )
  }

  function switchType(type: RequestType) {
    setRequestType(type)
    setErrors({})
    if (status === "error") setStatus("idle")
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const payload = { ...values, requestType }
    const result = contactSchema.safeParse(payload)

    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as Field
        if (!fieldErrors[field]) fieldErrors[field] = issue.message
      }
      setErrors(fieldErrors)
      const first = FIELD_ORDER.find((field) => fieldErrors[field])
      if (first) formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus()
      return
    }

    setErrors({})
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      })
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)

      gtagEvent("form_submit", {
        form_name: requestType === "quote" ? "quote" : "website_review",
        industry: result.data.industry,
      })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-white p-8 shadow-soft sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-navy">
          Thanks, {values.name.split(" ")[0]}. Your {requestType === "quote" ? "enquiry" : "review request"} is on its way.
        </h2>
        <p className="text-[15px] leading-relaxed text-body">
          You&apos;ll receive a confirmation email shortly. I&apos;ll personally review your details and get back
          to you within 24–48 hours.
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            setValues(EMPTY)
            setStatus("idle")
          }}
        >
          Send another enquiry
        </Button>
      </div>
    )
  }

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="flex items-center gap-1.5 text-sm text-destructive">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {errors[field]}
      </p>
    ) : null

  const a11y = (field: Field) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    "data-field": field,
  })

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-10">
      {/* Conversion path switcher */}
      <div role="group" aria-label="What do you need?" className="mb-8 grid grid-cols-2 gap-1.5 rounded-xl bg-secondary p-1.5">
        {(["quote", "review"] as const).map((type) => (
          <button
            key={type}
            type="button"
            aria-pressed={requestType === type}
            onClick={() => switchType(type)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all",
              requestType === type ? "bg-white text-primary shadow-soft" : "text-body hover:text-navy"
            )}
          >
            {type === "quote" ? <Send className="h-4 w-4" aria-hidden="true" /> : <FileSearch className="h-4 w-4" aria-hidden="true" />}
            {type === "quote" ? "Free quote" : "Website review"}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold tracking-tight text-navy">{copy.title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-body">{copy.intro}</p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <FieldGroup label="Full name" htmlFor="name" error={fieldError("name")}>
            <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange} className={inputClass} {...a11y("name")} />
          </FieldGroup>

          <FieldGroup label="Business name" htmlFor="businessName" error={fieldError("businessName")}>
            <input id="businessName" name="businessName" type="text" autoComplete="organization" value={values.businessName} onChange={handleChange} className={inputClass} {...a11y("businessName")} />
          </FieldGroup>

          <FieldGroup label="Email" htmlFor="email" error={fieldError("email")}>
            <input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@yourbusiness.com.au" value={values.email} onChange={handleChange} className={inputClass} {...a11y("email")} />
          </FieldGroup>

          <FieldGroup label="Phone" optional htmlFor="phone" error={fieldError("phone")}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={handleChange} className={inputClass} {...a11y("phone")} />
          </FieldGroup>

          <FieldGroup label="Business location" htmlFor="location" error={fieldError("location")}>
            <input id="location" name="location" type="text" autoComplete="address-level2" placeholder="e.g. Hobart, TAS" value={values.location} onChange={handleChange} className={inputClass} {...a11y("location")} />
          </FieldGroup>

          <FieldGroup label="Industry" htmlFor="industry" error={fieldError("industry")}>
            <select id="industry" name="industry" value={values.industry} onChange={handleChange} className={cn(inputClass, !values.industry && "text-muted-foreground")} {...a11y("industry")}>
              <option value="" disabled>Select your industry</option>
              {INDUSTRY_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-navy">{option}</option>
              ))}
            </select>
          </FieldGroup>
        </div>

        <FieldGroup
          label={requestType === "review" ? "Website to review" : "Existing website"}
          optional={requestType === "quote"}
          htmlFor="website"
          error={fieldError("website")}
        >
          <input id="website" name="website" type="url" autoComplete="url" inputMode="url" placeholder="yourbusiness.com.au" value={values.website} onChange={handleChange} className={inputClass} {...a11y("website")} />
        </FieldGroup>

        <fieldset aria-describedby={errors.services ? "services-error" : undefined}>
          <legend className="mb-3 text-sm font-medium text-navy">
            {requestType === "quote" ? "Which services are you interested in?" : "Anything specific you'd like help with?"}
            {requestType === "review" && <span className="ml-1 font-normal text-muted-foreground">(optional)</span>}
          </legend>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {SERVICE_OPTIONS.map((service, i) => {
              const checked = values.services.includes(service)
              return (
                <label
                  key={service}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg border px-3.5 py-3 text-sm transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary/15",
                    checked ? "border-primary bg-secondary text-navy" : "border-border text-body hover:border-primary/40"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(service)}
                    className="h-4 w-4 shrink-0 accent-primary"
                    {...(i === 0 ? { "data-field": "services" } : {})}
                  />
                  {service}
                </label>
              )
            })}
          </div>
          <div className="mt-2">{fieldError("services")}</div>
        </fieldset>

        <FieldGroup label={copy.description} htmlFor="description" error={fieldError("description")}>
          <textarea id="description" name="description" rows={5} placeholder={copy.placeholder} value={values.description} onChange={handleChange} className={cn(inputClass, "resize-y")} {...a11y("description")} />
        </FieldGroup>

        {requestType === "quote" && (
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldGroup label="Budget range" optional htmlFor="budget">
              <select id="budget" name="budget" value={values.budget} onChange={handleChange} className={cn(inputClass, !values.budget && "text-muted-foreground")}>
                <option value="">Select a range</option>
                {BUDGET_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-navy">{option}</option>
                ))}
              </select>
            </FieldGroup>
            <FieldGroup label="Preferred timeline" optional htmlFor="timeline">
              <select id="timeline" name="timeline" value={values.timeline} onChange={handleChange} className={cn(inputClass, !values.timeline && "text-muted-foreground")}>
                <option value="">Select a timeline</option>
                {TIMELINE_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-navy">{option}</option>
                ))}
              </select>
            </FieldGroup>
          </div>
        )}

        {/* Honeypot, hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={handleChange} />
        </div>

        {status === "error" && (
          <div role="alert" className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-red-50 p-4 text-sm text-red-800">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>
              Sorry, something went wrong and your message wasn&apos;t sent. Please try again, or email me
              directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Button type="submit" size="xl" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" /> Sending…
              </>
            ) : (
              copy.submit
            )}
          </Button>
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            No obligation. Your details are only used to respond to your enquiry.
          </p>
        </div>
      </form>
    </div>
  )
}

function FieldGroup({
  label,
  htmlFor,
  optional,
  error,
  children,
}: {
  label: string
  htmlFor: string
  optional?: boolean
  error?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy">
        {label}
        {optional && <span className="ml-1 font-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error}
    </div>
  )
}
