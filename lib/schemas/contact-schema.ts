import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name must be 80 characters or fewer." }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please enter a valid email address." }),

  service: z
    .string()
    .trim()
    .min(2, { message: "Please tell us what service you offer." })
    .max(100, { message: "Must be 100 characters or fewer." }),

  website: z
    .string()
    .trim()
    .max(200, { message: "URL must be 200 characters or fewer." })
    .optional(),

  problem: z
    .string()
    .trim()
    .min(10, { message: "Please describe your situation in a few words." })
    .max(2000, { message: "Must be 2000 characters or fewer." }),
})

export type ContactFormData = z.infer<typeof contactSchema>
