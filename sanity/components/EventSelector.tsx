'use client'

import { Button, Card, Flex, Select, Spinner, Text } from '@sanity/ui'
import { StringInputProps, set, unset } from 'sanity'

import { EVENT_TYPE } from '@/lib/types'
import ListWrapper from '@components/atoms/ListWrapper'
import React from 'react'
import axios from 'axios'
import { invoke } from '@lib/invoke'
import { useQuery } from '@tanstack/react-query'

const cardProps = { shadow: 1, padding: 4, radius: 2 }

function EventSelector(props: StringInputProps) {
    const { onChange, value } = props

    const { data, error, isLoading, refetch, isRefetching } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            try {
                const response = await axios.get('/api/events')
                const activeStatuses = ['published', 'close_sales']
                const events: EVENT_TYPE[] =
                    response?.data.events.filter((evt: EVENT_TYPE) => {
                        return (
                            activeStatuses.includes(evt.status) &&
                            evt.hidden != 'true'
                        )
                    }) ?? []
                return events
            } catch (error) {
                console.error('Error fetching events:', error)
                throw new Error(
                    error instanceof Error
                        ? error.message
                        : 'An error occurred',
                )
            }
        },
        refetchOnWindowFocus: false,
        placeholderData: (prev) => prev ?? [],
    })

    const handleChange = React.useCallback(
        (event: React.FormEvent<HTMLSelectElement> | undefined) => {
            const val = event?.currentTarget.value
            onChange(val ? set(val) : unset())
        },
        [onChange],
    )

    if (error)
        return (
            <Card tone='critical' {...cardProps}>
                <Text>There has been an error</Text>
            </Card>
        )

    if (!data && isLoading)
        return (
            <Card tone='default' {...cardProps}>
                <Spinner />
            </Card>
        )
    return (
        <Flex gap={2}>
            <Select onChange={handleChange} value={value}>
                <option value=''>Select an event</option>
                <ListWrapper
                    list={data ?? []}
                    keyExtractor={(item: EVENT_TYPE) => item.id}>
                    {(item: EVENT_TYPE) => (
                        <option key={item?.id} value={item?.name}>
                            {item?.name}
                        </option>
                    )}
                </ListWrapper>
            </Select>
            <Button
                mode='ghost'
                text='Refresh'
                onClick={() => refetch()}
                disabled={isLoading || isRefetching}
            />
        </Flex>
    )
}

export default EventSelector
