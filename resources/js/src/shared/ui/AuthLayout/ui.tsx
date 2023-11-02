import React from 'react'
import { Container, Logo, Title } from './styles'

interface props {
    children: React.ReactNode
}

export const AuthLayout = ({ children }: props) => {
    return (
        <Container>
            <Logo />
            <Title>Telegram</Title>
            {children}
        </Container>
    )
}
