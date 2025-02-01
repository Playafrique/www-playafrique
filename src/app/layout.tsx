import './globals.css'
import '@fontsource-variable/dancing-script'
import '@fontsource-variable/montserrat'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { CountdownProvider } from './_providers/countdownprovider'

export async function generateMetadata(): Promise<Metadata> {
    return {
        metadataBase: new URL('https://playafrique.co.uk'),
        alternates: {
            canonical: '/',
        },
        title: 'Play Afrique',
        description:
            'From vibrant festivals to intimate gatherings, Play Afrique connects you to the heart of African culture and global happenings.',
        openGraph: {
            title: 'Play Afrique',
            description:
                'From vibrant festivals to intimate gatherings, Play Afrique connects you to the heart of African culture and global happenings.',
            type: 'website',
            url: '/',
            siteName: 'Play Afrique',
            images: [
                {
                    url: '/images/ogplayafrique.png',
                    width: 800,
                    height: 600,
                    alt: 'Play Afrique OG',
                },
            ],
        },
    }
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang='en-GB'>
            <head>
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta
                    name='keywords'
                    content='Events, Play Afrique, African Events, UK African Events'
                />

                <link
                    rel='icon'
                    href='/playafriquelogo.png'
                    type='image/png'
                    sizes='32x32'
                />
            </head>
            <body className='font-sans'>
                <CountdownProvider targetDate={new Date('2025-02-01T17:45:00')}>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </CountdownProvider>
            </body>
        </html>
    )
}
