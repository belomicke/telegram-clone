import React from 'react'
import { HeaderButton } from './HeaderButton'
import { SidebarPages } from '@/entities/app/model'
import { Container, Title } from './styles'

interface props {
    title: string
    prevPage: SidebarPages
    children?: React.ReactNode
}

export const Header = ({ title, prevPage, children }: props) => {
    return (
        <Container>
            <HeaderButton
                icon="icon-arrow-left"
                path={prevPage}
            />
            <Title>{title}</Title>
            {children}
        </Container>
    )
}
