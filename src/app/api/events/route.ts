import { NextResponse } from 'next/server'
import { invoke } from '@/lib/invoke'
import type { EVENT_TYPE } from '@/lib/types'

export async function GET() {
    try {
        const { res, error } = await invoke<{ data: EVENT_TYPE[] }>({
            baseUrl: 'events',
            endpoint: '/events',
        })

        if (error) {
            throw new Error(error)
        }

        return NextResponse.json({ events: res?.data })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch events' },
            { status: 500 },
        )
    }
}
