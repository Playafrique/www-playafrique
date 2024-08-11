import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'gallery',
    type: "object",
    title: 'Gallery',
    fields:[
        defineField({
            name: "images",
            title: "Images",
            type: 'array',
            of: [{type: 'image', options: {hotspot: true}, fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Describe the image for screen readers',
                    options: { search: { weight: 1 } }
                })
            ]}],
            options: {
                layout: 'grid'
            }
        })
    ],
    preview: {
        select: {
            images: 'images',
            image: 'images.0'
        },
        prepare(selection) {
            const {images, image} = selection
            return {
                title: `Gallery with ${images.length} images`,
                subtitle: `Alt text: ${image.alt}`,
                media: image
            }
        }
    }
})
