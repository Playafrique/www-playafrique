import Animate from '../atoms/Animate'
import { EVENT_TYPE } from '@/lib/types'
import EventCard from './EventCard'
import HeadingTitle from '../molecules/HeadingTitle'
import ListWrapper from '../atoms/ListWrapper'
import NoResultsFallback from '../molecules/NoResultsFallback'
import React from 'react'
import { cn } from '@/lib/utils'
import { invoke } from '@/lib/invoke'

function FilterEvents(events: EVENT_TYPE[]) {
    const currentDate = new Date()

    const upcomingEvents = events.filter((event) => {
        if (event.start && event.end) {
            const startDate = new Date(event.start.formatted)
            const endDate = new Date(event.end.formatted)
            return endDate >= currentDate
        } else if (event.start) {
            const startDate = new Date(event.start.formatted)
            return startDate >= currentDate
        }
        return false
    })

    const pastEvents = events.filter((event) => {
        if (event.start && event.end) {
            const endDate = new Date(event.end.formatted)
            return endDate < currentDate
        } else if (event.start) {
            const startDate = new Date(event.start.formatted)
            return startDate < currentDate
        }
        return false
    })

    // Sort upcoming events by start date ascending
    upcomingEvents.sort((a, b) => {
        const dateA = new Date(a.start?.formatted || '')
        const dateB = new Date(b.start?.formatted || '')
        return dateA.getTime() - dateB.getTime()
    })

    // Sort past events by end date descending
    pastEvents.sort((a, b) => {
        const dateA = new Date(a.end?.formatted || a.start?.formatted || '')
        const dateB = new Date(b.end?.formatted || b.start?.formatted || '')
        return dateB.getTime() - dateA.getTime()
    })

    return { upcomingEvents, pastEvents }
}

async function AllEvents() {
    const { res, error } = await invoke<{ data: EVENT_TYPE[] }>({
        baseUrl: 'events',
        endpoint: '/events',
    })

    const activeStatuses = ['published', 'close_sales']

    if (error) {
        throw new Error(error)
    }

    const events = FilterEvents(
        res?.data.filter((evt) => {
            return activeStatuses.includes(evt.status) && evt.hidden != 'true'
        }) ?? [],
    )

    return (
        <section
            id='events'
            className='h-auto min-h-[30rem] pt-20 md:py-28 md:pt-28'>
            <div className='max-w-screen-2xl mx-auto space-y-6 px-6 3xl:px-0'>
                <Animate dir='up' duration={0.6}>
                    <HeadingTitle
                        title='Explore Events'
                        backTitle='Explore Events'
                        text='Explore events that inspire and connect you to the heart of African culture.'
                    />
                </Animate>
                <div
                    className={cn(
                        'col-span-3 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 h-full gap-y-4',
                        {
                            'md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1':
                                events.pastEvents?.length === 0,
                        },
                    )}>
                    <ListWrapper
                        list={events.pastEvents ?? []}
                        renderFallback={() => (
                            <NoResultsFallback
                                title='No Events found'
                                text='Event results not currently available'
                            />
                        )}
                        keyExtractor={(evt) => evt.id}>
                        {(event) => (
                            <Animate
                                dir='up'
                                duration={0.8}
                                useObserver={false}
                                initiallyVisible={true}>
                                <EventCard event={event} />
                            </Animate>
                        )}
                    </ListWrapper>
                </div>
                {/* <pre>{JSON.stringify(events.pastEvents, null, 2)}</pre> */}
            </div>
        </section>
    )
}

export default AllEvents
