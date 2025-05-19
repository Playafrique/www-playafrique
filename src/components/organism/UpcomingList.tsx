import React from 'react'
import HeadingTitle from '../molecules/HeadingTitle'
import ListWrapper from '../atoms/ListWrapper'
import { invoke } from '@/lib/invoke'
import { EVENT_TYPE } from '@/lib/types'
import EventCard from './EventCard'
import NoResultsFallback from '../molecules/NoResultsFallback'
import { cn } from '@/lib/utils'
import Animate from '../atoms/Animate'

export const revalidate = 60 // revalidate every 60 seconds

async function UpcomingList() {
    const { res, error } = await invoke<{ data: EVENT_TYPE[] }>({
        baseUrl: 'events',
        endpoint: '/events?limit=4',
    })

    if (error) {
        throw new Error(error)
    }

    const upcomingEvents =
        res?.data.filter((evt) => evt.status === 'draft') ?? []

    return (
        <section
            id='upcoming-events'
            className='space-y-4 h-auto min-h-96 py-28 max-w-screen-2xl mx-auto px-6 3xl:px-0'>
            <Animate dir='up' duration={0.3}>
                <HeadingTitle
                    backTitle='Upcoming Events'
                    title='Upcoming Events'
                    text='Find some of our upcoming events below.'
                />
            </Animate>
            <div
                className={cn(
                    'col-span-3 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 h-full gap-y-4',
                    {
                        'md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1':
                            upcomingEvents.length === 0,
                    }
                )}>
                <ListWrapper
                    list={upcomingEvents}
                    renderFallback={() => (
                        <Animate dir='up' duration={0.5}>
                            <NoResultsFallback
                                title='No upcoming results'
                                text='Event results not currently available'
                            />
                        </Animate>
                    )}
                    keyExtractor={(evt) => evt?.id}>
                    {(event) => (
                        <Animate dir='up' duration={0.5}>
                            <EventCard variant='dark' event={event} />
                        </Animate>
                    )}
                </ListWrapper>
            </div>
        </section>
    )
}

export default UpcomingList
