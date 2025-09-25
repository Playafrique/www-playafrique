import { Calendar, MapPin } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'

import BreadCrumbs from '@/components/organism/BreadCrumbs'
import { Button } from '@/components/ui/button'
import { EVENT_TYPE } from '@/lib/types'
import GalleryComponent from '@/components/organism/Gallery'
import GalleryGrid from '@/components/organism/GalleryGrid'
import GalleryWrapper from '@/components/organism/GalleryWrapper'
import Heading from '@/components/atoms/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import Text from '@/components/atoms/Text'
import { invoke } from '@/lib/invoke'
import { isPast } from 'date-fns'

type MetaProps = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const generateMetadata = async (
    { params }: MetaProps,
    parent: ResolvingMetadata,
): Promise<Metadata> => {
    const { id } = await params

    const { res: event } = await invoke<EVENT_TYPE>({
        baseUrl: 'events',
        endpoint: `/events/${id}`,
    })

    // remove tags on the description
    const plainDescription =
        event?.description.replace(/<[^>]*>/g, '') ?? 'Event description'

    const previousImages = (await parent).openGraph?.images ?? []

    return {
        title: `Events | ${event?.name ?? ''}`,
        description: event?.description ?? '',
        openGraph: {
            title: event?.name,
            description: plainDescription,
            images: [
                {
                    url: event?.images?.thumbnail ?? '',
                    alt: event?.name,
                },
                ...previousImages,
            ],
            publishedTime: event?.start?.formatted ?? '',
        },
    }
}

async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const { res: event, error } = await invoke<EVENT_TYPE>({
        baseUrl: 'events',
        endpoint: `/events/${id}`,
    })

    if (!event || error)
        return (
            <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6'>
                <Heading as='h1' className='text-5xl max-w-lg text-center'>
                    Event not found!!!
                </Heading>
                {!error ? (
                    <Text className='text-center max-w-lg'>
                        We could not find the event you are looking for. Please
                        check the URL and try again.
                    </Text>
                ) : (
                    <Text className='text-base text-center'>
                        {error} <br /> The above issue occured. Please try again
                        or wait as our team resolves the issue.
                    </Text>
                )}
                <Button asChild className='min-w-48'>
                    <Link href='/#events'>Explore Events &rarr;</Link>
                </Button>
            </div>
        )

    return (
        <div className='min-h-screen py-32'>
            <div className='container mx-auto space-y-6'>
                <BreadCrumbs />
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-12 relative'>
                    <div className='col-span-1'>
                        <div className='rounded-xl overflow-hidden shadow-xl'>
                            <Image
                                width={600}
                                height={600}
                                alt={event?.name ?? ''}
                                src={event?.images?.thumbnail ?? ''}
                                className='w-full h-[40vh] object-cover object-center'
                            />
                            <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-6' />

                            <Button
                                asChild
                                disabled={
                                    event?.tickets_available === 'false' ||
                                    isPast(new Date(event?.end?.date))
                                }
                                className='w-full mt-4 bg-orange-500 text-base h-14 hover:bg-orange-500/80 disabled:opacity-50 rounded-t-none'>
                                {isPast(new Date(event?.end?.date)) ? (
                                    <span>See what you missed below</span>
                                ) : (
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href={event?.checkout_url}>
                                        {event?.tickets_available === 'false'
                                            ? 'Join the waitlist'
                                            : (event?.call_to_action ??
                                              'Grab your tickets')}{' '}
                                        &rarr;
                                    </a>
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className='col-span-2 space-y-6'>
                        <div className='space-y-4'>
                            <Heading as='h1' className='font-bold text-2xl'>
                                {event?.name ?? ''}
                            </Heading>

                            <div className=' space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <Calendar className='w-4 h-4' />
                                    <p className='text-sm'>
                                        {event?.start?.formatted ?? 'TBD'} to{' '}
                                        {event?.end?.formatted &&
                                            `${event?.end?.formatted}`}
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MapPin className='w-4 h-4' />
                                    <p className='text-sm'>
                                        {event?.venue?.name}{' '}
                                        {event?.venue?.postal_code}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div className='space-y-2'>
                            <Heading
                                as='h4'
                                className='font-semibold lg:text-lg'>
                                About the Event
                            </Heading>
                            <div
                                className='prose font-sans'
                                dangerouslySetInnerHTML={{
                                    __html: event?.description,
                                }}></div>
                        </div>

                        <Separator />

                        <div className='space-y-8'>
                            <Heading as='h3'>Re-live the moment</Heading>
                            <GalleryGrid currentEvent={event} isLimited />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
