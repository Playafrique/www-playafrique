import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: "document",
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name of the category',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'The slug for the category',
            validation: Rule => Rule.required(),
            options: {
                source: 'name'
            }
        }), 
    ],
})