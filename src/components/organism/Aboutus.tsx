import React from 'react'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'
import Image from 'next/image'
import HeadingTitle from '../molecules/HeadingTitle'
import { Rocket, Target } from 'lucide-react'
import Animate from '../atoms/Animate'

function Aboutus() {
    return (
        <section
            id='aboutus'
            className='min-h-[65vh] max-w-screen-2xl mx-auto space-y-5 lg:my-28 px-6 3xl:px-0'>
            <Animate dir='up' duration={0.3}>
                <HeadingTitle
                    title='Our Story'
                    backTitle='About Us'
                    text='Find out about Play Afrique, our mission and vision'
                />
            </Animate>
            <Animate dir='up' duration={0.5}>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6'>
                    <div className='col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-y-6'>
                        <Card className='col-span-1 lg:col-span-3 bg-white w-full relative overflow-hidden'>
                            <CardHeader>
                                <Heading
                                    as='h3'
                                    className='text-2xl lg:text-4xl font-bold tracking-wide leading-tight max-w-2xl'>
                                    Creating Events That Inspire and Making Them
                                    Effortlessly Accessible to You.
                                </Heading>
                            </CardHeader>
                            <CardContent>
                                <Text className='text-gray-700 text-base max-w-2xl leading-relaxed'>
                                    Play Afrique CIC was created to change a
                                    familiar story, one where African and
                                    Afro-diasporic creatives often work in
                                    isolation, with limited platforms to share
                                    their talent or connect with others who
                                    understand their vision. Across the UK, we
                                    saw photographers, chefs, designers,
                                    writers, artists, and performers doing
                                    exceptional work, yet doing it alone. Their
                                    creativity was rich, but the opportunities
                                    to collaborate, showcase, and grow were far
                                    too few. Play Afrique CIC exists to bring
                                    these creatives together.
                                </Text>
                                <CardFooter />
                            </CardContent>
                        </Card>

                        <div className='col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            <Card className='rounded-xl shadow-sm bg-white border relative overflow-hidden'>
                                <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-5 absolute bottom-0 left-0' />

                                <CardHeader className='flex flex-row items-center gap-3'>
                                    <Rocket className='h-10 w-10 text-orange-500' />
                                    <CardTitle className='text-2xl lg:text-3xl font-bold font-body'>
                                        Mission
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Text className='text-gray-600'>
                                        To empower African creatives by
                                        providing accessible platforms for
                                        collaboration, cultural expression,
                                        skills development, and economic growth.
                                        We exist to break barriers, amplify
                                        voices, and ensure that African
                                        creativity is represented and valued
                                        within mainstream spaces across the UK
                                    </Text>
                                </CardContent>
                                <CardFooter />
                            </Card>
                            <Card className='rounded-xl shadow-sm bg-white border relative overflow-hidden'>
                                <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-5 absolute bottom-0 left-0' />

                                <CardHeader className='flex flex-row items-center gap-3'>
                                    <Target className='h-10 w-10 text-teal-500' />
                                    <CardTitle className='text-2xl lg:text-3xl font-bold font-body'>
                                        Vision
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Text className='text-gray-600'>
                                        A thriving creative ecosystem where
                                        African talent is celebrated, creatives
                                        are supported to excel, and cultural
                                        narratives are preserved, shared, and
                                        seen. We envision a future where African
                                        creatives have equitable opportunities,
                                        global visibility, and a connected
                                        community that grows together.
                                    </Text>
                                </CardContent>
                                <CardFooter />
                            </Card>
                        </div>
                    </div>

                    <div className='col-span-1 lg:col-span-2 rounded-xl shadow-sm overflow-hidden h-full'>
                        <Image
                            alt='hero'
                            width={300}
                            height={400}
                            src='https://cdn.sanity.io/images/jx89cb4b/production/33fb953c86e6b7ec77d4c9b5a73aac13a5e5b59f-2400x3600.jpg'
                            className='w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700'
                        />
                    </div>
                </div>
            </Animate>
        </section>
    )
}

export default Aboutus
