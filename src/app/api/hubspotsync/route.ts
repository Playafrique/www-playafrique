import { NextResponse } from 'next/server'
import { env } from '@/env'

export async function POST(req: Request) {
    const body = await req.json()

    const hubspotProperties = {
        email: body.email,
        firstname: body.firstName,
        lastname: body.lastName,
        phone: body.phone ?? '',
        entity_type: body.entity,
        creative_discipline: body.creativeDiscipline,
        hs_content_membership_notes: body.bio,
        location: body.location,
    }

    try {
        const response = await fetch(
            'https://api.hubapi.com/crm/v3/objects/contacts',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${env.HUBSPOT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ properties: hubspotProperties }),
            },
        )

        if (!response.ok) {
            return NextResponse.json(
                { error: response?.statusText },
                { status: response?.status },
            )
        }

        return NextResponse.json({ success: response?.ok })
    } catch (err) {
        return NextResponse.json({ error: 'Sync failed' }, { status: 500 })
    }
}
