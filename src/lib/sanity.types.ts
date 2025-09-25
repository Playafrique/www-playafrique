import { PortableTextBlock } from '@portabletext/types'
import { SanityImageObject } from '@sanity/image-url/lib/types/types'

export interface SanityImage extends SanityImageObject {
    alt?: string
}

export interface Event {
    _id: string
    _type: 'event'
    title: string
    slug: {
        current: string
    }
    description?: string
    content?: PortableTextBlock[]
    featuredImage?: SanityImage
    date: string
    endDate?: string
    location?: string
    price?: number
    currency?: string
    ticketUrl?: string
    category?: string
    featured: boolean
    published: boolean
    seo?: {
        metaTitle?: string
        metaDescription?: string
    }
    _createdAt: string
    _updatedAt: string
}

export interface Service {
    _id: string
    _type: 'service'
    title: string
    slug: {
        current: string
    }
    description?: string
    content?: PortableTextBlock[]
    featuredImage?: SanityImage
    icon?: SanityImage
    category?: string
    featured: boolean
    published: boolean
    order?: number
    seo?: {
        metaTitle?: string
        metaDescription?: string
    }
    _createdAt: string
    _updatedAt: string
}

export interface Page {
    _id: string
    _type: 'page'
    title: string
    slug: {
        current: string
    }
    content?: PortableTextBlock[]
    seo?: {
        metaTitle?: string
        metaDescription?: string
    }
    published: boolean
    _createdAt: string
    _updatedAt: string
}

export interface SiteSettings {
    _id: string
    _type: 'siteSettings'
    title: string
    description?: string
    keywords?: string[]
    logo?: SanityImage
    favicon?: SanityImage
    ogImage?: SanityImage
    socialMedia?: {
        facebook?: string
        instagram?: string
        tiktok?: string
        twitter?: string
        youtube?: string
    }
    contact?: {
        email?: string
        phone?: string
        address?: string
    }
    gtmId?: string
    gaId?: string
    _createdAt: string
    _updatedAt: string
}

export type NavigationLinkType =
    | 'internal'
    | 'external'
    | 'event'
    | 'service'
    | 'custom'

export interface NavigationSubItem {
    title: string
    linkType: NavigationLinkType
    internalLink?: {
        slug: {
            current: string
        }
    }
    eventLink?: {
        slug: {
            current: string
        }
    }
    serviceLink?: {
        slug: {
            current: string
        }
    }
    externalUrl?: string
    customPath?: string
    openInNewTab?: boolean
    description?: string
    icon?: string
    order?: number
}

export interface NavigationItem {
    title: string
    linkType: NavigationLinkType
    internalLink?: {
        slug: {
            current: string
        }
    }
    eventLink?: {
        slug: {
            current: string
        }
    }
    serviceLink?: {
        slug: {
            current: string
        }
    }
    externalUrl?: string
    customPath?: string
    openInNewTab?: boolean
    description?: string
    icon?: string
    badge?: string
    order?: number
    subItems?: NavigationSubItem[]
}

export interface Navigation {
    _id: string
    _type: 'navigation'
    title: string
    identifier: {
        current: string
    }
    items: NavigationItem[]
    published: boolean
    _createdAt: string
    _updatedAt: string
}
