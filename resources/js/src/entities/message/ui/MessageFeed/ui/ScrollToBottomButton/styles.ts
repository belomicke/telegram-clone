import styled from 'styled-components'
import { BottomButton } from '@/widgets/Sidebar/BottomButton'

export const Container = styled.div<{ visible: boolean }>`
    position: absolute;
    bottom: 66px;
    right: 0;

    opacity: ${props => props.visible ? '1' : '0'};;
    transform: ${props => props.visible ? 'translateY(0)' : 'translateY(2rem)'};
    transition: opacity .15s, transform .15s;
`

export const Button = styled(BottomButton)`
    background-color: var(--color-background);
    color: var(--color-text-secondary);
    transition: color .15s, background-color .15s;

    & > i {
        font-size: 1.75rem !important;
        transition: color .15s;
    }

    &:hover {
        background-color: var(--color-primary);
    }

    &:hover > i {
        color: var(--color-white);
    }
`
