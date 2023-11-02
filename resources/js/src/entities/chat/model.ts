import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Chat } from '@/shared/types/Chat/Chat'
import { Message } from '@/shared/types/Message/Message'
import { getPrivateChannelPath } from '@/entities/chat/helpers/getPrivateChannelPath'
import { useViewerStore } from '@/entities/viewer'

interface State {
    chats: Chat[]
}

interface Actions {
    addChat: (chat: Chat) => void
    addMessageToPrivateChat: (id: number, data: Message, ) => void
    addMessageToEndOfPrivateChat: (id: number, data: Message) => void
    setTotalInPrivateChatFeed: (id: number, value: number) => void
    setHasNextPageInPrivateChatFeed: (id: number, value: boolean) => void
}

export const useChatStore = create(
    immer<State & Actions>((set) => ({
        chats: [],
        addChat: (chat) => {
            set((state) => {
                if (state.chats.find(item => item.id === chat.id && item.type === chat.type)) return

                state.chats.push(chat)
            })
        },
        addMessageToPrivateChat: (id, data) => {
            set((state) => {
                const chat = state.chats.find(item => item.id === id && item.type === 'private')

                if (!chat || chat.feed.messages.find(item => item.id === data.id)) return

                chat.feed.messages.push(data)
            })
        },
        addMessageToEndOfPrivateChat: (id, data) => {
            set((state) => {
                const chat = state.chats.find(item => item.id === id && item.type === 'private')

                if (!chat || chat.feed.messages.find(item => item.id === data.id)) return

                chat.feed.messages.unshift(data)
                chat.updated_at = data.created_at
            })
        },
        setTotalInPrivateChatFeed: (id, value) => {
            set((state) => {
                const chat = state.chats.find(item => item.id === id && item.type === 'private')

                if (!chat) return

                chat.feed.total = value
            })
        },
        setHasNextPageInPrivateChatFeed: (id, value) => {
            set((state) => {
                const chat = state.chats.find(item => item.id === id && item.type === 'private')

                if (!chat) return

                chat.feed.hasNextPage = value
            })
        }
    }))
)
