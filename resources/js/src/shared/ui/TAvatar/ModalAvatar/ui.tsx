import { Avatar, Container } from './styles'
import { Background, Content } from '@/shared/ui/TModal/styles'

interface props {
    avatar: string
    close: () => void
}

export const ModalAvatar = ({ avatar, close }: props) => {
    return (
        <Container>
            <Background onClick={close} />
            <Content>
                <Avatar path={avatar} />
            </Content>
        </Container>
    )
}
