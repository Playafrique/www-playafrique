import { DocumentActionComponent, useDocumentOperation } from 'sanity'
import { useState } from 'react'

interface EventGalleryDocument {
    _type: 'eventGallery'
    event?: {
        _ref: string
        _type: 'reference'
    }
    gallery?: any
    replaceExisting?: boolean
}

export const SyncGalleryAction: DocumentActionComponent = (props) => {
    const { id, type, draft, published } = props
    const { patch } = useDocumentOperation(id, type)
    const [isLoading, setIsLoading] = useState(false)

    // Only show this action for eventGallery documents
    if (type !== 'eventGallery') {
        return null
    }

    const document = (draft || published) as EventGalleryDocument
    if (!document) {
        return null
    }

    const handleSync = async () => {
        if (!document.event || !document.gallery) {
            alert('Please select an event and add a gallery before syncing.')
            return
        }

        setIsLoading(true)

        try {
            // Create a patch to update the referenced event with the gallery
            const eventRef = document.event._ref
            if (!eventRef) {
                throw new Error('Event reference not found')
            }

            // Patch the event document with the gallery
            await patch.execute([
                {
                    patch: {
                        id: eventRef,
                        set: {
                            gallery: document.gallery,
                        },
                    },
                },
            ])

            alert('Gallery successfully synced to event!')
        } catch (error) {
            console.error('Error syncing gallery:', error)
            alert('Error syncing gallery. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return {
        label: isLoading ? 'Syncing...' : 'Sync Gallery to Event',
        onHandle: handleSync,
        disabled: isLoading || !document.event || !document.gallery,
        tone: 'primary' as const,
    }
}
