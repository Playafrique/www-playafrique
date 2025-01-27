import Heading from '@/components/atoms/Heading'
import BreadCrumbs from '@/components/organism/BreadCrumbs'
import React from 'react'
import Text from '@/components/atoms/Text'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin } from 'lucide-react'
import { getEvent } from '@/lib/helpers'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params
    const event = (await getEvent(slug)) ?? null

    return {
        title: `Events | ${event?.title}`,
        description: `Events | ${event?.title}`,
    }
}

async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const event = await getEvent(slug)

    if (!event)
        return (
            <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6'>
                <Heading as='h1' className='text-5xl max-w-lg text-center'>
                    Event not found!!!
                </Heading>
                <Text className='text-center max-w-lg'>
                    We could not find the event you are looking for. Please
                    check the URL and try again.
                </Text>
                <Button asChild className='min-w-48'>
                    <Link href='/events'>Explore Events &rarr;</Link>
                </Button>
            </div>
        )
    return (
        <div className='min-h-screen py-32'>
            <div className='container mx-auto space-y-6'>
                <BreadCrumbs />
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative'>
                    <div className='col-span-1 rounded-xl overflow-hidden'>
                        <Image
                            width={600}
                            height={600}
                            alt={event.title}
                            src={event.mainImage}
                            className='w-full h-[40vh] object-cover object-center'
                        />
                        <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-6' />

                        <Button
                            asChild
                            className='w-full mt-4 bg-orange-500 text-base h-14 hover:bg-orange-500/80'>
                            <a href={`/event/${event.slug}`}>
                                Grab your tickets &rarr;
                            </a>
                        </Button>
                    </div>
                    <div className='col-span-2 space-y-6'>
                        <div className='space-y-4'>
                            <Heading as='h1' className='font-bold text-2xl'>
                                {event.title}
                            </Heading>

                            <div className=' space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <Calendar className='w-4 h-4' />
                                    <p className='text-sm'>
                                        {format(
                                            event.startDate,
                                            'dd MMM yyyy HH:mm a'
                                        )}
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MapPin className='w-4 h-4' />
                                    <p className='text-sm'>{event.location}</p>
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
                            <Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Autem libero ipsam quo dolor
                                sint veniam earum maxime vero, ex voluptatum
                                consequatur fugit itaque repellat recusandae
                                doloribus. Ut est amet voluptatem.
                            </Text>
                        </div>

                        <Separator />

                        <div className='space-y-2'>
                            <Heading
                                as='h4'
                                className='font-semibold lg:text-lg'>
                                Location Details
                            </Heading>
                            <div className='w-full' id='map'>
                                <iframe
                                    width='100%'
                                    height='500'
                                    src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Johannesburg,%20South%20Africa+(Cape%20Town%20Jazz%20Festival)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
                                    <a href='https://www.gps.ie/'>
                                        gps vehicle tracker
                                    </a>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
