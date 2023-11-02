import { HTMLAttributes } from 'react'
import { Button, Container } from './styles'

interface props extends HTMLAttributes<HTMLDivElement> {
    visible: boolean
}

export const ScrollToBottomButton = ({ visible, ...props }: props) => {
    return (
        <Container visible={visible} {...props}>
            <Button icon="icon-arrow-down" />
        </Container>
    )
}
