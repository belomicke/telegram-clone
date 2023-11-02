import { HTMLAttributes } from 'react'
import { Container, Icon } from './styles'

interface props extends HTMLAttributes<HTMLDivElement> {
    icon: string
    name: string
}

export const TMenuItem = ({ icon, name, ...props }: props) => {
    return (
        <Container {...props}>
            <Icon className={`icon ${icon}`} />
            {name}
        </Container>
    )
}
