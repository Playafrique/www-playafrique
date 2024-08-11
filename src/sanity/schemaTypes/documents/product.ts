import {defineType, defineField } from 'sanity'
import { Box } from 'lucide-react'
import { title } from 'process'

export default defineType({
    name: 'product',
    title: 'Product',
    icon: Box,
    type: 'document',
    groups: [
        {
            title: "SEO",
            name: "seo",
        },
        {
            title: "Product Information",
            name: "productInformation",
            default: true
        },
        {
            title: "Actions",
            name: "actions"
        },
        
    ],
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            group: 'productInformation',
            description: "The product's name",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'productInformation',
            description: "The product's slug",
            validation: Rule => Rule.required(),
            options: {
                source: 'name'
            }
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            group: 'productInformation',
            description: "The product's main image to be displayed on the product page",
            type: 'image',
            options:{
                hotspot: true
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'productGallery',
            title: 'Product Gallery',
            group: 'productInformation',
            description: "More images of the product. These will be displayed in a gallery on the product page",
            type: 'gallery',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            group: 'productInformation',
            description: "The product's description",
            type: 'contentBlock',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'price',
            title: 'Price',
            group: 'productInformation',
            description: "The product's price",
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'instock',
            title: 'In Stock',
            group: 'productInformation',
            description: "The total number of this product in stock",
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            group: 'productInformation',
            description: "The categories this product belongs to",
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'category'}]
                }
            ],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            group: 'actions',
            description: "The discount applied to this product in percentage (%) - this is optional",
            type: 'number',
            initialValue: 0
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            group: 'actions',
            description: "Is this product featured?",
            type: 'boolean'
        }),
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            group: 'seo',
            description: "The SEO title for this product",
            type: 'string'
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            group: 'seo',
            description: "The keywords for this product",
            type: 'string'
        }),
    ],
    preview: {
        select: {
            title: 'name',
            image: 'mainImage',
            slug: 'slug'
        },
        prepare(selection) {
            const { title, image, slug } = selection
            return {
                title,
                media: image,
                subtitle: `/${slug.current}`
            }
        }
    }
})