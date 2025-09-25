import { Calendar, MapPin, MoveUpRight } from 'lucide-react'

import { Button } from '../ui/button'
import { EVENT_TYPE } from '@/lib/types'
import Heading from '../atoms/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

type EventCardProps = {
    event: EVENT_TYPE
    variant?: 'default' | 'dark'
}

function EventCard({ event, variant = 'default' }: EventCardProps) {
    const activeStatuses = ['published', 'close_sales']
    return (
        <div
            className={cn(
                'h-auto flex flex-col justify-between rounded-xl overflow-hidden relative shadow-sm',
                {
                    'bg-white text-black': variant === 'default',
                    'bg-black text-white': variant === 'dark',
                },
            )}>
            <div>
                <Image
                    width={1000}
                    height={1000}
                    alt={event.name}
                    src={event.images.thumbnail ?? '/images/fallbackimg.png'}
                    className='w-full h-60 object-cover object-left'
                />
                <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-4' />
                <div className='p-2 px-4 space-y-2'>
                    <Heading
                        as='h3'
                        className='font-bold text-xl capitalize text-current'>
                        {event.name}
                    </Heading>
                </div>
            </div>
            <div className='flex flex-col items-start justify-end px-4 pb-4'>
                <div className='flex items-center justify-between gap-3 w-full '>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <Calendar className='w-5 h-5' />
                            <span className='text-sm'>
                                {event?.start?.date
                                    ? format(
                                          new Date(event?.start.date),
                                          'dd MMM yyyy',
                                      )
                                    : 'TBA'}
                            </span>
                            <span>@</span>
                            <span className='text-sm'>{event?.end?.time}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MapPin className='w-5 h-5' />
                            <p className='text-sm'>{event.venue.name}</p>
                        </div>
                    </div>

                    {activeStatuses.includes(event?.status) ? (
                        <Button
                            asChild
                            size='icon'
                            title={`View ${event.name}`}
                            variant='outline'
                            className={cn(
                                'bg-transparent text-gray-600 border-gray-600  rounded-full w-12 h-12 hover:bg-black hover:text-white transition-all ease-in-out duration-200',
                                {
                                    'text-gray-300 border-gray-300 hover:bg-white hover:text-black':
                                        variant === 'dark',
                                },
                            )}>
                            <Link href={`/event/${event?.id}`} passHref>
                                <MoveUpRight className='w-4 h-4' />
                            </Link>
                        </Button>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default EventCard
