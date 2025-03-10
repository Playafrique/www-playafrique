'use client'

import { cva } from 'class-variance-authority'
import { Slash } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getBreadcrumbs, PATH } from '@/lib/breadcrumbs'
import { cn } from '@/lib/utils'

import ListWrapper from '@components/atoms/ListWrapper'

const colorVariant = cva('', {
    variants: {
        color: {
            default: 'text-brandprimary-900',
            primary: 'text-brandprimary-700',
            light: 'text-brandaccent-50',
        },
    },
    defaultVariants: {
        color: 'default',
    },
})

type BreadCrumbsProps = {
    color?: 'default' | 'primary' | 'light'
}

function BreadCrumbs({ color = 'default' }: BreadCrumbsProps) {
    const [paths, setPaths] = useState<PATH[]>([])

    useEffect(() => {
        if (typeof window === 'undefined') return
        const path = window.location.pathname
        const breadcrumbs = getBreadcrumbs(path)
        setPaths(breadcrumbs)
    }, [])
    return (
        <Breadcrumb>
            <BreadcrumbList className={cn(colorVariant({ color }))}>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href='/'
                        data-active={
                            typeof window !== 'undefined'
                                ? window?.location.pathname === '/'
                                : false
                        }
                        className='data-[active=false]:text-current font-sans'>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash size={16} />
                </BreadcrumbSeparator>
                <ListWrapper list={paths} keyExtractor={(path) => path.name}>
                    {(path) => (
                        <Fragment>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href={path.href}
                                    aria-disabled={path.active}
                                    data-active={path.active}
                                    className='data-[active=false]:text-current capitalize aria-disabled:pointer-events-none aria-disabled:text-current aria-disabled:opacity-50 font-sans'>
                                    {path.name}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='last:hidden'>
                                <Slash size={16} />
                            </BreadcrumbSeparator>
                        </Fragment>
                    )}
                </ListWrapper>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
export default BreadCrumbs
