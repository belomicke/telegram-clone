import styled from 'styled-components'

export const LastMessageContainer = styled.div`
    margin-right: .1875rem;
    flex-shrink: 0;
    font-size: 12px;
    display: flex;
    align-items: center;
`

export const LastMessage = styled.span<{ active: boolean }>`
    color: ${props => props.active ? 'var(--color-text-meta)': '#686C72'};
`
