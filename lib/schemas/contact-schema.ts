import { z } from "zod"

export const REQUEST_TYPES = ["quote", "review"] as const

export const SERVICE_OPTIONS = [
  "Website Design & Development",
  "Local SEO",
  "Google Business Profile Optimisation",
  "Online Booking System",
  "Business Automation",
  "Website Maintenance & Support",
  "Not sure yet",
] as const

export const INDUSTRY_OPTIONS = [
  "Trades & construction",
  "Painting & decorating",
  "Cleaning",
  "Barbershop, hair & beauty",
  "Health & wellness",
  "Hospitality & food",
  "Professional services",
  "Retail",
  "Startup",
  "Other",
] as const

export const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
] as const

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–3 months",
  "In 3+ months",
  "Just exploring",
] as const

const optionalText = (max: number, message: string) =>
  z.string().trim().max(max, { message }).optional().or(z.literal(""))

// Accepts "yourbusiness.com.au" as well as full URLs
const WEBSITE_PATTERN = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i
const PHONE_PATTERN = /^[+()\d\s-]{8,20}$/

export const contactSchema = z
  .object({
    requestType: z.enum(REQUEST_TYPES),

    name: z
      .string()
      .trim()
      .min(2, { message: "Please enter your full name." })
      .max(80, { message: "Name must be 80 characters or fewer." }),

    businessName: z
      .string()
      .trim()
      .min(2, { message: "Please enter your business name." })
      .max(120, { message: "Business name must be 120 characters or fewer." }),

    email: z.string().trim().toLowerCase().pipe(z.email({ message: "Please enter a valid email address." })),

    phone: optionalText(20, "Phone number is too long.").refine(
      (value) => !value || PHONE_PATTERN.test(value),
      { message: "Please enter a valid phone number." }
    ),

    location: z
      .string()
      .trim()
      .min(2, { message: "Please tell me where your business is based." })
      .max(100, { message: "Location must be 100 characters or fewer." }),

    industry: z.enum(INDUSTRY_OPTIONS, { message: "Please choose your industry." }),

    website: optionalText(200, "URL must be 200 characters or fewer.").refine(
      (value) => !value || WEBSITE_PATTERN.test(value),
      { message: "Please enter a valid website address, e.g. yourbusiness.com.au" }
    ),

    services: z.array(z.enum(SERVICE_OPTIONS)).max(SERVICE_OPTIONS.length),

    description: z
      .string()
      .trim()
      .min(20, { message: "Please add a little more detail (at least 20 characters)." })
      .max(2000, { message: "Must be 2000 characters or fewer." }),

    budget: z.enum(BUDGET_OPTIONS).optional().or(z.literal("")),
    timeline: z.enum(TIMELINE_OPTIONS).optional().or(z.literal("")),

    // Honeypot: real visitors never see or fill this field
    company: z.string().max(0).optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.requestType === "quote" && data.services.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["services"],
        message: "Please choose at least one service.",
      })
    }
    if (data.requestType === "review" && !data.website) {
      ctx.addIssue({
        code: "custom",
        path: ["website"],
        message: "Please enter the website you'd like reviewed.",
      })
    }
  })

export type ContactFormData = z.input<typeof contactSchema>
export type ContactSubmission = z.output<typeof contactSchema>
export type RequestType = (typeof REQUEST_TYPES)[number]
