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

const SERVICES_CONTENT = {
    'african-themed-events-festivals': {
        name: 'African Themed Events & Festivals',
        slug: 'african-themed-events-festivals',
        description:
            'Immerse yourself in vibrant African culture with tailored events showcasing traditional music, dance, and storytelling.',
        image: {
            src: '',
            alt: '',
        },
    },
    'event-catering': {
        name: 'Event Catering',
        slug: 'event-catering',
        description:
            'Delight in authentic African cuisine crafted to elevate your special occasions, from intimate gatherings to grand celebrations.',
        image: {
            src: '',
            alt: '',
        },
    },
    'cultural-props-rentals': {
        name: 'Cultural Props Rentals',
        slug: 'cultural-props-rentals',
        description:
            'Enhance your events with unique African props and decor, adding an authentic and striking cultural touch.',
        image: {
            src: '',
            alt: '',
        },
    },
    'popup-markets': {
        name: 'Popup Markets',
        slug: 'popup-markets',
        description:
            'Experience a lively marketplace featuring African-inspired goods, crafts, and culinary delights.',
        image: {
            src: '',
            alt: '',
        },
    },
    'diversity-workshops': {
        name: 'Diversity Workshops',
        slug: 'diversity-workshops',
        description:
            'Engage in interactive workshops fostering cultural awareness, inclusion, and appreciation of African heritage.',
        image: {
            src: '',
            alt: '',
        },
    },
}

export type SLUG =
    | 'african-themed-events-festivals'
    | 'event-catering'
    | 'cultural-props-rentals'
    | 'popup-markets'
    | 'diversity-workshops'

export function getServicePageContent(slug: SLUG) {
    const content = SERVICES_CONTENT[slug]
    if (!content) return null
    return content
}
