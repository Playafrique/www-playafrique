import { env } from '@/env'
import nodemailer from 'nodemailer'

type EmailParams = {
    to: string
    subject: string
    html: string
    replyTo?: string
}

const createTransporter = () => {
    return nodemailer.createTransport({
        host: env.EMAIL_HOST,
        port: parseInt(env.EMAIL_PORT ?? '465'),
        secure: true,
        auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASSWORD,
        },
    })
}

export const sendEmail = async (params: EmailParams) => {
    const transporter = createTransporter()

    try {
        const mailOptions = {
            from: `Play Afrique <${env.EMAIL_USER}>`,
            to: params.to,
            subject: params.subject,
            html: params.html,
            replyTo: params.replyTo,
        }

        return await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log('error', error)
        throw error
    }
}
