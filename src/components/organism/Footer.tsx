import React from 'react'
import Text from '@components/atoms/Text'
import Logo from '../molecules/Logo'
import Heading from '../atoms/Heading'
import ListWrapper from '../atoms/ListWrapper'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    const companyLinks = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About Us',
            href: '/#aboutus',
        },
        {
            name: 'Events',
            href: '/#events',
        },
        {
            name: 'Upcoming Events',
            href: '/#upcoming-events',
        },
        {
            name: 'Services',
            href: '/#services',
        },
        {
            name: 'Become a Member',
            href: '/join',
        },
        // {
        //     name: 'Rentals',
        //     href: '/#',
        // },
        // {
        //     name: 'Shop',
        //     href: '/#',
        // },
    ]

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (
                <Image
                    src='/icons/facebook.png'
                    alt='Play Afrique FB page'
                    width={100}
                    height={100}
                    className='w-8 h-8 dark:invert'
                    unoptimized
                />
            ),
            href: 'https://www.facebook.com/share/14sFDxDrHF/?mibextid=wwXIfr',
        },
        {
            name: 'Instagram',
            icon: (
                <Image
                    src='/icons/instagram.png'
                    alt='Play Afrique Instagram page'
                    width={100}
                    height={100}
                    className='w-8 h-8 dark:invert'
                    unoptimized
                />
            ),
            href: 'https://www.instagram.com/play_afrique/profilecard/?igsh=OTVlcWVscnBnN3l5',
        },
        {
            name: 'Tiktok',
            icon: (
                <Image
                    src='/icons/tiktok.png'
                    alt='Play Afrique Tiktok'
                    width={100}
                    height={100}
                    className='w-8 h-8 dark:invert'
                    unoptimized
                />
            ),
            href: 'https://www.tiktok.com/@playafrique?_t=8seP44KSXoX&_r=1',
        },
    ]
    return (
        <section
            id='footer'
            className='min-h-96 bg-orange-50 dark:bg-slate-900 space-y-8 py-20 px-10 3xl:px-0'>
            <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
                <div className='col-span-3 rounded-md md:h-96 space-y-8 max-w-xl'>
                    <Logo isHome={true} />
                    <Text className='text-gray-600 dark:text-gray-400 text-base'>
                        Play Afrique CIC is a platform that connects you to the
                        heart of African culture and global happenings.
                    </Text>
                    <Text className='text-gray-600 dark:text-gray-400 text-base'>
                        Get in touch with us at
                        <a
                            href='mailto:hello@playafrique.co.uk'
                            className='underline decoration-dotted underline-offset-8 mx-1 dark:text-white'>
                            Play Afrique CIC
                        </a>
                        for any inquiries or to book an event
                    </Text>

                    <Text className='hidden lg:block text-gray-600 dark:text-gray-400 text-base'>
                        &copy; {new Date().getFullYear()} Play Afrique CIC. All
                        rights reserved.
                    </Text>
                </div>
                <div className='col-span-2 rounded-md md:h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    <div className='w-full rounded-md h-full space-y-5'>
                        <Heading
                            as='h4'
                            className='text-orange-500 dark:text-orange-400 font-medium text-base'>
                            Company
                        </Heading>
                        <div className='space-y-6 flex flex-col'>
                            <ListWrapper
                                list={companyLinks}
                                keyExtractor={(item) => item.name}>
                                {(item) => (
                                    <Link
                                        href={item.href}
                                        className='dark:text-white'>
                                        {item.name}
                                    </Link>
                                )}
                            </ListWrapper>
                        </div>
                    </div>
                    <div className='w-full rounded-md h-full space-y-5'>
                        <Heading
                            as='h4'
                            className='text-orange-500 dark:text-orange-400 font-medium text-base'>
                            Social Media
                        </Heading>
                        <div className='space-y-6 flex flex-col'>
                            <ListWrapper
                                list={socialLinks}
                                keyExtractor={(item) => item.name}>
                                {(item) => (
                                    <span className='flex items-center gap-3'>
                                        {item.icon}
                                        <a
                                            title={item.name}
                                            href={item.href}
                                            target='_blank'
                                            rel='noopener noreferer'
                                            className='dark:text-white'>
                                            {item.name}
                                        </a>
                                    </span>
                                )}
                            </ListWrapper>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden max-w-screen-2xl mx-auto flex justify-center items-center mt-10'>
                <Text className='text-gray-600 dark:text-gray-400 text-base'>
                    &copy; {new Date().getFullYear()} Play Afrique CIC. All
                    rights reserved.
                </Text>
            </div>
        </section>
    )
}

export default Footer
