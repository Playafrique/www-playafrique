import Animate from '@/components/atoms/Animate'
import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import ScrollToComponent from '@/components/molecules/ScrollToComponent'
import ContactForm from '@/components/organism/ContactForm'
import { getServicePageContent, SLUG } from '@/lib/helpers'
import { ArrowDown } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import React from 'react'

type MetaProps = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const generateMetadata = async (
    { params }: MetaProps,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const { slug } = await params
    const service = getServicePageContent(slug as SLUG)

    const previousImages = (await parent).openGraph?.images ?? []

    return {
        title: `Services | ${service?.name ?? ''}`,
        description: service?.description ?? '',
        openGraph: {
            title: service?.name,
            description: service?.description,
            images: [
                {
                    url: service?.image.src ?? '',
                    alt: service?.image.alt,
                },
                ...previousImages,
            ],
        },
    }
}

type PageProps = {
    params: Promise<{ slug: string }>
}

async function ServicePage({ params }: PageProps) {
    const { slug } = await params
    const service = getServicePageContent(slug as SLUG)

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <section className='w-full'>
                <div className='container grid items-center gap-6 pt-6 md:grid-cols-2'>
                    <div className=' space-y-6 pt-20 md:py-48'>
                        <Heading
                            as='h1'
                            className='leading-tight tracking-tighter text-center md:text-left'>
                            {service?.name}
                        </Heading>
                        <Text className='max-w-[600px] text-muted-foreground text-center md:text-left'>
                            {service?.description}
                        </Text>
                        <div className='flex flex-col gap-4 sm:flex-row self-center md:self-start'>
                            <ScrollToComponent
                                size='lg'
                                className='max-w-full md:max-w-max'
                                elementId='contact-form'>
                                Make an Inquiry
                                <ArrowDown className='ml-2 h-4 w-4' />
                            </ScrollToComponent>
                        </div>
                    </div>
                    <div className='relative aspect-auto lg:aspect-video overflow-hidden'>
                        {/* <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 rounded-lg'></div> */}
                        <Animate
                            dir='up'
                            duration={0.6}
                            className='col-span-1 lg:col-span-2 bg-white w-full relative overflow-hidden shadow-sm rounded-2xl border'>
                            <video
                                loop
                                muted
                                autoPlay
                                className='w-full h-full xl:h-full object-cover object-center'>
                                <source
                                    src='/videos/services.mp4'
                                    type='video/mp4'
                                />
                                Your browser does not support the video tag.
                            </video>
                        </Animate>
                    </div>
                </div>
                <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-6' />
            </section>

            {/* Features Section */}
            <section className='w-full bg-gray-50/90 py-32'>
                <div className='container'>
                    <Heading as='h2' className='mb-8 text-center text-3xl'>
                        Why Choose Our Services
                    </Heading>
                    <div className='grid gap-6 md:grid-cols-3'>
                        {[
                            {
                                title: 'Expert Guidance',
                                description:
                                    'Our team of professionals brings years of industry experience to every project.',
                            },
                            {
                                title: 'Tailored Solutions',
                                description:
                                    'We create customized strategies that address your specific business needs.',
                            },
                            {
                                title: 'Proven Results',
                                description:
                                    'Our track record speaks for itself with successful outcomes for our clients.',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className='rounded-lg border bg-card p-6 shadow-sm'>
                                <Heading
                                    as='h3'
                                    className='mb-2 text-xl font-semibold'>
                                    {feature.title}
                                </Heading>
                                <Text className='text-muted-foreground'>
                                    {feature.description}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Form Section */}
            <section id='enquiry-form' className='w-full bg-background py-16'>
                <div className='container max-w-4xl'>
                    <div className='mb-10 text-center'>
                        <Heading as='h2' className='text-3xl font-bold'>
                            Request a Consultation
                        </Heading>
                        <Text className='mt-2 text-muted-foreground'>
                            Fill out the form below and our team will get back
                            to you within 24 hours.
                        </Text>
                    </div>

                    <ContactForm defaultValues={{ interest: slug }} hideTitle />
                </div>
            </section>
        </main>
    )
}

export default ServicePage
