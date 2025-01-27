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
                    src='/facebook.png'
                    alt='Play Afrique FB page'
                    width={100}
                    height={100}
                    className='w-8 h-8'
                    unoptimized
                />
            ),
            href: 'https://www.facebook.com/share/14sFDxDrHF/?mibextid=wwXIfr',
        },
        {
            name: 'Instagram',
            icon: (
                <Image
                    src='/instagram.png'
                    alt='Play Afrique Instagram page'
                    width={100}
                    height={100}
                    className='w-8 h-8'
                    unoptimized
                />
            ),
            href: 'https://www.instagram.com/play_afrique/profilecard/?igsh=OTVlcWVscnBnN3l5',
        },
        {
            name: 'Tiktok',
            icon: (
                <Image
                    src='/tiktok.png'
                    alt='Play Afrique Tiktok'
                    width={100}
                    height={100}
                    className='w-8 h-8'
                    unoptimized
                />
            ),
            href: 'https://www.tiktok.com/@playafrique?_t=8seP44KSXoX&_r=1',
        },
    ]
    return (
        <section
            id='footer'
            className='min-h-96 bg-orange-50 space-y-8 py-20 px-10 2xl:px-0'>
            <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
                <div className='col-span-3 rounded-md h-96 space-y-8 max-w-xl'>
                    <Logo isHome={false} />
                    <Text className='text-gray-600 text-base'>
                        Play Afrique is a platform that connects you to the
                        heart of African culture and global happenings.
                    </Text>
                    <Text className='text-gray-600 text-base'>
                        Get in touch with us for any inquiries or to book an
                        event.
                    </Text>
                    <div>{/* Contact Us form */}</div>

                    <Text className='text-gray-600 text-base'>
                        &copy; {new Date().getFullYear()} Play Afrique. All
                        rights reserved.
                    </Text>
                </div>
                <div className='col-span-2 rounded-md h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    <div className='w-full rounded-md h-full space-y-5'>
                        <Heading
                            as='h4'
                            className='text-orange-500 font-medium text-base'>
                            Company
                        </Heading>
                        <div className='space-y-6 flex flex-col'>
                            <ListWrapper
                                list={companyLinks}
                                keyExtractor={(item) => item.name}>
                                {(item) => (
                                    <Link href={item.href}>{item.name}</Link>
                                )}
                            </ListWrapper>
                        </div>
                    </div>
                    <div className='w-full rounded-md h-full space-y-5'>
                        <Heading
                            as='h4'
                            className='text-orange-500 font-medium text-base'>
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
                                            rel='noopener noreferer'>
                                            {item.name}
                                        </a>
                                    </span>
                                )}
                            </ListWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
