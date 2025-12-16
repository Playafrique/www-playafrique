import JoinForm from '@/components/organism/JoinForm'
import Image from 'next/image'

function JoinPage() {
    return (
        <main className='w-full min-h-screen grid lg:grid-cols-2'>
            <div className='flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-white dark:bg-slate-900 order-2 lg:order-1'>
                <div className='w-full max-w-lg'>
                    <JoinForm />
                </div>
            </div>
            <div className='hidden lg:block relative h-full min-h-screen bg-gray-900 order-1 lg:order-2 overflow-hidden'>
                <Image
                    fill
                    src='https://cdn.sanity.io/images/jx89cb4b/production/d0753d8231921ad7068003454d76bcb8340b3013-2400x3600.jpg'
                    alt='Join Play Afrique'
                    className='object-cover opacity-90 bg-cover bg-top bg-no-repeat'
                    priority
                />
            </div>
        </main>
    )
}

export default JoinPage
