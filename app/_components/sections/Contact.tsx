"use client"

import { useState } from "react"
import { gtagEvent } from "@/lib/analytics"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Mail } from "lucide-react"
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact-schema"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const inputBase =
  "w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"

type Fields = keyof ContactFormData
type FieldErrors = Partial<Record<Fields, string>>

const empty: ContactFormData = {
  name: "",
  email: "",
  service: "",
  website: "",
  problem: "",
}

export function Contact() {
  const [values, setValues] = useState<ContactFormData>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name as Fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const result = contactSchema.safeParse(values)

    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as Fields
        if (!fieldErrors[field]) fieldErrors[field] = issue.message
      }
      setErrors(fieldErrors)
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

      if (!res.ok) throw new Error("server error")
      gtagEvent("form_submit", { form_name: "contact", service: result.data.service })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="flex max-w-lg flex-col items-start gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CheckCircle className="h-10 w-10 text-foreground" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              You&apos;re in.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Check your inbox — I&apos;ll review your website and send you a
              short video with specific improvements. Usually within 24–48 hours.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setValues(empty)
                setStatus("idle")
              }}
            >
              Submit another request
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Free Website Audit
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Is Your Website Costing You Jobs?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Fill in your details below. I&apos;ll review your online presence
              and send you a short video showing exactly what to fix — at no
              cost, no strings attached.
            </p>
          </motion.div>

          {/* Direct contact */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="-mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8"
          >
            {/* <a
              href="tel:+61412053218"
              onClick={() => gtagEvent("click_call", { phone: "+61412053218" })}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 shrink-0" />
              +61 412 053 218
            </a> */}
            <a
              href="mailto:augustocsuarez1985@gmail.com"
              onClick={() => gtagEvent("click_email", { email: "augustocsuarez1985@gmail.com" })}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" />
              augustocsuarez1985@gmail.com
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex w-full max-w-lg flex-col gap-5"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="John Smith"
                autoComplete="name"
                className={`${inputBase} ${errors.name ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="john@yourbusiness.com.au"
                autoComplete="email"
                className={`${inputBase} ${errors.email ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-sm font-medium text-foreground">
                What service do you offer?
              </label>
              <input
                id="service"
                type="text"
                name="service"
                value={values.service}
                onChange={handleChange}
                placeholder="e.g. Painter, Electrician, Cleaner, Plumber..."
                className={`${inputBase} ${errors.service ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.service && (
                <p className="text-xs text-destructive">{errors.service}</p>
              )}
            </div>

            {/* Website */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="website" className="text-sm font-medium text-foreground">
                Your website{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="website"
                type="url"
                name="website"
                value={values.website}
                onChange={handleChange}
                placeholder="https://yourbusiness.com.au"
                autoComplete="url"
                className={`${inputBase} ${errors.website ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.website && (
                <p className="text-xs text-destructive">{errors.website}</p>
              )}
            </div>

            {/* Problem */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="problem" className="text-sm font-medium text-foreground">
                What&apos;s your biggest problem getting clients right now?
              </label>
              <textarea
                id="problem"
                name="problem"
                value={values.problem}
                onChange={handleChange}
                placeholder="e.g. My phone barely rings, I rely on word of mouth, people visit my site but never call..."
                rows={4}
                className={`${inputBase} resize-y ${errors.problem ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.problem && (
                <p className="text-xs text-destructive">{errors.problem}</p>
              )}
            </div>

            {/* Server error */}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again later.
              </p>
            )}

            {/* Submit */}
            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                size="lg"
                className="mt-1 w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Get My Free Website Audit"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No sales call. No commitment. Just honest feedback on what&apos;s
                holding your business back online.
              </p>
              <p className="text-center text-xs text-muted-foreground">
                I reply within 4 hours on business days — no sales pitch, just honest feedback.
              </p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
