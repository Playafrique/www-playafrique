import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

interface ErrorDisplayProps {
    error: Error
    resetErrorBoundary: VoidFunction
}

function ErrorHandler({ error, resetErrorBoundary }: ErrorDisplayProps) {
    return (
        <div className='min-h-[70vh] h-full flex items-center justify-center bg-gray-100'>
            <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center'>
                <AlertTriangle
                    className='mx-auto h-12 w-12 text-yellow-500 mb-4'
                    aria-hidden='true'
                />
                <Heading
                    as='h2'
                    className='text-2xl font-bold text-gray-900 mb-2'>
                    Oops! Something went wrong
                </Heading>
                <Text className='text-gray-600 mb-4'>
                    We apologize for the inconvenience. An error has occurred.
                </Text>

                <div className='bg-red-50 p-4 mb-4 rounded-xl'>
                    <Text className='text-sm text-red-700'>
                        <strong className='font-medium'>Error details:</strong>{' '}
                        {error.message}
                    </Text>
                </div>

                {resetErrorBoundary && (
                    <Button onClick={resetErrorBoundary} className='w-full'>
                        Try again
                    </Button>
                )}

                <Text className='mt-4 text-sm text-gray-500'>
                    If the problem persists, please contact our support team.
                </Text>
            </div>
        </div>
    )
}

export default ErrorHandler
