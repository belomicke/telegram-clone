import { TAvatar } from '@/shared/ui/TAvatar'
import { ChatInfo, Container, Info, Title } from './styles'
import { useViewer } from '@/entities/viewer'

interface props {
    id: number
    title: string
    cover: string
}

export const ChatHeader = ({ id, title, cover }: props) => {
    const { viewer } = useViewer()

    return (
        <Container>
            <ChatInfo>
                <TAvatar
                    cover={cover}
                    size="medium"
                    letter={title[0]}
                    colorNumber={id}
                    saved={id === viewer.id}
                    rounded
                    canOpen
                />
                <Info>
                    <Title>{title}</Title>
                </Info>
            </ChatInfo>
        </Container>
    )
}
