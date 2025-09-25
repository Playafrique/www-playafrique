import { EVENT_TYPE } from '@/lib/types'
import GalleryGrid from './GalleryGrid'
import React from 'react'
import { groq } from 'next-sanity'
import { sanityFetch } from '@/lib/sanity'

type GalleryImage = {
    _key?: string
    alt?: string
    asset?: {
        _ref?: string
        url?: string
        originalFilename?: string
    }
}

type SanityEventGalleryResult = {
    gallery?: GalleryImage[]
}

async function fetchEventGalleryByTitle(title: string) {
    const query = groq`*[_type == "event" && title == $title][0]{
        gallery[]{
            _key,
            alt,
            asset->{
                _id,
                url,
                originalFilename
            }
        }
    }`

    const data = await sanityFetch<SanityEventGalleryResult | null>(
        query,
        { title },
        { revalidate: 300, tags: ['event', 'gallery'] },
    )
    return data?.gallery ?? []
}

async function Gallery({ event }: { event: EVENT_TYPE }) {
    if (!event?.name) return null

    const images = await fetchEventGalleryByTitle(event.name)

    if (!images || images.length === 0) return null

    return <GalleryGrid currentEvent={event} />
}

export default Gallery
