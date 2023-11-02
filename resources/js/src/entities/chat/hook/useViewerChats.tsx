import { useEffect, useMemo } from 'react'
import { useChatStore } from '@/entities/chat/model'
import { useViewerStore } from '@/entities/viewer'
import { chatApi } from '@/entities/chat/api'

export const useViewerChats = () => {
    const chats = useViewerStore((state) => state.chats)
    const addChat = useChatStore((state) => state.addChat)
    const addViewerChat = useViewerStore((state) => state.addViewerChat)
    const allChats = useChatStore((state) => state.chats.filter(item => chats.find(chat => chat.id === item.id && chat.type === item.type)))

    const data = useMemo(() => {
        return allChats.slice().sort((a, b) => {
            if (new Date(a.updated_at) < new Date(b.updated_at)) return 1
            if (new Date(a.updated_at) > new Date(b.updated_at)) return -1
        })
    }, [allChats, chats])

    useEffect(() => {
        if (!chats.length) fetch()
    }, [])

    const fetch = async () => {
        const res = await chatApi.getViewerChats()
        const data = res.data

        if (data.success) {
            data.chats.forEach(chat => {
                addChat(chat)
                addViewerChat({ id: chat.id, type: chat.type })
            })
        }
    }

    return {
        data,
        fetch
    }
}
