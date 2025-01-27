import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/Navbar'
import React from 'react'

type HomeLayoutProps = {
    children: React.ReactNode
}

function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout
