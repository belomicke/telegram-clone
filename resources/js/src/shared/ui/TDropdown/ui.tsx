import React, { useEffect, useRef, useState } from 'react'
import { TModal } from '@/shared/ui/TModal'
import { Container, DropdownContainer } from './styles'

interface props {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    children: React.ReactNode
    content: React.ReactNode
}

export const TDropdown = ({ isOpen, setIsOpen, children, content }: props) => {
    const element = useRef<HTMLDivElement>(null)

    const [y, setY] = useState<number>(0)
    const [x, setX] = useState<number>(0)

    useEffect(() => {
        if (element.current) {
            const coords = element.current.getBoundingClientRect()

            setX(coords.x)
            setY(coords.y + coords.height)
        }
    }, [element])

    return (
        <>
            <Container ref={element}>
                {children}
            </Container>
            <TModal active={isOpen} close={() => setIsOpen(false)}>
                <DropdownContainer
                    style={{ position: 'absolute', top: y, left: x }}
                    visible={isOpen}
                >
                    {content}
                </DropdownContainer>
            </TModal>
        </>
    )
}
