import { createClient } from 'next-sanity'

// Client for Sanity Studio components
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    useCdn: false, // Use CDN for faster queries in production
    token: process.env.SANITY_API_READ_TOKEN, // Only needed for write operations
})
