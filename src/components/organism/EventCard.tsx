import Image from 'next/image'
import React from 'react'
import Heading from '../atoms/Heading'
import { Calendar, MapPin, MoveUpRight } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from '../ui/button'
import Link from 'next/link'
import { EVENT } from '@/lib/types'
import { cn } from '@/lib/utils'

type EventCardProps = {
    event: EVENT
    variant?: 'default' | 'dark'
}

function EventCard({ event, variant = 'default' }: EventCardProps) {
    return (
        <div
            className={cn(
                'h-auto flex flex-col justify-between rounded-xl overflow-hidden relative shadow-sm',
                {
                    'bg-white text-black': variant === 'default',
                    'bg-black text-white': variant === 'dark',
                }
            )}>
            <div>
                <Image
                    width={1000}
                    height={1000}
                    alt={event.name}
                    src={event.images.thumbnail}
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
                                {event?.next_occurrence_date
                                    ? format(
                                          event.next_occurrence_date.date,
                                          'dd MMM yyyy'
                                      )
                                    : 'TBA'}
                            </span>
                            <span>@</span>
                            <span className='text-sm'>
                                {event?.next_occurrence_date
                                    ? format(
                                          event.next_occurrence_date?.date,
                                          'HH:mm a'
                                      )
                                    : 'TBA'}
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MapPin className='w-5 h-5' />
                            <p className='text-sm'>{event.venue.name}</p>
                        </div>
                    </div>

                    {event?.status === 'published' ? (
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
                                }
                            )}>
                            <Link href={event.url}>
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
