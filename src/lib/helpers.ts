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
        () => Math.random() - 0.5,
    )

    return { featuredEvents, shuffledEvents }
}

export const getEvent = async (slug: string) => {
    const event = events.find((event) => event.slug === slug)
    if (!event) return null

    const updatedEvent = { ...event, startDate: new Date(event.startDate) }
    return updatedEvent
}

export const SERVICES_CONTENT = [
    {
        name: 'African Themed Events & Festivals',
        slug: 'african-themed-events-festivals',
        href: '/services/african-themed-events-festivals',
        description:
            'Immerse yourself in vibrant African culture with tailored events showcasing traditional music, dance, and storytelling.',
        image: {
            src: 'https://cdn.sanity.io/images/jx89cb4b/production/d6a36a2284f2c40f88df3683214a70d74c22a37c-1638x2048.png',
            alt: 'African Themed Events & Festivals',
        },
    },
    {
        name: 'Event Catering',
        slug: 'event-catering',
        href: '/services/event-catering',
        description:
            'Delight in authentic African cuisine crafted to elevate your special occasions, from intimate gatherings to grand celebrations.',
        image: {
            src: 'https://cdn.sanity.io/images/jx89cb4b/production/686b8aac253c27e4459677f7be5c9a14911bdc83-2048x1364.png',
            alt: 'Event Catering',
        },
    },
    {
        name: 'Cultural Props Rentals',
        slug: 'cultural-props-rentals',
        href: '/services/cultural-props-rentals',
        description:
            'Enhance your events with unique African props and decor, adding an authentic and striking cultural touch.',
        image: {
            src: 'https://cdn.sanity.io/images/jx89cb4b/production/79226cf76cd89a26fead366b593c23ef6ed447b4-1638x2048.png',
            alt: 'Cultural Props Rentals',
        },
    },
    {
        name: 'Popup Markets',
        slug: 'popup-markets',
        href: '/services/popup-markets',
        description:
            'Experience a lively marketplace featuring African-inspired goods, crafts, and culinary delights.',
        image: {
            src: 'https://cdn.sanity.io/images/jx89cb4b/production/c5f3044982cee912fc2f7f3147a053883129aa9b-1638x2048.png',
            alt: 'Popup Markets',
        },
    },
    {
        name: 'Diversity Workshops',
        slug: 'diversity-workshops',
        href: '/services/diversity-workshops',
        description:
            'Engage in interactive workshops fostering cultural awareness, inclusion, and appreciation of African heritage.',
        image: {
            src: 'https://cdn.sanity.io/images/jx89cb4b/production/88634f66d8c232a8df96ff69d3d7dde2f1bdfd10-1638x2048.png',
            alt: 'Diversity Workshops',
        },
    },
]

export type SERVICE = (typeof SERVICES_CONTENT)[number]
export type SLUG = SERVICE['slug']

export function getServicePageContent(slug: SLUG) {
    const content = SERVICES_CONTENT.find((srv) => srv.slug === slug)
    if (!content) return null
    return content
}
