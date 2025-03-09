import Animate from '@/components/atoms/Animate'
import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import ErrorHandlerWrapper from '@/components/molecules/ErrorHandlerWrapper'
import HeadingTitle from '@/components/molecules/HeadingTitle'
import Aboutus from '@/components/organism/Aboutus'
import AllEvents from '@/components/organism/AllEvents'
import ContactForm from '@/components/organism/ContactForm'
import Services from '@/components/organism/Services'
import UpcomingList from '@/components/organism/UpcomingList'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

async function Home() {
    return (
        <main className='min-h-screen bg-gray-50'>
            <section id='hero' className='h-[65vh] w-full relative'>
                <div className='flex flex-col items-center justify-center gap-8 absolute inset-0 backdrop-blur-sm text-white z-20 w-full py-16 h-full bg-black/50 px-6 2xl:px-0'>
                    <Animate dir='up' duration={0.3} className='space-y-6'>
                        <Heading
                            as='h1'
                            className='text-2xl lg:text-5xl max-w-5xl text-center text-white'>
                            Experience the Pulse of Africa: Discover Events That
                            Inspire
                        </Heading>
                        <Text className='text-center max-w-xl text-gray-100 mx-auto'>
                            From vibrant festivals to intimate gatherings, Play
                            Afrique connects you to the heart of African culture
                            and global happenings.
                        </Text>
                    </Animate>
                    <Animate dir='up' duration={0.5}>
                        <Button
                            asChild
                            variant='ghost'
                            className='bg-orange-500/80 backdrop-blur-lg text-white hover:bg-orange-500 hover:text-white min-w-48'>
                            <Link href='/#events'>Explore Events &rarr;</Link>
                        </Button>
                    </Animate>
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
                    <AllEvents />
                </ErrorHandlerWrapper>
            </Suspense>
            <Services />
            <Aboutus />
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorHandlerWrapper>
                    <UpcomingList />
                </ErrorHandlerWrapper>
            </Suspense>
            <section
                id='contact-us'
                className='h-auto min-h-[30rem] py-20 md:py-28 lg:py-40 bg-white'>
                <div className='max-w-screen-2xl mx-auto space-y-6 px-6 3xl:px-0'>
                    <Animate dir='up' duration={0.2}>
                        <HeadingTitle
                            title='Contact Us'
                            backTitle='Contact Us'
                            text='Contact us and get in touch with us'
                        />
                    </Animate>

                    <Animate dir='up' duration={0.5} className='w-full '>
                        <ContactForm />
                    </Animate>
                </div>
            </section>
        </main>
    )
}

export default Home
