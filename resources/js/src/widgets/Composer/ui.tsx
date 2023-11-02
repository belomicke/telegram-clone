import { InputHTMLAttributes, useEffect } from 'react'
import { Container, Input, Placeholder, SendButton, SendButtonIcon, Wrapper } from './styles'

interface props extends InputHTMLAttributes<HTMLInputElement>{
    onEnter: () => void
}

export const Composer = ({ onEnter, ...props }: props) => {
    useEffect(() => {
        window.addEventListener('keydown', sendMessageOnPressEnter)

        return () => {
            window.removeEventListener('keydown', sendMessageOnPressEnter)
        }
    }, [props.value])

    const sendMessageOnPressEnter = (e) => {
        if (e.key === 'Enter') {
            onEnter()
        }
    }

    return (
        <Wrapper>
            <Container>
                <Input
                    {...props}
                    focused={String(props.value).length !== 0}
                />
                <Placeholder text_length={String(props.value).length}>Сообщение</Placeholder>
                <SendButton
                    focused={String(props.value).length !== 0}
                    text_length={String(props.value).length}
                    onMouseDown={() => onEnter()}
                >
                    <SendButtonIcon
                        focused={String(props.value).length !== 0}
                        className="icon icon-send"
                    />
                </SendButton>
            </Container>
        </Wrapper>
    )
}
