import React from 'react'
import { createPortal } from 'react-dom'
import { Background, Container, Content } from './styles'

interface props {
    active: boolean
    close: () => void
    children: React.ReactNode
}

export const TModal = ({ active, close, children }: props) => {
    const body = document.querySelector('body')

    return createPortal(
        <Container style={{ pointerEvents: active ? 'all' : 'none' }}>
            {active &&
                <Background onClick={() => close()} />
            }
            <Content>
                {children}
            </Content>
        </Container>
        , body)

}
