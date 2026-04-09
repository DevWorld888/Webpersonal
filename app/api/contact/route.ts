import { NextRequest } from "next/server"
import nodemailer from "nodemailer"
import { contactSchema } from "@/lib/schemas/contact-schema"

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

  // 3. Send email
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false, // true for port 465, false for 587 (STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
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
    })
  } catch (err) {
    console.error("[contact] sendMail error:", err)
    return Response.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }

  return Response.json(
    { message: "Message sent successfully." },
    { status: 200 }
  )
}
