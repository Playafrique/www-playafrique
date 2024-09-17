'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Heading from '../atoms/Heading'
import { Button, buttonVariants } from '../ui/button'
import { Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
    const pathname = usePathname()

    const excludePaths = ['/login', '/register', '/studio']

    if (excludePaths.includes(pathname) || pathname.includes('/studio')) {
        return null
    }
    return (
        <nav className='h-20 bg-orange-50 w-full'>
            <div className='max-w-screen-2xl mx-auto h-full flex justify-between items-center px-6 xl:px-0'>
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
                    <Heading as='h1'>Essential Oils</Heading>
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

                    <div className='flex items-center gap-2'>
                        <Link
                            href='/wishlist'
                            className={buttonVariants({
                                size: 'icon',
                                variant: 'outline',
                            })}>
                            <Heart size={20} className='text-black' />
                        </Link>
                        <Link
                            href='/shopping-basket'
                            className={buttonVariants({
                                size: 'icon',
                                variant: 'outline',
                            })}>
                            <ShoppingCart size={20} className='text-black' />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
