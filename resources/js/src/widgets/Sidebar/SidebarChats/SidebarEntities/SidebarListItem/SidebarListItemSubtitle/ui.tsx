import { useViewer } from '@/entities/viewer'
import { Colon, Container, LastMessage, MessageBody, SenderName } from './styles'
import { useEffect, useMemo, useState } from 'react'

interface props {
    message: any
    active: boolean
    isTyping: boolean
}

export const SidebarListItemSubtitle = ({ message, active, isTyping }: props) => {
    const { viewer } = useViewer()

    const [typingMessage, setTypingMessage] = useState<string>('Печатает')

    useEffect(() => {
        setTimeout(() => {
            if (typingMessage === 'Печатает...') {
                setTypingMessage('Печатает')
            } else {
                setTypingMessage(prev => prev + '.')
            }
        }, 500)

    }, [typingMessage])

    return (
        <Container>
            <LastMessage>
                {message.user_id === viewer.id ?
                    <>
                        <SenderName>Вы</SenderName>
                        <Colon>:</Colon>
                    </>
                    :
                    ''
                }
                <MessageBody active={active}>
                    {isTyping ?
                        typingMessage
                        :
                        message.text.slice(0, 80)
                    }
                </MessageBody>
            </LastMessage>
        </Container>
    )
}
