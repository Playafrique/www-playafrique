import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    server: {
        TICKET_TAILOR_API_KEY: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
        TICKET_TAILOR_API_KEY: process.env.TICKET_TAILOR_API_KEY,
    },
})
