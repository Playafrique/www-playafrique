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

export type EVENT_TYPE = {
    object: 'event'
    id: string
    access_code: null | string
    bundles: any[] // Assuming bundles is an array of unknown objects
    call_to_action: 'Sold out' | string // Add other possible values if known
    checkout_url: string
    chk: string
    created_at: number
    currency: 'gbp' | string // Add other possible currencies if known
    description: string
    end: {
        date: string
        formatted: string
        iso: string
        time: string
        timezone: string
        unix: number
    }
    event_series_id: string
    hidden: 'false' | string // Consider using a boolean if possible
    images: {
        header: string
        thumbnail: string
    }
    max_tickets_sold_per_occurrence: null | number
    name: string
    online_event: 'false' | string // Consider using a boolean if possible
    online_link: null | string
    override_id: null | string
    payment_methods: {
        id: string
        external_id: string
        instructions: null | string
        name: null | string
        type: 'stripe' | string // Add other possible payment types if known
    }[]
    private: 'false' | string // Consider using a boolean if possible
    revenue: number
    sales_tax_label: string
    sales_tax_percentage: number
    sales_tax_treatment: 'inclusive' | string // Add other possible values if known
    show_map: 'false' | string // Consider using a boolean if possible
    start: {
        date: string
        formatted: string
        iso: string
        time: string
        timezone: string
        unix: number
    }
    status: 'draft' | string // Add other possible statuses if known
    ticket_groups: any[] // Assuming ticket_groups is an array of unknown objects
    ticket_types: {
        object: 'ticket_type'
        id: string
        access_code: null | string
        booking_fee: number
        description: null | string
        discounts: any[] // Assuming discounts is an array of unknown objects
        group_id: null | string
        has_overrides: 'false' | string // Consider using a boolean if possible
        hide_after: null | string
        hide_until: null | string
        hide_when_sold_out: 'false' | string // Consider using a boolean if possible
        max_per_order: number
        min_per_order: number
        name: string
        override_id: null | string
        price: number
        quantity: number
        quantity_held: number
        quantity_in_baskets: number
        quantity_issued: number
        quantity_total: number
        show_quantity_remaining: 'false' | string // Consider using a boolean if possible
        show_quantity_remaining_less_than: null | number
        sort_order: number
        status: 'hidden' | string // Add other possible statuses if known
        type: 'GA' | string // Add other possible ticket types if known
    }[]
    tickets_available: 'false' | string // Consider using a boolean if possible
    tickets_available_at: null | string
    tickets_available_at_message: string
    tickets_unavailable_at: null | string
    tickets_unavailable_at_message: string
    timezone: string
    total_holds: number
    total_issued_tickets: number
    total_orders: number
    transaction_fee_fixed_amount: number
    transaction_fee_percentage: number
    unavailable: 'false' | string // Consider using a boolean if possible
    unavailable_status: null | string
    url: string
    venue: {
        country: string
        name: string
        postal_code: null | string
    }
    voucher_ids: any[] // Assuming voucher_ids is an array of strings
    waitlist_active: 'no_tickets_available' | string // Add other possible values if known
    waitlist_call_to_action: string
    waitlist_confirmation_message: string
    waitlist_event_page_text: string
}
