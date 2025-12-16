import { EVENT_TYPE } from '@/lib/types'
import GalleryGrid from './GalleryGrid'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

function GalleryWrapper({
    events,
    selectedEvent,
}: {
    events: EVENT_TYPE[]
    selectedEvent: string | null
}) {
    const currentEvent = events.find((event) => event.name === selectedEvent)

    return (
        <div className='min-h-screen'>
            {currentEvent && (
                <div className='py-16 px-8 lg:px-16 bg-background'>
                    <div className='max-w-7xl mx-auto'>
                        <Heading
                            as='h2'
                            className='text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center dark:text-gray-300'>
                            {currentEvent.name}
                        </Heading>
                        <Text className='text-muted-foreground text-center mb-12 max-w-2xl mx-auto dark:text-gray-300'>
                            Browse through the memorable moments captured at
                            this amazing event.
                        </Text>
                        <GalleryGrid currentEvent={currentEvent} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default GalleryWrapper
