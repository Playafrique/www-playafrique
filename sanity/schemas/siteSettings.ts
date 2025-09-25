import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Site Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
        }),
        defineField({
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
        defineField({
            name: 'socialMedia',
            title: 'Social Media Links',
            type: 'object',
            fields: [
                {
                    name: 'facebook',
                    title: 'Facebook URL',
                    type: 'url',
                },
                {
                    name: 'instagram',
                    title: 'Instagram URL',
                    type: 'url',
                },
                {
                    name: 'tiktok',
                    title: 'TikTok URL',
                    type: 'url',
                },
                {
                    name: 'twitter',
                    title: 'Twitter URL',
                    type: 'url',
                },
                {
                    name: 'youtube',
                    title: 'YouTube URL',
                    type: 'url',
                },
            ],
        }),
        defineField({
            name: 'contact',
            title: 'Contact Information',
            type: 'object',
            fields: [
                {
                    name: 'email',
                    title: 'Contact Email',
                    type: 'email',
                },
                {
                    name: 'phone',
                    title: 'Phone Number',
                    type: 'string',
                },
                {
                    name: 'address',
                    title: 'Address',
                    type: 'text',
                    rows: 3,
                },
            ],
        }),
        defineField({
            name: 'gtmId',
            title: 'Google Tag Manager ID',
            type: 'string',
        }),
        defineField({
            name: 'gaId',
            title: 'Google Analytics ID',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'logo',
        },
    },
})
