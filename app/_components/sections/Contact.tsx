"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle } from "lucide-react"
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact-schema"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const inputBase =
  "w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"

type Fields = keyof ContactFormData
type FieldErrors = Partial<Record<Fields, string>>

const empty: ContactFormData = { name: "", email: "", message: "" }

export function Contact() {
  const [values, setValues] = useState<ContactFormData>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // clear error for this field as the user types
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
              Message sent.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Thanks for reaching out — I&apos;ll get back to you as soon as
              possible.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setValues(empty)
                setStatus("idle")
              }}
            >
              Send another message
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
              Contact
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Have a project in mind or want to talk? Send me a message and
              I&apos;ll get back to you as soon as possible.
            </p>
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
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                className={`${inputBase} ${errors.name ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={`${inputBase} ${errors.email ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputBase} resize-y ${errors.message ? "border-destructive focus-visible:ring-destructive/50" : "border-border"}`}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            {/* Server error */}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again later.
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="mt-1 w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
