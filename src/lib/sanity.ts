import { createClient } from 'next-sanity'
import { env } from '@/env'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_READ_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

// Helper function for GROQ queries
export const sanityFetch = async <T = any>(
    query: string,
    params?: Record<string, any>,
    options?: {
        revalidate?: number | false
        tags?: string[]
    },
): Promise<T> => {
    const { revalidate = 60, tags = [] } = options || {}

    return client.fetch(query, params, {
        cache: 'force-cache',
        next: {
            revalidate,
            tags,
        },
    })
}
