import Animate from '@/components/atoms/Animate'
import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import ScrollToComponent from '@/components/molecules/ScrollToComponent'
import ContactForm from '@/components/organism/ContactForm'
import { getServicePageContent, SLUG } from '@/lib/helpers'
import { ArrowDown } from 'lucide-react'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
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

    if (!service) {
        redirect('/')
    }

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <section className='w-full relative bg-transparent md:bg-green-200 dark:bg-green-950 grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-0'>
                <div className='absolute inset-0 bg-gradient-to-t from-white/60 via-white/60 to-transparent md:hidden z-10' />

                <div className='container relative z-10 flex flex-col justify-center h-full mx-auto md:max-w-2xl px-6 md:px-12 py-20 md:py-48'>
                    <div className='space-y-6'>
                        <Heading
                            as='h1'
                            className='leading-tight tracking-tighter text-center md:text-left text-4xl md:text-6xl text-gray-900 md:dark:text-white font-bold'>
                            {service?.name}
                        </Heading>
                        <Text className='max-w-[600px] text-muted-foreground text-center md:text-left text-lg md:text-xl mx-auto md:mx-0'>
                            {service?.description}
                        </Text>
                        <div className='flex flex-col gap-4 sm:flex-row justify-center md:justify-start pt-8 md:pt-0'>
                            <ScrollToComponent
                                size='lg'
                                className='w-full md:w-auto'
                                elementId='contact-form'>
                                Make an Inquiry
                                <ArrowDown className='ml-2 h-4 w-4' />
                            </ScrollToComponent>
                        </div>
                    </div>
                </div>

                <div className='absolute inset-0 md:relative md:inset-auto h-full w-full overflow-hidden'>
                    <Animate
                        dir='up'
                        duration={0.6}
                        className='w-full h-full relative'>
                        <Image
                            fill
                            src={service.image.src}
                            alt={service.image.alt}
                            className='object-cover object-center'
                            sizes='(max-width: 768px) 100vw, 50vw'
                            placeholder='blur'
                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=='
                            priority
                        />
                    </Animate>
                </div>
            </section>

            {/* Features Section */}
            <section className='w-full bg-gray-50/90 py-32 relative dark:bg-gray-950'>
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
