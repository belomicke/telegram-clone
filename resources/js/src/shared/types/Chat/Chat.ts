import { Message } from '@/shared/types/Message/Message'

export interface Chat {
    id: number
    title: string
    cover: string
    feed: {
        messages: Message[]
        hasNextPage: boolean
        total: number
    }
    updated_at: string
    type: 'private'
}
