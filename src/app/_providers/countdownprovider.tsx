'use client'

import type React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ReactConfetti from 'react-confetti'
import { differenceInSeconds, format } from 'date-fns'
import Heading from '@/components/atoms/Heading'
import Image from 'next/image'
import Text from '@/components/atoms/Text'

interface CountdownContextType {
    targetDate: Date | null
    eventDescription?: string
}

const CountdownContext = createContext<CountdownContextType | undefined>(
    undefined
)

export const useCountdown = () => {
    const context = useContext(CountdownContext)
    if (!context) {
        throw new Error('useCountdown must be used within a CountdownProvider')
    }
    return context
}

interface CountdownProviderProps {
    children: React.ReactNode
    targetDate: Date
    eventDescription?: string
}

const isProduction =
    process.env.NODE_ENV === 'production' &&
    process.env.VERCEL_PRODUCTION_URL === 'playafrique.co.uk'

export const CountdownProvider: React.FC<CountdownProviderProps> = ({
    children,
    targetDate,
    eventDescription,
}) => {
    const [timeLeft, setTimeLeft] = useState<number | null>(() => {
        if (targetDate > new Date()) {
            return differenceInSeconds(targetDate, new Date())
        }
        return null
    })
    const [showConfetti, setShowConfetti] = useState(false)

    useEffect(() => {
        // if time left is null and target date is in the past then return
        if (timeLeft === null && targetDate < new Date()) return

        const updateCountdown = () => {
            const now = new Date()
            if (targetDate > now) {
                setTimeLeft(differenceInSeconds(targetDate, now))
            } else {
                setTimeLeft(0)
                setTimeout(() => {
                    setTimeLeft(null)
                    setShowConfetti(true)
                }, 1000)
            }
        }

        updateCountdown()
        const timer = setInterval(updateCountdown, 1000)

        return () => clearInterval(timer)
    }, [targetDate, timeLeft])

    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (3600 * 24))
        const hours = Math.floor((seconds % (3600 * 24)) / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        return { days, hours, minutes, seconds: remainingSeconds }
    }

    return (
        <CountdownContext.Provider value={{ targetDate, eventDescription }}>
            {children}
            {isProduction && timeLeft !== null && timeLeft > 0 && (
                <>
                    <AnimatePresence initial={false}>
                        {timeLeft !== null && (
                            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90'>
                                <div className='bg-white rounded-lg p-8 max-w-2xl w-full text-center flex gap-3 flex-col item-center justify-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            width={500}
                                            height={500}
                                            src='/playafriquelogo.png'
                                            alt='Play Afrique Logo'
                                            className='w-28 h-28'
                                        />
                                    </div>
                                    {eventDescription ? (
                                        <Heading className='text-2xl font-semibold text-gray-600 mb-4'>
                                            {eventDescription}
                                        </Heading>
                                    ) : (
                                        <div className='space-y-2 mb-5'>
                                            <Heading className='text-2xl font-semibold text-gray-800'>
                                                {'The Launch is Happening !!'}
                                            </Heading>
                                            <Text className='text-lg text-gray-600 max-w-md mx-auto'>
                                                {
                                                    'Experience the Pulse of Africa: Discover Events That Inspire'
                                                }
                                            </Text>
                                        </div>
                                    )}
                                    {timeLeft > 0 ? (
                                        <div className='text-5xl md:text-6xl font-bold mb-8'>
                                            {formatTime(timeLeft).days > 0 && (
                                                <span className='mr-4'>
                                                    {formatTime(timeLeft).days}d
                                                </span>
                                            )}
                                            <span className='mr-4'>
                                                {formatTime(timeLeft)
                                                    .hours.toString()
                                                    .padStart(2, '0')}
                                                h
                                            </span>
                                            <span className='mr-4'>
                                                {formatTime(timeLeft)
                                                    .minutes.toString()
                                                    .padStart(2, '0')}
                                                m
                                            </span>
                                            <span>
                                                {formatTime(timeLeft)
                                                    .seconds.toString()
                                                    .padStart(2, '0')}
                                                s
                                            </span>
                                        </div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className='text-4xl font-bold mb-8 text-green-600'>
                                            {" It's time!"}
                                        </motion.div>
                                    )}
                                    <p className='text-xl'>
                                        {timeLeft > 0
                                            ? `Countdown to ${format(
                                                  targetDate,
                                                  'MMMM do, yyyy HH:mm'
                                              )}`
                                            : 'Product launch is happening now!'}
                                    </p>
                                </div>
                            </div>
                        )}
                    </AnimatePresence>
                    {showConfetti && (
                        <ReactConfetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            recycle={false}
                            numberOfPieces={600}
                        />
                    )}
                </>
            )}
        </CountdownContext.Provider>
    )
}
