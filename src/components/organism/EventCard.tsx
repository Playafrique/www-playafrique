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
                'h-auto rounded-xl overflow-hidden relative shadow-sm',
                {
                    'bg-white text-black': variant === 'default',
                    'bg-black text-white': variant === 'dark',
                }
            )}>
            <Image
                src={event.images.thumbnail}
                alt={event.name}
                width={1000}
                height={600}
                className='w-full h-72 object-cover object-left'
            />
            <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-3' />
            <div className=' flex flex-col items-start justify-end p-4 pb-8'>
                <div className='flex flex-col items-start justify-between gap-2 relative w-full'>
                    <Heading
                        as='h3'
                        className='font-semibold text-xl capitalize text-current'>
                        {event.name}
                    </Heading>
                    <div className=' space-y-2'>
                        <div className='flex items-center gap-2'>
                            <Calendar className='w-4 h-4' />
                            <p className='text-sm'>
                                {format(
                                    event.next_occurrence_date.date,
                                    'dd MMM yyyy HH:mm a'
                                )}
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MapPin className='w-4 h-4' />
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
                                'bg-transparent text-gray-600 border-gray-600 absolute rounded-full right-0 bottom-0 w-12 h-12 hover:bg-black hover:text-white transition-all ease-in-out duration-200',
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
