import { defineField, defineType } from 'sanity'

const creativeDisciplines = [
    'Digital Design & Tech',
    'Visual Media & Storytelling',
    'Content & Social Media',
    'Fashion & Personal Artistry',
    'Physical Craft & Fine Arts',
    'Writing & Marketing',
    'Culinary & Hospitality Arts',
    'Gaming & Animation',
    'Space & Environment',
    'Sound & Performance',
].map((discipline) => ({ title: discipline, value: discipline }))

const entityTypes = ['Individual', 'Company'].map((entity) => ({
    title: entity,
    value: entity.toLowerCase(),
}))

export const memberSchema = defineType({
    name: 'member',
    title: 'Member',
    description: 'A member of the Play Afrique community.',
    type: 'document',
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            description: 'The first name of the member.',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            description: 'The last name of the member.',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            description: 'A URL-friendly version of the title',
            type: 'slug',
            options: {
                source: 'firstName',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            description: 'The email of the member.',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            description: 'The phone number of the member.',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            description: 'A `short bio of the member.',
            type: 'text',
        }),
        defineField({
            name: 'entity',
            title: 'Entity',
            description: 'The entity of the member.',
            type: 'string',
            options: {
                list: entityTypes,
                layout: 'dropdown',
            },
        }),
        defineField({
            name: 'creativeDiscipline',
            title: 'Creative Discipline',
            description: 'The creative discipline of the member.',
            type: 'string',
            options: {
                list: creativeDisciplines,
                layout: 'dropdown',
            },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            description: 'The location of the member or company (optional)',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'firstName',
            slug: 'slug',
        },
        prepare(selection) {
            const { title, slug } = selection
            return {
                title,
                subtitle: slug ? `/${slug.current}` : 'No slug',
            }
        },
    },
})
