'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
    const pathname = usePathname()

    const excludePaths = ['/login', '/register', '/studio']

    if (excludePaths.includes(pathname)) {
        return null
    }
    return (
        <nav className='h-20 bg-orange-50 w-full'>
            <div className='container mx-auto h-full flex justify-between items-center'>
                <div className='flex space-x-6 items-center'>
                    <a
                        href='#'
                        className='text-orange-500 hover:text-orange-700'>
                        Home
                    </a>
                    <a
                        href='#'
                        className='text-orange-500 hover:text-orange-700'>
                        About
                    </a>
                    <a
                        href='#'
                        className='text-orange-500 hover:text-orange-700'>
                        Contact
                    </a>
                </div>
                <div className='text-2xl font-bold text-orange-500'>
                    Essential Oils
                </div>
                <div className='flex space-x-4 items-center'>
                    <a
                        href='#'
                        className='text-orange-500 hover:text-orange-700'>
                        Login
                    </a>
                    <a
                        href='#'
                        className='text-orange-500 hover:text-orange-700'>
                        Register
                    </a>

                    <button className='bg-orange-500 text-white px-4 py-2 rounded'>
                        Wishlist
                    </button>
                    <button className='bg-orange-500 text-white px-4 py-2 rounded'>
                        Basket
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
