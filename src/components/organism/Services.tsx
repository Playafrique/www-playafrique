import React from 'react'
import Image from 'next/image'
import Heading from '../atoms/Heading'
import HeadingTitle from '../molecules/HeadingTitle'
import ListWrapper from '../atoms/ListWrapper'
import Animate from '../atoms/Animate'
import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

const services = [
    {
        title: 'African Themed Events & Festivals',
        image: '/images/heroimg.jpg',
        href: '/services/african-themed-events-festivals',
    },
    {
        title: 'Event Catering',
        image: '/images/heroimg.jpg',
        href: '/services/event-catering',
    },
    {
        title: 'Cultural Props Rentals',
        image: '/images/heroimg.jpg',
        href: '/services/cultural-props-rentals',
    },
    {
        title: 'Pop-up Markets',
        image: '/images/heroimg.jpg',
        href: '/services/pop-up-markets',
    },
    {
        title: 'Diversity Workshops',
        image: '/images/heroimg.jpg',
        href: '/services/diversity-workshops',
    },
]

function Services() {
    return (
        <section
            id='services'
            className='min-h-[65vh] max-w-screen-2xl mx-auto space-y-5 my-28 px-6 3xl:px-0 md:pb-20'>
            <Animate dir='up' duration={0.3}>
                <HeadingTitle
                    title='Services offered'
                    backTitle='Our Services'
                    text='Find a service that you need and we will deliver it to you'
                />
            </Animate>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
                <Animate
                    dir='up'
                    duration={0.6}
                    className='col-span-1 lg:col-span-2 bg-gray-100 w-full relative overflow-hidden shadow-sm rounded-3xl h-96 lg:h-full min-h-[400px]'>
                    <Image
                        src='https://cdn.sanity.io/images/jx89cb4b/production/2f04fdf4352f1c59890f209ad7e4a98789378743-2400x3600.jpg'
                        alt='Services visualization'
                        fill
                        className='object-cover object-center hover:scale-105 transition-transform duration-700'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                        placeholder='blur'
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=='
                    />
                </Animate>

                <div className='h-full w-full col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <ListWrapper
                        list={services}
                        keyExtractor={(srv) => srv.title}>
                        {(service, idx) => (
                            <Animate
                                dir='up'
                                duration={(idx / 2) * 0.5 + 0.5}
                                className='group col-span-1 min-h-80 relative flex items-end justify-start w-full h-full rounded-2xl overflow-hidden bg-brand-300'>
                                <div className='relative z-20 w-full h-full p-6 flex flex-col justify-start'>
                                    <Heading
                                        as='h3'
                                        className='text-xl font-bold max-w-[90%] leading-tight'>
                                        {service.title}
                                    </Heading>
                                </div>

                                <div className='absolute bottom-0 -right-2 bg-black dark:bg-slate-900 w-24 h-20 rounded-tl-[2.5rem] flex items-center justify-center z-20'>
                                    <Link href={service.href} passHref>
                                        <div className='bg-black dark:bg-slate-900 p-3 rounded-full text-white transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300'>
                                            <ArrowUpRight className='size-6' />
                                        </div>
                                    </Link>
                                </div>
                            </Animate>
                        )}
                    </ListWrapper>
                </div>
            </div>
        </section>
    )
}

export default Services
