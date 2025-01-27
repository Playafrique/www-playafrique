'use client'

import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from './ErrorHandler'

function ErrorHandlerWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ErrorBoundary fallbackRender={ErrorHandler}>{children}</ErrorBoundary>
    )
}

export default ErrorHandlerWrapper
