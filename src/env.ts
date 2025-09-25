import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    server: {
        TICKET_TAILOR_API_KEY: z.string().min(1),
        EMAIL_HOST: z.string().min(1),
        EMAIL_PORT: z.string().min(1),
        EMAIL_USER: z.string().min(1),
        EMAIL_PASSWORD: z.string().min(1),
        SANITY_API_READ_TOKEN: z.string().optional(),
    },
    client: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
        NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
        NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1),
    },
    runtimeEnv: {
        TICKET_TAILOR_API_KEY: process.env.TICKET_TAILOR_API_KEY,
        EMAIL_HOST: process.env.EMAIL_HOST,
        EMAIL_PORT: process.env.EMAIL_PORT,
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
        SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
        NEXT_PUBLIC_SANITY_PROJECT_ID:
            process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
        NEXT_PUBLIC_SANITY_API_VERSION:
            process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    },
})
