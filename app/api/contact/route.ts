import { NextRequest } from "next/server"
import nodemailer from "nodemailer"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { contactSchema } from "@/lib/schemas/contact-schema"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-Lite" })

const FALLBACK_REPLY = (name: string) =>
  `Hi ${name},\n\nGot your request — Augusto will review your website and send you feedback within 24–48 hours.\n\n— Augusto`

async function generateReply(
  name: string,
  service: string,
  problem: string
): Promise<string> {
  const systemPrompt = `You are a professional assistant for Augusto, a web developer who builds websites for tradies and small businesses in Australia. Someone has submitted a free website audit request. Write a warm, concise, personalized auto-reply on his behalf.

Rules:
- Keep it under 120 words
- Address the person by their first name only
- Acknowledge their trade/service and the specific problem they mentioned
- Let them know Augusto will review their website and send them a short video with real improvements within 24–48 hours
- Sign off as: "— Augusto"
- Friendly, direct, no-nonsense tone. No hollow corporate phrases`

  const userPrompt = `Name: ${name}\nService: ${service}\nBiggest problem: ${problem}`

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
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json(
      { message: "Invalid request body." },
      { status: 400 }
    )
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    return Response.json(
      { message: "Validation failed.", errors: fieldErrors },
      { status: 400 }
    )
  }

  const { name, email, service, website, problem } = result.data

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  let aiReply: string
  try {
    ;[aiReply] = await Promise.all([
      generateReply(name, service, problem),
      transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO,
        replyTo: email,
        subject: `New audit request from ${name} — ${service}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nWebsite: ${website || "Not provided"}\n\nBiggest problem:\n${problem}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Website:</strong> ${website ? `<a href="${website}">${website}</a>` : "Not provided"}</p>
          <hr />
          <p><strong>Biggest problem getting clients:</strong></p>
          <p>${problem.replace(/\n/g, "<br />")}</p>
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

  try {
    await transporter.sendMail({
      from: `"Augusto Suarez" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Your free website audit`,
      text: aiReply,
      html: `<p style="font-family:sans-serif;line-height:1.6">${aiReply.replace(/\n/g, "<br />")}</p>`,
    })
  } catch (err) {
    console.error("[contact] auto-reply error:", err)
  }

  return Response.json(
    { message: "Message sent successfully." },
    { status: 200 }
  )
}
