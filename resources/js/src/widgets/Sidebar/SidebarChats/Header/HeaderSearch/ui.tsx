import { InputHTMLAttributes } from 'react'
import { Spinner } from '@/shared/ui/Spinner'
import { Container, Icon, Input, Placeholder } from './styles'

interface props extends InputHTMLAttributes<HTMLInputElement> {
    isLoading: boolean
}

export const HeaderSearch = ({ value, isLoading, ...props }: props) => {
    return (
        <Container>
            <Input
                placeholder=""
                dir="auto"
                value={value}
                autoComplete="off"
                type="text"
                {...props}
            />
            <Icon className="tgico input-search-icon input-search-part will-animate">
                {isLoading ?
                    <Spinner />
                    :
                    ''
                }
            </Icon>
            {String(value).length === 0 &&
                <Placeholder>Поиск</Placeholder>
            }
        </Container>
    )
}
