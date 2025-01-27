import events from './testData.json'

export const getEvents = async () => {
    // wait for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // fix the date format
    const fixedEvents = events.map((event) => ({
        ...event,
        startDate: new Date(event.startDate),
    }))

    // return featured events and shuffle the rest
    const featuredEvents = fixedEvents.filter((event) => event.featured)
    const restEvents = fixedEvents.filter((event) => !event.featured)
    const shuffledEvents = [...featuredEvents, ...restEvents].sort(
        () => Math.random() - 0.5
    )

    return { featuredEvents, shuffledEvents }
}

export const getEvent = async (slug: string) => {
    const event = events.find((event) => event.slug === slug)
    if (!event) return null

    const updatedEvent = { ...event, startDate: new Date(event.startDate) }
    return updatedEvent
}
