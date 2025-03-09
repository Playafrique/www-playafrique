'use client'

import React, { useState } from 'react'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import Heading from '../atoms/Heading'
import { contactFormSchema, contactFormType } from '@/lib/validationschema'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import Animate from '../atoms/Animate'

export default function ContactForm() {
    const [isPending, startTransition] = useTransition()
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    // Initialize react-hook-form with zod resolver
    const form = useForm<contactFormType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            interest: '',
            message: '',
        },
    })

    const onSubmit = form.handleSubmit((data) => {
        startTransition(async () => {
            // create a delay to simulate a server response
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Here you would call your API route handler
            fetch('/api/contact-us', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(() => {
                    setIsSuccess(true)

                    setTimeout(() => {
                        setIsSuccess(false)
                    }, 5000)

                    // Reset form after successful submission
                    form.reset()
                })
                .catch((err) => {
                    setError(err.message)
                    setTimeout(() => setError(''), 5000)
                })
        })
    })

    return (
        <div className='w-full mx-auto'>
            <div className='mb-10'>
                <Heading
                    as='h2'
                    className='text-2xl lg:text-5xl font-bold text-gray-900 mb-2'>
                    We&apos;d love to hear from you,
                </Heading>
                <Heading
                    as='h2'
                    className='text-2xl lg:text-5xl font-bold text-gray-900 flex items-center'>
                    Get in touch <span className='ml-2'>👋</span>
                </Heading>
            </div>
            {isSuccess && (
                <Animate
                    dir='down'
                    duration={0.5}
                    className='my-6'
                    useExistAnimation={true}>
                    <Alert variant='default'>
                        <CheckCircle className='size-5 text-white' />

                        <AlertTitle className=' font-medium'>
                            Your message has been sent!
                        </AlertTitle>
                        <AlertDescription>
                            Thank you for your interest in Play Afrique. We will
                            get back to you shortly.
                        </AlertDescription>
                    </Alert>
                </Animate>
            )}

            {error && (
                <Animate dir='down' duration={0.5} className='my-6'>
                    <Alert
                        variant='default'
                        className='bg-red-50 text-red-800 border-red-200'>
                        <AlertTitle className='text-red-800 font-medium'>
                            Something went wrong!
                        </AlertTitle>
                        <AlertDescription className='text-red-700'>
                            {error}
                        </AlertDescription>
                    </Alert>
                </Animate>
            )}

            <Form {...form}>
                <form onSubmit={onSubmit} className='space-y-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem className='space-y-2'>
                                    <FormLabel className='text-base'>
                                        Your name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='Your Name'
                                            className='h-14 bg-gray-50'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='space-y-2'>
                                    <FormLabel className='text-base'>
                                        Your email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='email'
                                            placeholder='example@gmail.com'
                                            className='h-14 bg-gray-50'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name='interest'
                        render={({ field }) => (
                            <FormItem className='space-y-2'>
                                <FormLabel className='text-base'>
                                    What you are interested
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='h-14 bg-gray-50'>
                                            <SelectValue placeholder='Select your interest' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value='user-support'>
                                            User Support
                                        </SelectItem>
                                        <SelectItem value='themed-events'>
                                            African Themed Events & Festivals
                                        </SelectItem>
                                        <SelectItem value='event-catering'>
                                            Event Catering
                                        </SelectItem>
                                        <SelectItem value='cultural-props'>
                                            Cultural Props & Rentals
                                        </SelectItem>
                                        <SelectItem value='popup-markets'>
                                            Pop-up Markets
                                        </SelectItem>
                                        <SelectItem value='diversity-workshops'>
                                            Diversity Workshops
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem className='space-y-2'>
                                <FormLabel className='text-base'>
                                    Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder='Your Message Here ...'
                                        className='min-h-32 resize-y bg-gray-50'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type='submit'
                        className='h-14 px-6 bg-gray-900 hover:bg-gray-800 text-white w-full md:w-auto'
                        disabled={isPending}>
                        {isPending ? 'Sending...' : 'Send Message'}{' '}
                        {!isPending && (
                            <ArrowUpRight className='ml-2 h-5 w-5' />
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
