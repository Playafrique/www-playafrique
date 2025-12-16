'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import ListWrapper from '../atoms/ListWrapper'
import Text from '../atoms/Text'
import { Separator } from '../ui/separator'

export type Nav = {
    name: string
    href: string
}
export type Navlink = {
    name: string
    href: string
    sublinks?: Nav[]
}

type NavlinkProps = {
    nav: Navlink
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

    if (nav.sublinks) {
        return (
            <>
                <div className='md:hidden flex flex-col gap-2 items-center justfiy-center'>
                    <Text className='font-semibold'>Services</Text>
                    <Separator />
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <ListWrapper
                            list={nav?.sublinks ?? []}
                            keyExtractor={(nav: Nav) => nav.name}>
                            {(nv) => (
                                <Button
                                    asChild
                                    onClick={cb}
                                    variant='ghost'
                                    data-active={isActive}
                                    className='relative text-base font-normal leading-6 aria-disabled:opacity-50 aria-disabled:pointer-events-none w-fit data-[active=true]:underline underline-offset-8 decoration-dotted hover:bg-transparent hover:text-current'>
                                    <Link passHref href={nv.href}>
                                        {nv.name}
                                    </Link>
                                </Button>
                            )}
                        </ListWrapper>
                    </div>
                    <Separator />
                </div>
                <NavigationMenuTrigger
                    data-active={isActive}
                    className='hidden md:flex bg-transparent dark:bg-transparent dark:text-white relative text-base font-normal leading-6 aria-disabled:opacity-50 aria-disabled:pointer-events-none w-fit data-[active=true]:border-b dark:data-[active=true]:border-white/20 border-dotted hover:bg-transparent dark:hover:bg-white/20 hover:text-current'>
                    {nav.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='w-[200px] p-4 hidden md:block'>
                    <ListWrapper
                        list={nav.sublinks ?? []}
                        keyExtractor={(nav: Nav) => nav.name}>
                        {(nv) => (
                            <Button
                                asChild
                                variant='ghost'
                                data-active={isActive}
                                className='w-full text-left dark:text-white text-base font-normal leading-6 aria-disabled:opacity-50 aria-disabled:pointer-events-none data-[active=true]:underline underline-offset-8 decoration-dotted hover:bg-transparent hover:text-current'>
                                <Link
                                    passHref
                                    onClick={cb}
                                    href={nv.href}
                                    className='dark:text-white'
                                    legacyBehavior>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}>
                                        {nv.name}
                                    </NavigationMenuLink>
                                </Link>
                            </Button>
                        )}
                    </ListWrapper>
                </NavigationMenuContent>
            </>
        )
    }

    return (
        <Button
            asChild
            onClick={cb}
            variant='ghost'
            data-active={isActive}
            className='relative text-base dark:text-white font-normal leading-6 aria-disabled:opacity-50 aria-disabled:pointer-events-none w-fit data-[active=true]:underline underline-offset-8 decoration-dotted hover:bg-transparent hover:text-current'>
            <Link href={nav.href}>{nav.name}</Link>
        </Button>
    )
}

export default Navlink
