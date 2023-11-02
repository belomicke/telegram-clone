import axios, { AxiosResponse } from 'axios'
import { Message } from '@/shared/types/Message/Message'
import { Chat } from '@/shared/types/Chat/Chat'

interface config {
    offset: number
    limit: number
}

interface MessageFeedResponse {
    messages: Message[]
    total: number
    hasNextPage: boolean
}

const getViewerChats = async (): Promise<AxiosResponse<{ success: boolean, chats: Chat[] }>> => {
    return await axios.get('http://localhost/api/feed/viewer/chats')
}

const getPrivateChat = async (id: number): Promise<AxiosResponse<{ success: boolean, chat: Chat }>> => {
    return await axios.get(`http://localhost/api/chats/${id}`)
}

const getPrivateChatMessages = async (id: number, config: config): Promise<AxiosResponse<{ success: boolean, result: MessageFeedResponse }>> => {
    return await axios.get(`http://localhost/api/feed/user/${id}/messages`, { params: config })
}

const sendMessageToPrivateChat = async (user_id: number, message: string) => {
    const data = {
        user_id,
        message
    }

    return await axios.post('/api/messages/create', data)
}

export const chatApi = {
    getPrivateChat,
    getPrivateChatMessages,
    sendMessageToPrivateChat,
    getViewerChats
}
