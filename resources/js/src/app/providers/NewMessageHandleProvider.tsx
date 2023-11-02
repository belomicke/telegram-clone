import React, { useEffect } from 'react'
import { useViewer, useViewerStore } from '@/entities/viewer'
import { useChatStore } from '@/entities/chat/model'

interface props {
    children: React.ReactNode
}

export const NewMessageHandleProvider = ({ children }: props) => {
    const { viewer } = useViewer()

    const addChatToViewerChats = useViewerStore((state) => state.addViewerChat)
    const addChatToChatStore = useChatStore((state) => state.addChat)

    useEffect(() => {
        if (viewer) {
            window.Echo.private(`private.${viewer.id}`).listen('.new_chat', (e) => {
                addChatToChatStore(e)
                addChatToViewerChats(e)
            })
        }

        return () => {
            if (viewer) {
                window.Echo.leave(`private.${viewer.id}`)
            }
        }
    }, [viewer])

    return children
}
