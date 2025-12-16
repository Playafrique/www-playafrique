import React from 'react'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

type HeadingTitleProps = {
    text?: string
    title: string
    backTitle: string
}

function HeadingTitle({ backTitle, title, text }: HeadingTitleProps) {
    return (
        <div className=' h-full space-y-2 relative'>
            <Heading
                as='h2'
                className='capitalize font-semibold z-10 relative dark:text-gray-100'>
                {title}
            </Heading>
            <Heading
                as='h2'
                className='text-[70px] lg:text-[100px] font-bold font-script absolute z-0 -top-5 lg:-top-10 left-0 text-gray-200 dark:text-slate-800'>
                {backTitle}
            </Heading>
            {text ? (
                <Text className='max-w-lg dark:text-gray-100 relative z-10'>
                    {text}
                </Text>
            ) : null}
        </div>
    )
}

export default HeadingTitle
