import { SidebarListItem } from './SidebarListItem'
import { Container } from './styles'
import { ViewerChat } from '@/entities/viewer/model'
import { useChatStore } from '@/entities/chat/model'
import { useMemo } from 'react'

interface props {
    chats: ViewerChat[]
    withLastMessage?: boolean
    withOnlineStatus?: boolean
    canBeActive?: boolean
    withSaved?: boolean
    onClick?: () => void
}

export const SidebarEntities = ({
    chats,
    withLastMessage = false,
    withOnlineStatus = false,
    canBeActive = false,
    onClick = () => {}
}: props) => {
    return (
        <Container>
            {chats.map(chat => (
                <SidebarListItem
                    id={chat.id}
                    withLastMessage={withLastMessage}
                    colorNumber={Number(String(chat.id).at(-1))}
                    key={`${chat.type}:${chat.id}`}
                    withOnlineStatus={withOnlineStatus}
                    canBeActive={canBeActive}
                    onClick={onClick}
                    type={chat.type}
                />
            ))}
        </Container>
    )
}
