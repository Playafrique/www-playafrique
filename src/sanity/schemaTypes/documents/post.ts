import { defineType, defineField } from 'sanity'
import { StickyNote } from 'lucide-react'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: StickyNote,
    groups: [
        {
            title: "SEO",
            name: "seo",
        },
        {
            title: "Post Information",
            name: "postInformation",
            default: true
        },
        {
            title: "Actions",
            name: "actions"
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "The post's title",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: "The post's slug",
            validation: Rule => Rule.required(),
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            description: "The post's main image to be displayed on the post page",
            type: 'image',
            options:{
                hotspot: true
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: "A short description of the post",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'contentBlock',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'category'}]}],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            description: "The date the post was published",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            group: 'seo',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            slug: 'slug'
        },
        prepare(selection) {
            const { title, media, slug } = selection
            return {
                title: title,
                media: media,
                subtitle: `/${slug.current}`
            }
        }
    }
})