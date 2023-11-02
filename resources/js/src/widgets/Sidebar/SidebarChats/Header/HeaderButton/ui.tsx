import { useState } from 'react'
import { Dropdown } from './Dropdown'
import { TDropdown } from '@/shared/ui/TDropdown'
import { Button, Container, Icon } from './styles'

interface props {
    stateBack: boolean
    onClick: () => void
}

export const HeaderButton = ({ stateBack, onClick }: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const clickHandler = () => {
        if (!stateBack) {
            setIsOpen(true)
        } else {
            onClick()
        }
    }

    return (
        <TDropdown
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            content={<Dropdown close={() => setIsOpen(false)} />}
        >
            <Container onClick={clickHandler}>
                <Icon state_back={stateBack} />
                <Button />
            </Container>
        </TDropdown>
    )
}
