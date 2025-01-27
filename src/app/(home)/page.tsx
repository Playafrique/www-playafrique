import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import ErrorHandlerWrapper from '@/components/molecules/ErrorHandlerWrapper'
import Aboutus from '@/components/organism/Aboutus'
import AllEvents from '@/components/organism/AllEvents'
import UpcomingList from '@/components/organism/UpcomingList'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

async function Home() {
    return (
        <main className='min-h-screen bg-gray-50 pb-16'>
            <section id='hero' className='h-[65vh] w-full relative'>
                <div className='flex flex-col items-center justify-center gap-8 absolute inset-0 backdrop-blur-sm text-white z-20 w-full py-16 h-full bg-black/50 px-6 2xl:px-0'>
                    <Heading
                        as='h1'
                        className='text-2xl lg:text-5xl max-w-5xl text-center text-white'>
                        Experience the Pulse of Africa: Discover Events That
                        Inspire
                    </Heading>
                    <Text className='text-center max-w-xl text-gray-100'>
                        From vibrant festivals to intimate gatherings, Play
                        Afrique connects you to the heart of African culture and
                        global happenings.
                    </Text>
                    <Button
                        asChild
                        variant='ghost'
                        className='bg-orange-500/80 backdrop-blur-lg text-white hover:bg-orange-500 hover:text-white min-w-48'>
                        <Link href='/#events'>Explore Events &rarr;</Link>
                    </Button>
                </div>
                <div className='w-full h-full'>
                    <Image
                        width={1000}
                        height={600}
                        src='/images/heroimg2.jpg'
                        alt='Photo by Rahul Pandit on Pexels'
                        className='w-full h-full object-cover object-center'
                        priority
                    />
                </div>
            </section>
            <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-6' />

            <Suspense fallback={<div>Loading...</div>}>
                <ErrorHandlerWrapper>
                    <UpcomingList />
                </ErrorHandlerWrapper>
            </Suspense>
            <Aboutus />
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorHandlerWrapper>
                    <AllEvents />
                </ErrorHandlerWrapper>
            </Suspense>
        </main>
    )
}

export default Home
