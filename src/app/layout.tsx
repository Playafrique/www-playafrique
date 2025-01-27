import './globals.css'
import '@fontsource-variable/dancing-script'
import '@fontsource-variable/montserrat'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Play Afrique',
    description: 'Essential Oils',
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
            <body className='font-sans'>{children}</body>
        </html>
    )
}
