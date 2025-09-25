import Animate from '@/components/atoms/Animate'
import { EVENT_TYPE } from '@/lib/types'
import EventSelector from '@/components/molecules/EventSelector'
import GalleryWrapper from '@/components/organism/GalleryWrapper'
import Heading from '@/components/atoms/Heading'
import Image from 'next/image'
import React from 'react'
import Text from '@/components/atoms/Text'
import { invoke } from '@/lib/invoke'

// type Params = Promise<{ event?: string }>

async function GalleryPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { res, error } = await invoke<{ data: EVENT_TYPE[] }>({
        baseUrl: 'events',
        endpoint: '/events',
    })

    const { event } = await searchParams

    console.log('Gallery Page Params:', event)

    const activeStatuses = ['published', 'close_sales']

    if (error) {
        throw new Error(error)
    }

    const events =
        res?.data.filter((evt) => {
            return activeStatuses.includes(evt.status) && evt.hidden != 'true'
        }) ?? []

    return (
        <div className='min-h-screen font-sans'>
            <section id='hero' className='h-[45vh] w-full relative mt-20'>
                <div className='flex flex-col items-start justify-center gap-8 absolute inset-0 backdrop-blur-sm text-black z-20 w-full h-full bg-gradient-to-r from-white via-white/80 to-transparent px-6 2xl:px-0'>
                    <div className=' w-full max-w-screen-xl mx-auto space-y-6'>
                        <Animate dir='up' duration={0.3} className='space-y-6'>
                            <Heading
                                as='h1'
                                className='text-2xl lg:text-5xl max-w-5xl text-black'>
                                Event Gallery
                            </Heading>
                            <Text className='max-w-xl text-gray-800'>
                                Relive the magic of our events through stunning
                                photos. Select an event below to explore the
                                gallery.
                            </Text>
                        </Animate>
                        <Animate dir='up' duration={0.5}>
                            <div className='rounded-lg max-w-xl'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                                    Select an event
                                </h3>
                                <EventSelector events={events || []} />
                            </div>
                        </Animate>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <Image
                        width={1000}
                        height={600}
                        src='/images/heroimg2.jpg'
                        alt='Photo by Rahul Pandit on Pexels'
                        className='w-full h-full object-cover object-center'
                        priority
                    />
                </div>
            </section>

            <GalleryWrapper
                events={events || []}
                selectedEvent={event || null}
            />
        </div>
    )
}

export default GalleryPage
