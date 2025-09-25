import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className='my-8'>
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Image'}
                        width={800}
                        height={600}
                        className='rounded-lg'
                    />
                    {value.alt && (
                        <p className='text-sm text-gray-600 mt-2 text-center'>
                            {value.alt}
                        </p>
                    )}
                </div>
            )
        },
    },
    block: {
        h1: ({ children }) => (
            <h1 className='text-4xl font-bold mb-6 text-gray-900'>
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className='text-3xl font-semibold mb-5 text-gray-900'>
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className='text-xl font-semibold mb-3 text-gray-900'>
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className='mb-4 text-gray-700 leading-relaxed'>{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className='border-l-4 border-gray-300 pl-4 my-6 italic text-gray-600'>
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className='font-semibold text-gray-900'>{children}</strong>
        ),
        em: ({ children }) => <em className='italic'>{children}</em>,
        link: ({ children, value }) => (
            <a
                href={value?.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 underline'>
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className='list-disc list-inside mb-4 space-y-2 text-gray-700'>
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className='list-decimal list-inside mb-4 space-y-2 text-gray-700'>
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className='ml-4'>{children}</li>,
        number: ({ children }) => <li className='ml-4'>{children}</li>,
    },
}

interface CustomPortableTextProps {
    content: PortableTextBlock[]
    className?: string
}

export default function CustomPortableText({
    content,
    className = '',
}: CustomPortableTextProps) {
    return (
        <div className={`prose prose-lg max-w-none ${className}`}>
            <PortableText value={content} components={components} />
        </div>
    )
}
