import { Calendar, MapPin, MoveUpRight } from 'lucide-react'

import { Button } from '../ui/button'
import { EVENT } from '@/lib/types'
import Heading from '../atoms/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { format } from 'date-fns'

type FeaturedCardProps = {
    event: EVENT
}

function FeaturedCard({ event }: FeaturedCardProps) {
    return (
        <div className='min-h-96 max-h-[70vh] bg-black rounded-xl overflow-hidden relative'>
            <Image
                src={event.images.thumbnail}
                alt={event.name}
                width={1000}
                height={600}
                className='w-full h-3/4 object-cover object-left'
            />
            <div className='absolute inset-0 bg-black/20 flex flex-col items-start justify-end p-4 pb-8'>
                <div className='flex flex-col items-start justify-between gap-2 relative w-full'>
                    <Heading
                        as='h3'
                        className='font-semibold text-white text-xl capitalize'>
                        {event.name}
                    </Heading>
                    <div className='text-gray-300 space-y-2'>
                        <div className='flex items-center gap-2'>
                            <MapPin className='w-4 h-4 text-white' />
                            <p className='text-sm'>{event.venue.name}</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Calendar className='w-4 h-4 text-white' />
                            <p className='text-sm'>
                                {format(
                                    new Date(event.next_occurrence_date.date),
                                    'dd MMM yyyy HH:mm a',
                                )}
                            </p>
                        </div>
                    </div>
                    <Button
                        asChild
                        size='icon'
                        title={`View ${event.name}`}
                        variant='outline'
                        className='bg-transparent text-white border-white absolute rounded-full right-0 bottom-0 w-12 h-12'>
                        <Link href={event.url}>
                            <MoveUpRight className='w-4 h-4' />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard
