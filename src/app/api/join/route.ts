import { client } from '../../../../sanity/sanity.client'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const joinSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    bio: z.string().min(1, 'Bio is required'),
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const parsed = joinSchema.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json(
                { message: 'Validation Error', errors: parsed.error.format() },
                { status: 400 },
            )
        }

        const { firstName, lastName, email, bio } = parsed.data

        const slug = `${firstName}-${lastName}`
            .toLowerCase()
            .replace(/\s+/g, '-')

        const result = await client.create({
            _type: 'member',
            firstName,
            lastName,
            email,
            bio,
            slug: {
                _type: 'slug',
                current: slug,
            },
        })

        return NextResponse.json(
            { message: 'Member created successfully', member: result },
            { status: 201 },
        )
    } catch (error) {
        console.error('Error creating member:', error)
        return NextResponse.json(
            {
                message: 'Internal Server Error',
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 },
        )
    }
}
