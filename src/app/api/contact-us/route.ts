import { z } from 'zod'
import { sendEmail } from '@/lib/email'
import { contactFormSchema } from '@/lib/validationschema'
import { format } from 'date-fns'
import { env } from '@/env'

type ContactEmailParams = {
    name: string
    email: string
    subject: string
    message: string
}

const templete = (params: ContactEmailParams) => {
    const date = format(new Date(), 'MMMM do, yyyy')
    return ` <div style="font-family: sans-serif; max-width: 42rem; margin: 0 auto;">
      <table style="width: 100%;" cellPadding="0" cellSpacing="0" role="presentation">
        <tbody>
          <tr>
            <td style="padding: 2rem; background-color: #f9fafb;">
              <table
                style="width: 100%; background-color: white; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
              >
                <tbody>
                  <tr>
                    <td style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
                      <h1 style="font-size: 1.25rem; font-weight: bold; color: #1f2937;">New Contact Form Submission</h1>
                      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">Received on ${date}</p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 1.5rem;">
                      <table style="width: 100%;" cellPadding="0" cellSpacing="0" role="presentation">
                        <tbody>
                          <tr>
                            <td style="padding-bottom: 1rem;">
                              <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">From</p>
                              <p style="font-size: 1rem; color: #1f2937;">${params.name} &lt;${params.email}&gt;</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 1rem;">
                              <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Subject</p>
                              <p style="font-size: 1rem; color: #1f2937;">${params.subject}</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Message</p>
                              <div style="margin-top: 0.5rem; background-color: #f9fafb; border-radius: 0.25rem; border: 1px solid #e5e7eb; padding: 10px 20px;">
                                <p style="font-size: 1rem; color: #1f2937; white-space: pre-wrap;">${params.message}</p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 1.5rem; border-top: 1px solid #e5e7eb; text-align: center;">
                      <p style="font-size: 0.75rem; color: #6b7280;">
                        This is an automated email from your website contact form.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`
}

export async function POST(req: Request) {
    try {
        const res = await req.json()

        if (!res) return new Response('No body found', { status: 400 })
        const data = await contactFormSchema.parseAsync(res)

        // Send email
        await sendEmail({
            to: env.EMAIL_USER,
            subject: `Enquiry about ${data.interest}`,
            html: templete({
                name: data.name,
                email: data.email,
                subject: data.interest,
                message: data.message,
            }),
            replyTo: data.email,
        })

        return new Response('Successfully sent', { status: 200 })
    } catch (error) {
        // handle zod validation error
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error?.issues), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }
        return new Response('Failed to send email', { status: 500 })
    }
}
