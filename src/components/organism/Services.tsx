import React from 'react'
import Heading from '../atoms/Heading'
import HeadingTitle from '../molecules/HeadingTitle'
import ListWrapper from '../atoms/ListWrapper'
import Animate from '../atoms/Animate'

const services = [
    'African Themed Events & Festivals',
    'Event Catering',
    'Cultural Props Rentals',
    'Pop-up Markets',
    'Diversity Workshops',
]

function Services() {
    return (
        <section
            id='services'
            className='min-h-[65vh] max-w-screen-2xl mx-auto space-y-5 my-28 px-6 3xl:px-0 md:pb-20'>
            <Animate dir='up' duration={0.3}>
                <HeadingTitle
                    title='Services offered'
                    backTitle='Our Services'
                    text='Find a service that you need and we will deliver it to you'
                />
            </Animate>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4'>
                <Animate
                    dir='up'
                    duration={0.6}
                    className='col-span-1 lg:col-span-2 bg-white w-full relative overflow-hidden shadow-sm rounded-2xl border'>
                    <video
                        loop
                        muted
                        autoPlay
                        className='w-full h-full lg:h-96 xl:h-full object-cover object-center'>
                        <source src='/videos/services.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </Animate>

                <div className='h-full w-full col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <ListWrapper list={services} keyExtractor={(srv) => srv}>
                        {(service, idx) => (
                            <Animate
                                dir='up'
                                duration={(idx / 2) * 0.5 + 0.5}
                                className='group col-span-1 min-h-56 relative flex items-center justify-center w-full h-full px-2 rounded-2xl bg-orange-50 border'>
                                <Heading
                                    as='h3'
                                    className='relative text-center text-2xl z-20 font-bold'>
                                    {service}
                                </Heading>
                                <div className='absolute size-32 border border-gray-100 rounded-full bg-white z-10 shadow group-hover:shadow-lg transition-all' />
                                <div className='absolute size-40 border border-gray-200 rounded-full overflow-hidden opacity-50 '>
                                    <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-full opacity-50' />
                                </div>
                                <div className='w-full bg-[url("/images/pattern.png")] absolute bottom-0 bg-repeat bg-contain bg-center h-4 lg:h-6 opacity-50' />
                            </Animate>
                        )}
                    </ListWrapper>
                </div>
            </div>
        </section>
    )
}

export default Services
