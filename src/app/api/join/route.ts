import { client } from '../../../../sanity/sanity.client'
import { NextRequest, NextResponse } from 'next/server'
import { joinFormSchema } from '@/lib/validationschema'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const parsed = joinFormSchema.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json(
                { message: 'Validation Error', errors: parsed.error.format() },
                { status: 400 },
            )
        }

        const {
            firstName,
            lastName,
            email,
            bio,
            entity,
            creativeDiscipline,
            phone,
        } = parsed.data

        // check if member already exists
        const existingMember = await client.fetch(
            `*[_type == "member" && email == "${email}"][0]`,
        )

        if (existingMember) {
            return NextResponse.json(
                { message: 'Member already exists' },
                { status: 400 },
            )
        }

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
            entity,
            creativeDiscipline,
            phone,
        })

        return NextResponse.json(
            { message: 'Member created successfully', member: result },
            { status: 201 },
        )
    } catch (error) {
        return NextResponse.json(
            {
                message: 'Internal Server Error',
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 },
        )
    }
}
