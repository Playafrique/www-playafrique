import { defineField, defineType } from 'sanity'

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
            name: 'bio',
            title: 'Bio',
            description: 'A short bio of the member.',
            type: 'text',
            validation: (Rule) => Rule.required(),
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
