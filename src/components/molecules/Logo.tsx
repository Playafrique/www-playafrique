import React from 'react'
import Link from 'next/link'
import Heading from '../atoms/Heading'
import { cn } from '@/lib/utils'
import Image from 'next/image'

function Logo({ isHome = false }: { isHome?: boolean }) {
    return (
        <div className='text-2xl font-bold font-script'>
            <Link href='/'>
                <Heading
                    as='h1'
                    aria-label='logo:play afrique'
                    className='font-script sr-only'>
                    Play Afrique
                </Heading>
                <Image
                    src='/playafriquelogo.png'
                    alt='Play Afrique Logo'
                    width={500}
                    height={500}
                    className={cn('h-28 w-28', {
                        'w-16 h-16': isHome,
                    })}
                />
            </Link>
        </div>
    )
}

export default Logo
