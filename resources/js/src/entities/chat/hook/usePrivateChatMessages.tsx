import { useEffect, useState } from 'react'
import { useChatStore } from '@/entities/chat/model'
import { usePrivateChat } from '@/entities/chat/hook/usePrivateChat'
import { chatApi } from '@/entities/chat/api'
import { getPrivateChannelPath } from '@/entities/chat/helpers/getPrivateChannelPath'
import { Message } from '@/shared/types/Message/Message'
import { useViewer } from '@/entities/viewer'

export const usePrivateChatMessages = (id: number) => {
    const { data: chat } = usePrivateChat(id)
    const addMessageToPrivateChat = useChatStore((state) => state.addMessageToPrivateChat)
    const setTotalInPrivateChatFeed = useChatStore((state) => state.setTotalInPrivateChatFeed)
    const setHasNextPageInPrivateChatFeed = useChatStore((state) => state.setHasNextPageInPrivateChatFeed)
    const addMessageToEndOfPrivateChat = useChatStore((state) => state.addMessageToEndOfPrivateChat)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { channel } = getPrivateChannelPath(id)
    const { viewer } = useViewer()

    useEffect(() => {
        window.Echo.private(channel).listen('.create_message', (data: { message: Message, user_id: number }) => {
            if (viewer.id !== data.user_id) {
                addMessageToEndOfPrivateChat(data.user_id, data.message)
            }
        })
    }, [id])

    const fetch = async () => {
        setIsLoading(() => true)

        if (isLoading) return

        const res = await chatApi.getPrivateChatMessages(id, {
            offset: chat.feed.messages.length,
            limit: 100
        })

        const data = res.data

        setTotalInPrivateChatFeed(id, data.result.total)
        setHasNextPageInPrivateChatFeed(id, data.result.hasNextPage)
        data.result.messages.forEach(message => {
            addMessageToPrivateChat(id, message)
        })

        setIsLoading(() => false)
    }

    if (!chat) {
        return {
            data: [],
            hasNextPage: false,
            total: 0,
            fetch
        }
    }

    if (!chat.feed) {
        return {
            data: [],
            hasNextPage: false,
            total: 0,
            fetch
        }
    }

    return {
        data: chat ? chat.feed.messages : [],
        hasNextPage: chat ? chat.feed.hasNextPage : false,
        total: chat ? chat.feed.total : 0,
        fetch
    }
}
