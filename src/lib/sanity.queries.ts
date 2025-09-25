import { groq } from 'next-sanity'

// Common field selections
const imageFields = `
  _key,
  asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip
    }
  },
  alt
`

const seoFields = `
  seo {
    metaTitle,
    metaDescription
  }
`
// Page queries
export const pageQueries = {
    bySlug: groq`
        *[_type == "page" && slug.current == $slug && published == true][0] {
            _id,
            title,
            slug,
            content,
            ${seoFields},
            _createdAt,
            _updatedAt
        }
    `,
}

// Site settings query
export const siteSettingsQuery = groq`
    *[_type == "siteSettings"][0] {
        _id,
        title,
        description,
        keywords,
        logo {${imageFields}},
        favicon {${imageFields}},
        ogImage {${imageFields}},
        socialMedia,
        contact,
        gtmId,
        gaId,
        _createdAt,
        _updatedAt
    }
`

// Gallery queries
export const galleryQueries = {
    // Get all events for gallery selector
    allEvents: groq`
        *[_type == "event"] | order(_createdAt desc) {
            _id,
            title,
            slug,
            gallery[0] {
                asset-> {
                    _id,
                    url
                }
            }
        }
    `,

    // Get event gallery by title
    eventGallery: groq`
        *[_type == "event" && title == $title][0] {
            title,
            gallery[] {
                _key,
                alt,
                asset-> {
                    _id,
                    url,
                    originalFilename,
                    metadata {
                        dimensions
                    }
                }
            }
        }
    `,
}
