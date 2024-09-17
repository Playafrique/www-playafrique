import Heading from '@/components/atoms/Heading'
import ListWrapper from '@/components/atoms/ListWrapper'
import Text from '@/components/atoms/Text'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <main className='min-h-screen bg-brand-light'>
            {/* Hero */}
            <section id='hero' className='h-[50vh] w-full bg-orange-100'>
                <div className='flex flex-col items-center justify-center h-full gap-4'>
                    <Heading as='h1' className='text-5xl max-w-lg text-center'>
                        Welcome to the Essential Oils Store
                    </Heading>
                    <Text className='text-center max-w-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi, vitae quidem aut adipisci iste molestiae nulla
                        nisi in veniam voluptates.
                    </Text>
                    <Button className='rounded-full'>Get Started</Button>
                </div>
            </section>
            {/* Featured */}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-auto min-h-96'>
                <div className='bg-orange-50 p-10 h-full col-span-1 border-r border-r-gray-300 space-y-2'>
                    <Heading as='h4' className='uppercase font-semibold '>
                        Featured
                    </Heading>
                    <Text className='max-w-sm'>
                        We have made a selection of the what our customers love
                        the most.
                    </Text>
                </div>
                <div className='bg-orange-50 col-span-3 grid grid-cols-4 h-full gap-y-4'>
                    <ListWrapper
                        list={Array.from({ length: 4 }).map((_, i) => i)}
                        keyExtractor={(item) => item}>
                        {(item) => (
                            <Link
                                href='/product/[slug]'
                                as={`/product/${item}`}>
                                <div className='relative bg-orange-50 flex flex-col items-center justify-between border-r border-r-gray-300 h-96 '>
                                    <div className='absolute top-0 left-0 w-full'>
                                        {/* badges come here */}
                                    </div>

                                    <div className='flex-1 w-full bg-orange-100 p-10 h-3/4'>
                                        The image {item}
                                    </div>

                                    <div className='w-full px-8 flex items-center justify-between h-1/4'>
                                        <div>
                                            <Heading
                                                as='h5'
                                                className='font-normal'>
                                                Orange Citrus Oil
                                            </Heading>
                                            <Text className='font-semibold'>
                                                £65
                                            </Text>
                                        </div>
                                        <Button
                                            className='rounded-sm'
                                            size='icon'>
                                            <ShoppingCart size={20} />
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </ListWrapper>
                </div>
            </section>
            {/* All products */}
            <section className='h-auto min-h-96 p-10 pt-32'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className=' py-10 h-full col-span-1 space-y-2'>
                        <Heading as='h3' className='uppercase font-semibold '>
                            Find all oils
                        </Heading>
                        <Text className='max-w-sm'>
                            We have made a selection of the what our customers
                            love the most.
                        </Text>
                    </div>
                    <div className=' col-span-3 grid grid-cols-4 gap-6 h-full gap-y-4'>
                        <ListWrapper
                            list={Array.from({ length: 12 }).map((_, i) => i)}
                            keyExtractor={(item) => item}>
                            {(item) => (
                                <Link
                                    href='/product/[slug]'
                                    as={`/product/${item}`}>
                                    <div className='relative bg-orange-50 flex flex-col items-center justify-between h-96 shadow-sm rounded-md '>
                                        <div className='absolute h-1/5'>
                                            {/* badges come here */}
                                        </div>

                                        <div className='flex-1 w-full bg-orange-100 p-10 h-3/4'>
                                            The image {item}
                                        </div>

                                        <div className='w-full px-8 flex items-center justify-between h-1/4'>
                                            <div>
                                                <Heading
                                                    as='h5'
                                                    className='font-normal'>
                                                    Orange Citrus Oil
                                                </Heading>
                                                <Text className='font-semibold'>
                                                    £65
                                                </Text>
                                            </div>
                                            <Button
                                                className='rounded-sm'
                                                size='icon'>
                                                <ShoppingCart size={20} />
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </ListWrapper>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className='py-40'>
                <div className='max-w-screen-2xl mx-auto h-full space-y-6'>
                    <div className='space-y-4'>
                        <Heading
                            as='h3'
                            className='uppercase font-semibold text-center w-full '>
                            Testimonials
                        </Heading>
                        <Text className='max-w-sm text-center w-full mx-auto'>
                            We have made a selection of the what our customers
                            love the most.
                        </Text>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-orange-50 h-96 rounded-md shadow-sm'></div>
                        <div className='bg-orange-50 h-96 rounded-md shadow-sm'></div>
                        <div className='bg-orange-50 h-96 rounded-md shadow-sm'></div>
                    </div>
                </div>
            </section>
        </main>
    )
}
