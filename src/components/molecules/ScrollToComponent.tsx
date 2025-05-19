'use client'

import React from 'react'
import { Button, ButtonProps } from '../ui/button'

type Props = {
    elementId: string
} & ButtonProps

function ScrollToComponent({ elementId, children }: Props) {
    const scroll = () => {
        const formElement = document.getElementById(elementId)
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return <Button onClick={scroll}>{children}</Button>
}

export default ScrollToComponent
