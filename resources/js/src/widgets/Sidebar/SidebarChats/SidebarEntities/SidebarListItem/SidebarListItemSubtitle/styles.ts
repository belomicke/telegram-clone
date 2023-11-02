import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 1.5rem;
    text-align: initial;
    unicode-bidi: plaintext;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const LastMessage = styled.p`
    padding-right: .25rem;
    flex-grow: 1;
    color: var(--color-text-secondary);
    unicode-bidi: plaintext;
    font-size: 1rem;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
`

export const SenderName = styled.span`
    color: var(--color-chat-username);
`

export const Colon = styled.span`
    margin-inline-end: .1875rem;
    color: rgb(170, 170, 170);
`

export const MessageBody = styled.span<{ active: boolean }>`
    color: ${props => props.active ? 'var(--color-text-secondary);' : 'rgb(170, 170, 170)'};
`
