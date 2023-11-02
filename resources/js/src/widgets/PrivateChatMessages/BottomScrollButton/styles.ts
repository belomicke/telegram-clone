import styled from 'styled-components'
import { BottomButton } from '@/widgets/Sidebar/BottomButton'

export const Button = styled(BottomButton)`
    background-color: var(--color-background);
    color: var(--color-text-secondary);
    position: absolute;
    bottom: 66px;
    transition: opacity .15s, background-color .15s, color .15s;

    &:hover {
        color: var(--color-white);
    }
`
