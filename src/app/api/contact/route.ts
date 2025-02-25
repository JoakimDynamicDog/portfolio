import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,   
      port: Number(process.env.SMTP_PORT),
      secure: false, 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    })

   
    const mailOptions = {
      from: "joakim.astrom@live.se",
      to: process.env.CONTACT_EMAIL, 
      subject: `Contact Form: ${subject}`,
      text: `
        You've got a new message:

        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `,
    }

    
    const info = await transporter.sendMail(mailOptions)
    console.log("Brevo response:", info)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}
