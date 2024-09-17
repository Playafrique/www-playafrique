import Heading from '@/components/atoms/Heading'
import ListWrapper from '@/components/atoms/ListWrapper'
import BreadCrumbs from '@/components/organism/BreadCrumbs'
import React from 'react'
import Text from '@/components/atoms/Text'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

function ProductPage({ params }: { params: { slug: string } }) {
    console.log(params.slug)
    return (
        <main className='min-h-screen py-20'>
            <div className='max-w-screen-2xl mx-auto space-y-6'>
                <BreadCrumbs />
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <div className='col-span-2 h-auto space-y-4'>
                        <div className='h-auto flex w-full gap-6'>
                            <div className='flex flex-col justify-start gap-4 items-start w-1/5 overflow-y-auto'>
                                <ListWrapper
                                    list={Array.from({ length: 3 }).map(
                                        (_, i) => i++,
                                    )}
                                    keyExtractor={(i) => i}>
                                    {(i) => (
                                        <div className='w-full h-48 object-cover bg-orange-100 rounded-md' />
                                    )}
                                </ListWrapper>
                            </div>
                            <div className='w-3/4 h-full min-h-[70vh] bg-orange-100 rounded-lg p-20'>
                                image
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 space-y-6'>
                        <div className='flex items-start justify-between gap-4'>
                            <div className='space-y-2'>
                                <Heading
                                    as='h3'
                                    className='font-semibold text-2xl'>
                                    Orange Citrus Oil
                                </Heading>
                                <Text className='lg:text-4xl font-semibold'>
                                    £65.00
                                </Text>
                            </div>
                            <Button
                                className='h-16 w-16 rounded-md'
                                aria-label='Add to basket'>
                                <ShoppingCart size={24} />
                            </Button>
                        </div>

                        <div className='space-y-2'>
                            <Heading as='h4' className='font-medium uppercase'>
                                Product Description
                            </Heading>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quasi, vitae quidem aut
                                adipisci iste molestiae nulla nisi in veniam
                                voluptates.
                            </Text>
                        </div>
                    </div>
                </div>
                <div className='min-h-96 bg-orange-100 p-4 rounded-lg'>
                    <div>
                        <Heading as='h4'>Product Reviews</Heading>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage
