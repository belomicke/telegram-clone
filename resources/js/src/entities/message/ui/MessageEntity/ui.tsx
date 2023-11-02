import { Container, Message, MessageText, MessageTime } from './styles'
import { useMemo } from 'react'

interface props {
    text: string
    isForeignMessage: boolean
    created_at: string
}

export const MessageEntity = ({ text, isForeignMessage, created_at }: props) => {
    const time = useMemo(() => {
        const n = new Date(created_at)

        const hours = n.getHours() < 10 ? `0${n.getHours()}` : n.getHours()
        const minutes = n.getMinutes() < 10 ? `0${n.getMinutes()}` : n.getMinutes()

        return `${hours}:${minutes}`
    }, [created_at])

    return (
        <Container is_foreign_message={isForeignMessage}>
            <Message is_foreign_message={isForeignMessage}>
                <MessageText>{text}</MessageText>
                <MessageTime>{time}</MessageTime>
            </Message>
        </Container>
    )
}
