import { z } from 'zod'

// Define Zod schema for form validation
export const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    interest: z
        .string()
        .min(1, { message: 'Please select an area of interest' }),
    message: z
        .string()
        .min(10, { message: 'Message must be at least 10 characters' }),
})

export const joinFormSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: 'First name must be at least 2 characters' }),
    lastName: z
        .string()
        .min(2, { message: 'Last name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    entity: z.enum(['individual', 'company']).default('individual'),
    bio: z.string().optional(),
    creativeDiscipline: z
        .string()
        .min(1, { message: 'Please select a creative discipline' }),
    phone: z
        .string()
        .optional()
        .refine(
            (value) => {
                if (!value) return true
                return /^\+?[0-9]{7,15}$/.test(value)
            },
            { message: 'Phone number must be between 7 and 15 digits' },
        ),
})

export type contactFormType = z.infer<typeof contactFormSchema>
export type joinFormType = z.infer<typeof joinFormSchema>
