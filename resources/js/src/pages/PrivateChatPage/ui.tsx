import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Composer } from '@/widgets/Composer'
import { usePrivateChat } from '@/entities/chat/hook/usePrivateChat'
import { useSendMessageToPrivateChat } from '@/entities/chat/hook/useSendMessageToPrivateChat'
import { getPrivateChannelPath } from '@/entities/chat/helpers/getPrivateChannelPath'
import { useViewer } from '@/entities/viewer'
import { ChatHeader } from '@/shared/ui/ChatHeader'
import { PrivateChat } from '@/widgets/PrivateChatMessages/ui'
import { Container } from './styles'
import { MessageFeed } from '@/entities/message/ui/MessageFeed'
import { usePrivateChatMessages } from '@/entities/chat/hook/usePrivateChatMessages'

export const PrivateChatPage = () => {
    const params = useParams()
    const id = params.id

    const [value, setValue] = useState<string>('')

    const { data: chat } = usePrivateChat(Number(id))
    const { viewer } = useViewer()

    const { mutate } = useSendMessageToPrivateChat(chat)
    const { channel } = getPrivateChannelPath(Number(id))

    const chatRef = useRef<PrivateChat>(null)

    const {
        data: messages,
        fetch,
    } = usePrivateChatMessages(Number(id))

    useEffect(() => {
        if (chat) {
            document.title = chat.title
        }
    }, [chat])

    useEffect(() => {
        if (chat && chat.feed && chat.feed.messages.length) {
            window.Echo.join(channel).whisper('typing', {
                status: Boolean(value.length),
                user_id: viewer.id
            })
        }
    }, [chat, value])

    const sendMessage = async () => {
        await mutate(value)
        chatRef.current.scrollToBottom()
        setValue('')
    }

    if (!chat) return <></>

    return (
        <Container>
            <ChatHeader
                id={chat.id}
                title={chat.title}
                cover={chat.cover}
            />
            <MessageFeed
                messages={messages}
                fetch={fetch}
                ref={chatRef}
            />
            <Composer
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onEnter={() => sendMessage()}
            />
        </Container>
    )
}
