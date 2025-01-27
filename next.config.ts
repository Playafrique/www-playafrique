import { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'uploads.tickettailor.com',
            },
        ],
    },
}

export default nextConfig
