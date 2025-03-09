import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    server: {
        TICKET_TAILOR_API_KEY: z.string().min(1),
        EMAIL_HOST: z.string().min(1),
        EMAIL_PORT: z.string().min(1),
        EMAIL_USER: z.string().min(1),
        EMAIL_PASSWORD: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
        TICKET_TAILOR_API_KEY: process.env.TICKET_TAILOR_API_KEY,
        EMAIL_HOST: process.env.EMAIL_HOST,
        EMAIL_PORT: process.env.EMAIL_PORT,
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    },
})
