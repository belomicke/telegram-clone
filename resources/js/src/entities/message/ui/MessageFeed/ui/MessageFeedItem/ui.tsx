import { MessageEntity } from '@/entities/message/ui/MessageEntity'
import { useViewer } from '@/entities/viewer'
import { Message } from '@/shared/types/Message/Message'
import { MessageContainer } from './styles'

interface props {
    message: Message
}

export const MessageFeedItem = ({ message }: props) => {
    const { viewer } = useViewer()

    return (
        <MessageContainer data-message-id={message.id}>
            <MessageEntity
                text={message.text}
                isForeignMessage={message.user_id !== viewer.id}
                created_at={message.created_at}
            />
        </MessageContainer>
    )
}
