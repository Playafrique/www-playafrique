'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Text from '@components/atoms/Text'

function Footer() {
    const pathname = usePathname()

    const excludePaths = ['/login', '/register', '/studio']

    if (excludePaths.includes(pathname)) {
        return null
    }
    return (
        <section id='footer' className='min-h-96 bg-orange-50 space-y-8 py-20'>
            <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                <div className='col-span-1 bg-orange-100 rounded-md h-96'></div>
                <div className='col-span-2 bg-orange-100 rounded-md h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='w-full rounded-md h-full bg-orange-200'></div>
                    <div className='w-full rounded-md h-full bg-orange-200'></div>
                    <div className='w-full rounded-md h-full bg-orange-200'></div>
                </div>
            </div>
            <Text className='text-center text-gray-600 text-lg'>
                &copy; 2021 Essential Oils. All rights reserved.
            </Text>
        </section>
    )
}

export default Footer
