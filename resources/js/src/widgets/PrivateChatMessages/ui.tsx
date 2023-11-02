import React, { forwardRef, useId } from 'react'
import { usePrivateChatMessages } from '@/entities/chat/hook/usePrivateChatMessages'
import { MessageFeed } from '@/entities/message/ui/MessageFeed'

interface props {
    id: number
}

export interface PrivateChat {
    scrollToBottom(): void
}

export const PrivateChatMessages = forwardRef<PrivateChat, props>(({ id }, ref) => {
    const {
        data: messages,
        fetch,
    } = usePrivateChatMessages(id)

    return (
        <MessageFeed
            messages={messages}
            fetch={fetch}
            key={useId()}
        />
    )
})

PrivateChatMessages.displayName = 'PrivateChatMessages'
