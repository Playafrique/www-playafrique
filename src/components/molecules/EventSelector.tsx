'use client'

import React, { useCallback } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { useRouter, useSearchParams } from 'next/navigation'

import { EVENT_TYPE } from '@/lib/types'

function EventSelector({ events }: { events: EVENT_TYPE[] }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedEvent = searchParams.get('event') ?? ''

    const handleEventChange = useCallback(
        (eventTitle: string) => {
            const params = new URLSearchParams(searchParams.toString())

            if (eventTitle) {
                params.set('event', eventTitle)
            } else {
                params.delete('event')
            }

            router.push(`/gallery?${params.toString()}`, { scroll: false })
        },
        [router, searchParams],
    )

    const initialEvent = events[0]?.name ?? ''

    React.useEffect(() => {
        if (!selectedEvent && initialEvent) {
            handleEventChange(initialEvent)
        }
    }, [initialEvent, selectedEvent, handleEventChange])

    return (
        <Select value={selectedEvent} onValueChange={handleEventChange}>
            <SelectTrigger className='w-full h-14 text-base dark:text-gray-300'>
                <SelectValue placeholder='Select an event to view gallery' />
            </SelectTrigger>
            <SelectContent>
                {events.map((event) => (
                    <SelectItem
                        key={event.id}
                        value={event.name}
                        className='h-12'>
                        {event.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default EventSelector
