'use client'

import { motion, type MotionProps, useInView } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type AnimateDirection = 'right' | 'left' | 'up' | 'down'

type AnimateProps = {
    dir: AnimateDirection
    duration?: number
    children: React.ReactNode
    threshold?: number
    respondToScroll?: boolean
    useObserver?: boolean
    initiallyVisible?: boolean
    useExistAnimation?: boolean
} & React.HTMLAttributes<HTMLDivElement> &
    MotionProps

function Animate({
    children,
    dir = 'up',
    duration = 0.5,
    threshold = 0.2,
    respondToScroll = true,
    useObserver = true,
    initiallyVisible = false,
    useExistAnimation = false,
    ...props
}: AnimateProps) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {
        once: true,
        amount: threshold,
        margin: '10px',
    })

    const scrollDirection = useScrollDirection()

    const getAnimationDirection = (): AnimateDirection => {
        if (!respondToScroll || !scrollDirection) return dir

        // When the scroll direction is up, we want to animate in the opposite direction
        if (scrollDirection === 'up') return dir === 'up' ? 'down' : 'up'
        return dir
    }

    const animationDir = getAnimationDirection()

    const variants = {
        hidden: {
            opacity: 0,
            x: dir === 'left' ? 70 : dir === 'right' ? -70 : 0,
            y: animationDir === 'up' ? 70 : animationDir === 'down' ? -70 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    }

    const shouldBeVisible = useObserver ? isInView : initiallyVisible

    return (
        <motion.div
            ref={ref}
            initial='hidden'
            animate={shouldBeVisible ? 'visible' : 'hidden'}
            exit={shouldBeVisible ? 'hidden' : undefined}
            variants={variants}
            transition={{ duration }}
            {...props}>
            {children}
        </motion.div>
    )
}

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<
        'up' | 'down' | null
    >(null)
    const [prevScrollY, setPrevScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY === 0) {
                setScrollDirection(null)
            } else if (currentScrollY > prevScrollY) {
                setScrollDirection('down')
            } else {
                setScrollDirection('up')
            }

            setPrevScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollY])
    return scrollDirection
}

export default Animate
