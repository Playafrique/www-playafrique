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
    parent: ResolvingMetadata,
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
            <section className='w-full bg-green-200 dark:bg-green-950'>
                <div className='container grid items-center gap-6 md:grid-cols-2'>
                    <div className=' space-y-6 pt-20 md:py-48'>
                        <Heading
                            as='h1'
                            className='leading-tight tracking-tighter text-center md:text-left'>
                            {service?.name}
                        </Heading>
                        <Text className='max-w-[600px] text-muted-foreground text-center md:text-left'>
                            {service?.description}
                        </Text>
                        <div className='flex flex-col gap-4 sm:flex-row self-center lg:self-start pb-20 md:pb-0'>
                            <ScrollToComponent
                                size='lg'
                                className='max-w-full md:max-w-max'
                                elementId='contact-form'>
                                Make an Inquiry
                                <ArrowDown className='ml-2 h-4 w-4' />
                            </ScrollToComponent>
                        </div>
                    </div>
                    <div className='relative aspect-square overflow-hidden hidden md:block'>
                        <Animate
                            dir='up'
                            duration={0.6}
                            className='col-span-1 lg:col-span-2 w-full relative overflow-hidden shadow-sm min-h-[700px]'>
                            <Image
                                fill
                                src='https://cdn.sanity.io/images/jx89cb4b/production/d0753d8231921ad7068003454d76bcb8340b3013-2400x3600.jpg'
                                alt='Services visualization'
                                className='object-cover object-center hover:scale-105 transition-transform duration-700'
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                                placeholder='blur'
                                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=='
                            />
                        </Animate>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='w-full bg-gray-50/90 py-32 relative dark:bg-gray-950'>
                <div className='w-full bg-[url("/images/pattern.png")] bg-repeat bg-contain bg-center h-6 absolute top-0 left-0 right-0' />
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
                                className='rounded-lg border bg-card p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700'>
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
