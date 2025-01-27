import './globals.css'
import '@fontsource-variable/dancing-script';
import '@fontsource-variable/montserrat';

import type { Metadata } from 'next'
import { Montserrat, Dancing_Script } from 'next/font/google'

const dsfont = Dancing_Script({ subsets: ['latin'], display:'swap', variable: '--font-dancing-script' })
const font = Montserrat({ subsets: ['latin'], display:'swap', variable: '--font-montserrat' })

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
            <body className='font-sans'>
                {children}
            </body>
        </html>
    )
}
