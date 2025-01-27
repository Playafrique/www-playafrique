import { env } from '@/env'
import axios, { AxiosError, Method, AxiosRequestHeaders } from 'axios'

// BASE_URLS
const BASE_URLS = {
    events: {
        url: 'https://api.tickettailor.com/v1',
        headers: {
            Accept: 'application/json',
            Authorization: `Basic ${env.TICKET_TAILOR_API_KEY}`,
        },
    },
    tickets: {
        url: 'https://api.tickettailor.com/v1/tickets',
        headers: {
            Authorization: `Basic ${env.TICKET_TAILOR_API_KEY}`,
        },
    },
} as const

type BaseUrls = keyof typeof BASE_URLS

export const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
}

export type InvokeOptions = {
    method?: Method
    endpoint: string
    data?: Record<string, any>
    options?: {
        headers?: AxiosRequestHeaders
    }
    useBaseUrl?: boolean
    baseUrl: BaseUrls
}

export type InvokeResponse<T> = Promise<{
    res: T | null
    status?: number | undefined
    error: string | null
}>

export async function invoke<T>({
    data,
    options,
    baseUrl,
    endpoint,
    method = 'GET',
    useBaseUrl = true,
}: InvokeOptions): InvokeResponse<T> {
    let config = {
        headers,
    }

    const BASE_URL = BASE_URLS[baseUrl]

    if (!BASE_URL.url && useBaseUrl) {
        throw new Error('BASE_URL is not defined')
    }

    let REQUEST_URL = endpoint

    if (useBaseUrl) {
        REQUEST_URL = `${BASE_URL.url}${endpoint}`

        // merge headers
        if (BASE_URL.headers) {
            config.headers = {
                ...config.headers,
                ...BASE_URL.headers,
            }
        }
    }

    const { headers: optionHeaders, ...opts } = options || {}
    try {
        const { data: res, status } = await axios({
            data,
            method,
            url: REQUEST_URL,
            maxBodyLength: Infinity,
            headers: {
                ...optionHeaders,
                ...config.headers,
            },
            auth: {
                username: env.TICKET_TAILOR_API_KEY,
                password: '',
            },
            withCredentials: true,
            ...opts,
        })

        return { res, status, error: null }
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            if (error?.response) {
                if (error.response.data.message || error.response.data.detail) {
                    const message =
                        error.response.data.message ||
                        error.response.data.detail
                    return {
                        res: null,
                        status: error.response.status,
                        error: message,
                    }
                }

                return {
                    res: null,
                    status: error.response.status,
                    error: error.response.data,
                }
            } else if (error.request) {
                return {
                    res: null,
                    status: (error as AxiosError).response?.status,
                    error: 'Error: No response received from the request',
                }
            } else {
                return {
                    res: null,
                    status: error.response?.status,
                    error: error.message,
                }
            }
        }

        return {
            res: null,
            status: undefined,
            error: 'An unknown error occurred while fetching the data',
        }
    }
}
