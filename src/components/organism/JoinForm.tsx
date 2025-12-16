'use client'

import React, { useState } from 'react'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import Heading from '@components/atoms/Heading'
import { joinFormSchema, joinFormType } from '@/lib/validationschema'
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert'
import Animate from '@components/atoms/Animate'

type Props = {
    defaultValues?: Partial<joinFormType>
    hideTitle?: boolean
}

export default function JoinForm({ defaultValues = {}, hideTitle }: Props) {
    const [isPending, startTransition] = useTransition()
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    // Initialize react-hook-form with zod resolver
    const form = useForm<joinFormType>({
        resolver: zodResolver(joinFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            bio: '',
            ...defaultValues,
        },
    })

    const [successMessage, setSuccessMessage] = useState('')

    const onSubmit = form.handleSubmit((data) => {
        startTransition(async () => {
            try {
                const response = await fetch('/api/join', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                })

                const result = await response.json()

                if (!response.ok) {
                    throw new Error(result.message || 'Something went wrong')
                }

                setSuccessMessage(result.message)
                setIsSuccess(true)
                form.reset()

                setTimeout(() => {
                    setIsSuccess(false)
                    setSuccessMessage('')
                }, 5000)
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : 'Something went wrong',
                )
                setTimeout(() => setError(''), 5000)
            }
        })
    })

    return (
        <div id='join-form' className='w-full mx-auto'>
            {hideTitle ? null : (
                <div className='mb-10'>
                    <Heading
                        as='h2'
                        className='text-xl lg:text-3xl font-bold text-gray-900 dark:text-white flex items-center'>
                        Join our community
                    </Heading>
                </div>
            )}
            {isSuccess && (
                <Animate
                    dir='down'
                    duration={0.5}
                    className='my-6'
                    useExistAnimation={true}>
                    <Alert variant='default'>
                        <CheckCircle className='size-5 text-white' />
                        <AlertTitle className=' font-medium'>
                            {successMessage || 'Application Received!'}
                        </AlertTitle>
                        <AlertDescription>
                            Thank you for your interest in joining Play Afrique.
                            We will review your details and get back to you
                            shortly.
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
                <form
                    onSubmit={onSubmit}
                    className='space-y-8 disabled:opacity-50'
                    aria-disabled={isPending}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <FormField
                            control={form.control}
                            name='firstName'
                            render={({ field }) => (
                                <FormItem className='space-y-2'>
                                    <FormLabel className='text-base'>
                                        First Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='First Name'
                                            className='h-14 bg-gray-50'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='lastName'
                            render={({ field }) => (
                                <FormItem className='space-y-2'>
                                    <FormLabel className='text-base'>
                                        Last Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='Last Name'
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
                        name='email'
                        render={({ field }) => (
                            <FormItem className='space-y-2'>
                                <FormLabel className='text-base'>
                                    Email
                                </FormLabel>
                                <FormDescription>
                                    We&apos;ll never share your email with
                                    anyone else.
                                </FormDescription>
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

                    <FormField
                        control={form.control}
                        name='bio'
                        render={({ field }) => (
                            <FormItem className='space-y-2'>
                                <FormLabel className='text-base'>Bio</FormLabel>
                                <FormDescription>
                                    Tell us a little bit about yourself
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder='Bio'
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
                        {isPending ? 'Sending...' : 'Submit'}{' '}
                        {!isPending && (
                            <ArrowUpRight className='ml-2 h-5 w-5' />
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
