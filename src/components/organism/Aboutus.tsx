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
            className='min-h-[65vh] max-w-screen-2xl mx-auto space-y-5 my-28 px-6 3xl:px-0'>
            <Animate dir='up' duration={0.3}>
                <HeadingTitle
                    title='Our Story'
                    backTitle='About Us'
                    text='Find out about Play Afrique, our mission and vision'
                />
            </Animate>
            <Animate dir='up' duration={0.5}>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4'>
                    <Card className='col-span-1 lg:col-span-2 bg-white w-full relative overflow-hidden'>
                        <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-6 absolute bottom-0 left-0' />
                        <CardHeader>
                            <Heading className='text-2xl lg:text-4xl font-bold tracking-wide leading-tight'>
                                Creating Events That Inspire and Making Them
                                Effortlessly Accessible to You.
                            </Heading>
                        </CardHeader>
                        <CardContent>
                            <Text className='text-gray-700 text-base max-w-2xl leading-relaxed'>
                                Welcome to Play Afrique, where we deliver a
                                unique African experience grounded in rich
                                history and culture. At Play Afrique, we
                                celebrate and support African talents by
                                providing a platform for expression through art
                                exhibitions, live music, dance performances,
                                folk plays, and pop-up markets. Play
                                Afrique&apos;s mission is to become a vibrant
                                hub for African cuisine, entertainment, fashion,
                                and arts. We invite visitors worldwide to
                                immerse themselves in Africa&apos;s authentic
                                flavours and rhythms. Our commitment extends
                                beyond showcasing the continent&apos;s culture
                                to fostering the growth of emerging start-ups
                                within our community. Join us in experiencing
                                the true essence of Africa.
                            </Text>
                            <CardFooter />
                        </CardContent>
                    </Card>

                    <div className='h-full w-full col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className='col-span-1 lg:col-span-2 rounded-xl shadow-sm overflow-hidden h-96'>
                            <Image
                                alt='hero'
                                width={300}
                                height={400}
                                src='/images/heroimg.jpg'
                                className='w-full h-full object-cover object-center'
                            />
                        </div>

                        <Card className='rounded-xl shadow-sm bg-white border'>
                            <CardHeader className='flex flex-row items-center gap-3'>
                                <Rocket className='h-10 w-10 text-orange-500' />
                                <CardTitle className='text-2xl lg:text-3xl font-bold font-body'>
                                    Mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Text className='text-gray-600'>
                                    Our mission is to provide authentic African
                                    experiences through immersive events,
                                    exhibitions, and performances. We are
                                    dedicated to promoting African culture,
                                    supporting emerging artists and start-ups,
                                    and creating a dynamic and inclusive
                                    community where creativity and tradition
                                    thrive.
                                </Text>
                            </CardContent>
                            <CardFooter />
                        </Card>
                        <Card className='rounded-xl shadow-sm bg-white border'>
                            <CardHeader className='flex flex-row items-center gap-3'>
                                <Target className='h-10 w-10 text-teal-500' />
                                <CardTitle className='text-2xl lg:text-3xl font-bold font-body'>
                                    Vision
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Text className='text-gray-600'>
                                    To become the premier hub for celebrating
                                    and experiencing the rich diversity of
                                    African culture, arts, cuisine, and
                                    entertainment, bringing the vibrant spirit
                                    of Africa to the world while empowering and
                                    showcasing local talents.
                                </Text>
                            </CardContent>
                            <CardFooter />
                        </Card>
                    </div>
                </div>
            </Animate>
        </section>
    )
}

export default Aboutus
