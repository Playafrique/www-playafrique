import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

function Logo({ isHome = false }: { isHome?: boolean }) {
    return (
        <div className='text-2xl font-bold font-script'>
            <Link href='/'>
                <div
                    aria-label='logo:play afrique'
                    className='font-script sr-only'>
                    Play Afrique
                </div>
                <Image
                    src='/images/playafriquelogo.png'
                    alt='Play Afrique Logo'
                    width={500}
                    height={500}
                    className={cn('h-28 w-28', {
                        'w-20 h-full': !isHome,
                    })}
                />
            </Link>
        </div>
    )
}

export default Logo
