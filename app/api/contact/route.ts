import { NextRequest } from "next/server"
import nodemailer from "nodemailer"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { contactSchema } from "@/lib/schemas/contact-schema"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-Lite" })

const FALLBACK_REPLY = (name: string) =>
  `Hi ${name},\n\nGot your message — Augusto will get back to you within 24–48 hours.\n\n— Augusto's team`

async function generateReply(name: string, message: string): Promise<string> {
  const systemPrompt = `You are a professional assistant for Augusto, a fullstack developer and software engineer. When someone sends a contact message through his portfolio, write a warm, concise, personalized auto-reply on his behalf.

Rules:
- Keep it under 120 words
- Address the person by their first name only
- Acknowledge their specific message or need
- Let them know Augusto will get back to them within 24–48 hours
- Sign off as: "— Augusto's team"
- Professional but human tone. No hollow phrases like "Thank you for reaching out" or "I hope this finds you well"`

  const userPrompt = `Name: ${name}\nMessage: ${message}`

  try {
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }],
        },
      ],
    })
    return response.response.text()
  } catch (err) {
    console.warn("[contact] AI reply failed, using fallback:", err)
    return FALLBACK_REPLY(name)
  }
}

export async function POST(request: NextRequest) {
  // 1. Parse body
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json(
      { message: "Invalid request body." },
      { status: 400 }
    )
  }

  // 2. Validate with Zod
  const result = contactSchema.safeParse(body)
  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    return Response.json(
      { message: "Validation failed.", errors: fieldErrors },
      { status: 400 }
    )
  }

  const { name, email, message } = result.data

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // 3. Generate AI reply + notify owner in parallel
  let aiReply: string
  try {
    ;[aiReply] = await Promise.all([
      generateReply(name, message),
      transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO,
        replyTo: email,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr />
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    ])
  } catch (err) {
    console.error("[contact] owner notification or AI error:", err)
    return Response.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }

  // 4. Send AI auto-reply to the lead
  try {
    await transporter.sendMail({
      from: `"Augusto Suarez" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Re: Your message`,
      text: aiReply,
      html: `<p style="font-family:sans-serif;line-height:1.6">${aiReply.replace(/\n/g, "<br />")}</p>`,
    })
  } catch (err) {
    // Auto-reply failure is non-fatal — owner was already notified
    console.error("[contact] auto-reply error:", err)
  }

  return Response.json(
    { message: "Message sent successfully." },
    { status: 200 }
  )
}
