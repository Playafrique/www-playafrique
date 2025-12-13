import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

function Logo({ isHome = false }: { isHome?: boolean }) {
    return (
        <div className='text-2xl font-bold font-script rounded-md'>
            <Link href='/'>
                <div
                    aria-label='logo:play afrique'
                    className='font-script sr-only'>
                    Play Afrique CIC
                </div>
                <Image
                    src='/images/playafriquelogo.png'
                    alt='Play Afrique Logo'
                    width={500}
                    height={500}
                    className={cn(
                        'h-20 w-20 md:h-28 md:w-28 p-2 rounded-md transition-all duration-300',
                        {
                            'size-24 md:size-16': !isHome,
                        },
                    )}
                />
            </Link>
        </div>
    )
}

export default Logo
