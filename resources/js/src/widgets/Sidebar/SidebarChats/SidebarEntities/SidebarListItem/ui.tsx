import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { SidebarListItemSubtitle } from './SidebarListItemSubtitle'
import { LastMessageTime } from './LastMessageTime'
import { useIsOnline } from '@/entities/chat/hook/useIsOnline'
import { useIsTyping } from '@/entities/chat/hook/useIsTyping'
import { TAvatar } from '@/shared/ui/TAvatar'
import {
    Container,
    Info,
    InfoRow,
    Separator,
    Title,
    TitleContainer,
} from './styles'
import { useViewer } from '@/entities/viewer'
import { usePrivateChat } from '@/entities/chat/hook/usePrivateChat'

interface props {
    id: number
    withLastMessage?: boolean
    colorNumber: number
    type: 'private'
    withOnlineStatus: boolean
    canBeActive: boolean
    onClick?: () => void
}

export const SidebarListItem = ({
    id,
    withLastMessage,
    colorNumber,
    type,
    withOnlineStatus,
    canBeActive,
    onClick
}: props) => {
    const location = useLocation()
    const navigate = useNavigate()

    const { viewer } = useViewer()

    const { status: isOnline } = useIsOnline(id, { enabled: withOnlineStatus })
    const { status: isTyping } = useIsTyping(id, { enabled: withOnlineStatus })

    const { data: chat } = usePrivateChat(id)

    const isActive = useMemo(() => {
        return location.pathname === `/${type}/${id}`
    }, [location.pathname, type, id, canBeActive])

    const clickHandler = () => {
        navigate(`/${type}/${id}`)
        onClick()
    }

    const message = useMemo(() => {
        if (chat) {
            return chat.feed.messages[0]
        }
    }, [chat])

    if (!chat) return <></>

    return (
        <Container
            active={canBeActive ? isActive : false}
            onMouseDown={() => clickHandler()}
        >
            <TAvatar
                cover={chat.cover}
                colorNumber={colorNumber}
                letter={chat.title[0]}
                isOnline={withOnlineStatus ? isOnline : false}
                saved={id === viewer.id}
                rounded
            />
            <Info>
                <InfoRow>
                    <TitleContainer>
                        <Title>{chat.title}</Title>
                    </TitleContainer>
                    <Separator/>
                    {withLastMessage && message &&
                        <LastMessageTime
                            messageDate={message.created_at}
                            active={isActive}
                        />
                    }
                </InfoRow>
                {withLastMessage && message &&
                    <SidebarListItemSubtitle
                        message={message}
                        isTyping={isTyping}
                        active={isActive}
                    />
                }
            </Info>
        </Container>
    )
}
