import { NextRequest } from "next/server"
import nodemailer from "nodemailer"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { contactSchema, type ContactSubmission } from "@/lib/schemas/contact-schema"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-Lite" })

const FALLBACK_REPLY = (firstName: string, isReview: boolean) =>
  isReview
    ? `Hi ${firstName},\n\nThanks for your website review request. Augusto will take a look at your website and send you feedback within 24–48 hours.\n\n— Augusto, iAugustoDev`
    : `Hi ${firstName},\n\nThanks for getting in touch about your project. Augusto will review your enquiry and get back to you within 24–48 hours.\n\n— Augusto, iAugustoDev`

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

async function generateReply(data: ContactSubmission): Promise<string> {
  const firstName = data.name.split(" ")[0]
  const isReview = data.requestType === "review"

  const systemPrompt = `You are a professional assistant for Augusto, the founder of iAugustoDev, a founder-led web design and digital solutions business in Hobart, Tasmania that helps Australian small businesses. Someone has just submitted ${isReview ? "a free website review request" : "a quote enquiry"}. Write a warm, concise, personalised auto-reply on his behalf.

Rules:
- Keep it under 120 words and use Australian English spelling
- Address the person by their first name only
- Acknowledge their business and what they asked about
- ${isReview ? "Let them know Augusto will review their website and send honest feedback within 24–48 hours" : "Let them know Augusto will review their enquiry and get back to them within 24–48 hours to discuss next steps"}
- Do not quote prices, timelines for the project, or promise rankings or results
- Sign off as: "— Augusto, iAugustoDev"
- Friendly, direct, professional tone. No hollow corporate phrases`

  const userPrompt = `Name: ${data.name}
Business: ${data.businessName} (${data.industry}, ${data.location})
Website: ${data.website || "None"}
Services of interest: ${data.services.join(", ") || "Not specified"}
Message: ${data.description}`

  try {
    const response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }],
    })
    return response.response.text()
  } catch (err) {
    console.warn("[contact] AI reply failed, using fallback:", err)
    return FALLBACK_REPLY(firstName, isReview)
  }
}

function ownerEmail(data: ContactSubmission) {
  const rows: [string, string][] = [
    ["Request type", data.requestType === "review" ? "Website review" : "Quote"],
    ["Name", data.name],
    ["Business", data.businessName],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Location", data.location],
    ["Industry", data.industry],
    ["Website", data.website || "Not provided"],
    ["Services", data.services.join(", ") || "Not specified"],
    ["Budget", data.budget || "Not specified"],
    ["Timeline", data.timeline || "Not specified"],
  ]

  const text = `${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nMessage:\n${data.description}`

  const html = `
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${label}</td><td style="padding:4px 0;color:#0f172a"><strong>${escapeHtml(value)}</strong></td></tr>`
        )
        .join("")}
    </table>
    <hr />
    <p style="font-family:sans-serif;font-size:14px;color:#0f172a">${escapeHtml(data.description).replace(/\n/g, "<br />")}</p>
  `

  return { text, html }
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 })
  }

  // Honeypot filled in: pretend success so bots don't retry, but send nothing
  if (body && typeof body === "object" && "company" in body && (body as { company?: unknown }).company) {
    return Response.json({ message: "Message sent successfully." }, { status: 200 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return Response.json(
      { message: "Validation failed.", errors: result.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const data = result.data
  const isReview = data.requestType === "review"

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const { text, html } = ownerEmail(data)

  let aiReply: string
  try {
    ;[aiReply] = await Promise.all([
      generateReply(data),
      transporter.sendMail({
        from: `"iAugustoDev Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO,
        replyTo: data.email,
        subject: `New ${isReview ? "website review request" : "quote enquiry"}: ${data.businessName} (${data.name})`,
        text,
        html,
      }),
    ])
  } catch (err) {
    console.error("[contact] owner notification or AI error:", err)
    return Response.json({ message: "Failed to send message. Please try again later." }, { status: 500 })
  }

  try {
    await transporter.sendMail({
      from: `"Augusto | iAugustoDev" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: isReview ? "Your free website review request" : "Thanks for your enquiry",
      text: aiReply,
      html: `<p style="font-family:sans-serif;line-height:1.6">${escapeHtml(aiReply).replace(/\n/g, "<br />")}</p>`,
    })
  } catch (err) {
    console.error("[contact] auto-reply error:", err)
  }

  return Response.json({ message: "Message sent successfully." }, { status: 200 })
}
