import React from 'react'
import ListWrapper from '../atoms/ListWrapper'
import EventCard from './EventCard'
import { invoke } from '@/lib/invoke'
import { EVENT, EVENT_TYPE } from '@/lib/types'
import HeadingTitle from '../molecules/HeadingTitle'
import NoResultsFallback from '../molecules/NoResultsFallback'
import { cn } from '@/lib/utils'
import Animate from '../atoms/Animate'

async function AllEvents() {
    const { res, error } = await invoke<{ data: EVENT_TYPE[] }>({
        baseUrl: 'events',
        endpoint: '/events',
    })

    if (error) {
        throw new Error(error)
    }

    const allEvents =
        res?.data.filter((evt) => evt.status === 'published') ?? []

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
                                allEvents?.length === 0,
                        }
                    )}>
                    <ListWrapper
                        list={allEvents ?? []}
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
            </div>
        </section>
    )
}

export default AllEvents
