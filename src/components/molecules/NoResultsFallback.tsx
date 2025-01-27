import React from 'react'
import { Frown } from 'lucide-react'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

type NoResultsFallbackProps = {
    text: string
    title: string
}

function NoResultsFallback({ title, text }: NoResultsFallbackProps) {
    return (
        <div className='flex flex-col items-center justify-center py-12 text-center w-full'>
            <Frown className='w-16 h-16 text-gray-400' />
            <Heading className='mt-4 text-xl font-semibold text-gray-700'>
                {title}
            </Heading>
            <Text className='mt-2 text-gray-500 max-w-xl'>{text}</Text>
        </div>
    )
}

export default NoResultsFallback
