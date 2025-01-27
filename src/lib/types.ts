export type EVENT = {
    object: 'event_series'
    id: string // 'es_1551815'
    access_code: null
    add_ons: any[] // Assuming add_ons can be of any type, adjust if more specific
    bundles: any[]
    call_to_action: string // 'Grab your tickets'
    created_at: number // Unix timestamp
    currency: string // 'gbp'
    default_max_tickets_sold_per_occurrence: null
    default_ticket_groups: any[]
    default_ticket_types: Record<string, any>[] // Replace 'Record<string, any>' with a more specific type if known
    description: string // HTML string
    images: {
        header: string // URL for header image
        thumbnail: string // URL for thumbnail image
    }
    name: string // 'Accra Food Festival'
    next_occurrence_date: {
        date: string // '2025-02-10'
        formatted: string // 'Mon 10 Feb 2025 6:00 PM'
        iso: string // '2025-02-10T18:00:00+00:00'
        time: string // '18:00'
        timezone: string // '+00:00'
        unix: number // Unix timestamp
    }
    online_event: 'true' | 'false' // Assuming this is always a string
    payment_methods: any[]
    private: 'true' | 'false' // Assuming this is always a string
    revenue: number
    status: 'draft' | 'published' | 'archived' // Replace with actual possible values
    timezone: string // 'Europe/London'
    total_issued_tickets: number
    total_occurrences: number
    upcoming_occurrences: number
    url: string // URL
    venue: {
        name: string // 'Blue Bars'
        postal_code: string // 'SN1 4NB'
    }
    voucher_ids: any[]
}
