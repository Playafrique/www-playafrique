'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import ListWrapper from '../atoms/ListWrapper'
import Navlink from '../molecules/Navlink'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Logo from '../molecules/Logo'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet'
import Hamburger from 'hamburger-react'
import { useDisclosure } from '@/hooks/useDisclosure'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '../ui/navigation-menu'
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
// } from '@/components/ui/navigation-menu'

const navlinks = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Events',
        href: '/#events',
    },
    {
        name: 'Services',
        href: '/#services',
        sublinks: [
            {
                name: 'African Themed Events & Festivals',
                href: '/services/african-themed-events-festivals',
            },
            { name: 'Event Catering', href: '/services/event-catering' },
            {
                name: 'Cultural Props Rentals',
                href: '/services/cultural-props-rentals',
            },
            { name: 'Popup Markets', href: '/services/popup-markets' },
            {
                name: 'Diversity Workshops',
                href: '/services/diversity-workshops',
            },
        ],
    },
    {
        name: 'About Us',
        href: '/#aboutus',
    },
    {
        name: 'Upcoming Events',
        href: '/#upcoming-events',
    },
    // {
    //     name: 'Rentals',
    //     href: '/rentals site',
    // },
    // {
    //     name: 'Shop',
    //     href: '/rentals site',
    // },
]

function Navbar() {
    const pathname = usePathname()
    const isHome = pathname === '/'
    return (
        <nav
            className={cn(
                'h-20  w-full absolute z-30 bg-transparent top-0 left-0',
                { 'bg-white shadow-sm border-b border-gray-200': !isHome }
            )}>
            <div className='container mx-auto h-full flex justify-between items-center px-6 2xl:px-0'>
                <Logo isHome={isHome} />
                <NavigationMenu className='hidden lg:flex space-x-4 items-center'>
                    <NavigationMenuList
                        className={cn('flex space-x-3 items-center', {
                            'text-white': isHome,
                        })}>
                        <ListWrapper
                            list={navlinks}
                            keyExtractor={(nav) => nav.name}>
                            {(nav) => (
                                <NavigationMenuItem>
                                    <Navlink nav={nav} />
                                </NavigationMenuItem>
                            )}
                        </ListWrapper>
                        <Button
                            asChild
                            variant={isHome ? 'outline' : 'default'}
                            className={isHome ? 'bg-transparent' : ''}>
                            <Link href='/#contact-us'>Contact Us</Link>
                        </Button>
                    </NavigationMenuList>
                </NavigationMenu>
                <MobileNav isHome={isHome} />
            </div>
        </nav>
    )
}

function MobileNav({ isHome }: { isHome?: boolean }) {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const pathname = usePathname()

    return (
        <Sheet
            open={isOpen}
            key={pathname}
            onOpenChange={(open) => {
                if (!open) onClose()
            }}>
            <SheetTrigger className='lg:hidden'>
                {/* <HambergerMenu className="h-9 w-9 text-primary" /> */}
                <Hamburger
                    toggled={isOpen}
                    onToggle={onOpen}
                    direction='right'
                    color={isHome ? 'white' : 'black'}
                    size={28}
                />
            </SheetTrigger>
            <SheetContent
                side='left'
                className='h-screen w-screen space-y-9'
                hideClose>
                <SheetHeader className='w-full h-20 flex flex-row  items-center justify-between'>
                    {/* <Logo isHome /> */}
                    <Image
                        width={100}
                        height={100}
                        alt='Play Afrique Logo'
                        src='/images/playafriquelogo.png'
                        className='w-20 h-20'
                    />
                    <SheetTitle className='sr-only'>
                        Play Afrique navigation
                    </SheetTitle>
                    <SheetDescription className='sr-only'>
                        Find our mobile navigation here
                    </SheetDescription>
                    <Hamburger
                        toggled={isOpen}
                        onToggle={onClose}
                        direction='right'
                    />
                </SheetHeader>
                <NavigationMenu>
                    <div className='space-y-10 py-20'>
                        <NavigationMenuList className='flex flex-col gap-5'>
                            <ListWrapper
                                list={navlinks}
                                keyExtractor={(nav) => nav.name}>
                                {(nav) => (
                                    <NavigationMenuItem>
                                        <Navlink nav={nav} cb={onClose} />
                                    </NavigationMenuItem>
                                )}
                            </ListWrapper>
                        </NavigationMenuList>
                        <Button onClick={onClose} asChild className='w-full'>
                            <Link href='/#contact-us'>Contact Us</Link>
                        </Button>
                    </div>
                </NavigationMenu>
            </SheetContent>
        </Sheet>
    )
}

export default Navbar
