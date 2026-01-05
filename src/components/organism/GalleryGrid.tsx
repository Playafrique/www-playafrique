import { EVENT_GALLERY, EVENT_TYPE } from '@/lib/types'

import { Button } from '../ui/button'
import Heading from '../atoms/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from '../atoms/Text'
import { galleryQueries } from '@/lib/sanity.queries'
import { sanityFetch } from '@/lib/sanity'

async function GalleryGrid({
    currentEvent,
    isLimited = false,
}: {
    currentEvent: EVENT_TYPE
    isLimited?: boolean
}) {
    if (!currentEvent) {
        return (
            <div className='py-16 px-8 lg:px-16 bg-background'>
                <div className='max-w-7xl mx-auto text-center'>
                    <Heading className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
                        No Event Selected
                    </Heading>
                    <Text className='text-muted-foreground mb-12'>
                        Please select an event to view its gallery.
                    </Text>
                </div>
            </div>
        )
    }
    const resp = await sanityFetch<EVENT_GALLERY>(
        galleryQueries.eventGallery,
        { title: currentEvent.name || '' },
        { revalidate: currentEvent?.name ? 300 : false },
    )

    const LIMIT = 6

    if (!resp?.gallery) {
        return (
            <div className='text-left text-lg text-foreground'>
                Gallery coming soon.. 🤗
            </div>
        )
    }

    if (isLimited && resp?.gallery.length > LIMIT) {
        resp.gallery = resp.gallery.slice(0, LIMIT)
    }

    return (
        <div>
            {currentEvent && (
                <div className='bg-background'>
                    {resp?.gallery.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {resp.gallery.map((image, index) => (
                                <div
                                    key={index}
                                    className='overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300'>
                                    <div className='aspect-[4/3] overflow-hidden'>
                                        <Image
                                            src={
                                                image.asset?.url ||
                                                '/placeholder.svg'
                                            }
                                            alt={
                                                image.alt ||
                                                `Gallery Image ${index + 1}`
                                            }
                                            width={
                                                image.asset?.metadata
                                                    ?.dimensions?.width || 400
                                            }
                                            height={
                                                image.asset?.metadata
                                                    ?.dimensions?.height || 300
                                            }
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='px-8 lg:px-16 bg-background'>
                            <div className='max-w-7xl mx-auto text-center'>
                                <Text className='text-lg lg:text-xl text-foreground mb-4'>
                                    Check Later. The gallery for this event will
                                    be added soon. 🙂
                                </Text>
                            </div>
                        </div>
                    )}

                    {isLimited && resp.gallery.length > 0 && (
                        <Button asChild>
                            <Link
                                href={`/gallery?event=${encodeURIComponent(
                                    currentEvent.name || '',
                                )}`}
                                className='mx-auto mt-8'>
                                View Full Gallery
                            </Link>
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}

export default GalleryGrid
