import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import Logo from '@/components/molecules/Logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
    return (
        <div className='w-full h-screen bg-orange-50/50 flex flex-col items-center justify-center'>
            <div className='container p-40 shadow-sm border bg-white rounded-2xl min-h-96 gap-12 flex flex-col items-center'>
                <Logo isHome={false} />
                <Image
                    width={600}
                    height={600}
                    alt='404 not found'
                    src='/images/404location.svg'
                    className='w-auto object-cover object-center h-52'
                />
                <div className='flex flex-col items-center justify-center gap-3'>
                    <Heading className='text-7xl'>404 Not Found!!</Heading>
                    <Text>
                        The page or resource, you are looking for does not
                        exist.
                    </Text>
                    <Button
                        asChild
                        className='min-w-48 rounded-md bg-orange-500'>
                        <Link href='/'>Explore Other Events &rarr;</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
