import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { SanityImage } from '@/lib/sanity.types'

interface PortableTextImageProps {
    value: SanityImage & {
        _type: 'image'
    }
}

const PortableTextImage = ({ value }: PortableTextImageProps) => {
    if (!value?.asset) return null

    return (
        <div className='my-8'>
            <Image
                src={urlFor(value).width(800).height(600).url()}
                alt={value.alt || ''}
                width={800}
                height={600}
                className='rounded-lg object-cover w-full'
            />
            {value.alt && (
                <p className='text-sm text-muted-foreground mt-2 text-center italic'>
                    {value.alt}
                </p>
            )}
        </div>
    )
}

const components: PortableTextComponents = {
    types: {
        image: PortableTextImage,
    },
    block: {
        h1: ({ children }) => (
            <h1 className='text-4xl font-bold mb-6 text-foreground'>
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className='text-3xl font-semibold mb-4 text-foreground'>
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className='text-2xl font-semibold mb-3 text-foreground'>
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className='text-xl font-semibold mb-2 text-foreground'>
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className='text-muted-foreground mb-4 leading-relaxed'>
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className='border-l-4 border-primary pl-4 my-6 italic text-muted-foreground'>
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className='font-semibold text-foreground'>
                {children}
            </strong>
        ),
        em: ({ children }) => <em className='italic'>{children}</em>,
        link: ({ children, value }) => (
            <a
                href={value?.href}
                target={value?.blank ? '_blank' : '_self'}
                rel={value?.blank ? 'noopener noreferrer' : undefined}
                className='text-primary hover:underline'>
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className='list-disc pl-6 mb-4 space-y-2'>{children}</ul>
        ),
        number: ({ children }) => (
            <ol className='list-decimal pl-6 mb-4 space-y-2'>{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className='text-muted-foreground'>{children}</li>
        ),
        number: ({ children }) => (
            <li className='text-muted-foreground'>{children}</li>
        ),
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
        <div className={className}>
            <PortableText value={content} components={components} />
        </div>
    )
}
