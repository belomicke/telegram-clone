import { useChatStore } from '@/entities/chat/model'
import { chatApi } from '@/entities/chat/api'
import { Chat } from '@/shared/types/Chat/Chat'
import { useViewerStore } from '@/entities/viewer'
import { useEffect } from 'react'

export const useSendMessageToPrivateChat = (chat: Chat) => {
    const addChatToViewerChats = useViewerStore((state) => state.addViewerChat)
    const addChatToChatStore = useChatStore((state) => state.addChat)
    const addMessageToEndOfPrivateChat = useChatStore((state) => state.addMessageToEndOfPrivateChat)

    const mutate = async (text: string) => {
        const res = await chatApi.sendMessageToPrivateChat(chat.id, text)
        const data = res.data

        if (data.success) {
            addMessageToEndOfPrivateChat(chat.id, data.message)

            const createdChat = {
                ...chat,
                feed: {
                    messages: [ data.message ],
                    hasNextPage: false,
                    total: 1
                }
            }

            addChatToChatStore(createdChat)
            addChatToViewerChats(createdChat)
        }
    }

    return {
        mutate
    }
}
