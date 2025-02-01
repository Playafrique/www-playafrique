import './globals.css'
import '@fontsource-variable/dancing-script'
import '@fontsource-variable/montserrat'

import type { Metadata } from 'next'
import { CountdownProvider } from './_providers/countdownprovider'

export const metadata: Metadata = {
    title: 'Play Afrique',
    description:
        'From vibrant festivals to intimate gatherings, Play Afrique connects you to the heart of African culture and global happenings.',
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
                    href='/favicon-32x32.png'
                    type='image/png'
                    sizes='32x32'
                />
            </head>
            <body className='font-sans'>
                <CountdownProvider targetDate={new Date('2025-02-01T13:30:00')}>
                    {children}
                </CountdownProvider>
            </body>
        </html>
    )
}
