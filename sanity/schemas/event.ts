import { defineField, defineType } from 'sanity'

import EventSelector from '../components/EventSelector'
import { mediaAssetSource } from 'sanity-plugin-media'

export const eventSchema = defineType({
    name: 'event',
    title: 'Event',
    description: 'An event gallery showcasing activities that happened.',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description:
                'The title of the event. Only those events that have taken place.',
            type: 'string',
            validation: (Rule) => Rule.required(),
            components: {
                input: EventSelector,
            },
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            description: 'A URL-friendly version of the title',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'services',
            title: 'Service type',
            description: 'The service type the event falls under',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'African Themed Events & Festivals',
                        value: 'african-themed-events-festivals',
                    },
                    {
                        title: 'Event Catering',
                        value: 'event-catering',
                    },
                    {
                        title: 'Cultural Props Rentals',
                        value: 'cultural-props-rentals',
                    },
                    { title: 'Popup Markets', value: 'popup-markets' },
                    {
                        title: 'Diversity Workshops',
                        value: 'diversity-workshops',
                    },
                ],
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            description: 'A collection of images showcasing the event',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true, sources: [mediaAssetSource] },
                    fields: [
                        defineField({
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                            description:
                                'Describe the image for screen readers',
                            options: { search: { weight: 1 } },
                        }),
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
            media: 'gallery',
        },
        prepare(selection) {
            const { title, slug, media } = selection
            return {
                title,
                subtitle: slug ? `/${slug.current}` : 'No slug',
                media: media[0],
            }
        },
    },
})
