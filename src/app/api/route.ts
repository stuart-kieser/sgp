import { NextRequest, NextResponse } from 'next/server'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgun = new Mailgun(FormData)

export async function POST(request: NextRequest) {
  const { name, email, text, number } = await request.json()
  const domain = process.env.MAILGUN_DOMAIN || ''

  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  })

  const messageData = {
    from: 'Contact Form <contact@sgperf.co.za>',
    to: 'stuart@kieser.co.za',
    subject: `New Contact Enquiry from ${name}`,
    text: `Hello, you have a new contact enquiry from ${name}, reachable at ${email}, ${number}. Contact Enquiry:: ${text}`,
  }

  try {
    await mg.messages.create(domain, messageData)
    return NextResponse.json({ message: 'Success!', status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: 'Failed to send mail', status: 400 })
  }
}
