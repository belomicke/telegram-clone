import { useEffect } from 'react'
import { useChatStore } from '@/entities/chat/model'
import { chatApi } from '@/entities/chat/api'

export const usePrivateChat = (id: number) => {
    const data = useChatStore((state) => state.chats.find(item => (item.type === 'private' && item.id == id)))
    const addChat = useChatStore((state) => state.addChat)

    useEffect(() => {
        if (!data) fetch()
    }, [id])

    const fetch = async () => {
        const res = await chatApi.getPrivateChat(id)
        const data = res.data

        addChat(data.chat)
    }

    return {
        data
    }
}
