'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type Nav = {
    name: string
    href: string
}

type NavlinkProps = {
    nav: Nav
    cb?: VoidFunction
}

function Navlink({ nav, cb }: NavlinkProps) {
    const pathname = usePathname()

    let isActive = false
    if (nav.href === '/') {
        isActive = pathname === nav.href
    } else {
        // remove the initial slash from the pathname
        const pathnameWithoutSlash = pathname.slice(1)
        isActive = pathnameWithoutSlash?.includes(nav.href.slice(1))
    }

    return (
        <Button
            asChild
            onClick={cb}
            variant='ghost'
            data-active={isActive}
            className='relative text-sm font-normal leading-6 aria-disabled:opacity-50 aria-disabled:pointer-events-none w-fit data-[active=true]:underline underline-offset-8 decoration-dotted hover:bg-transparent hover:text-current'>
            <Link href={nav.href}>{nav.name}</Link>
        </Button>
    )
}

export default Navlink
