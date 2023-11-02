import styled from 'styled-components'

export const Container = styled.div<{ is_foreign_message: boolean }>`
    display: flex;
    justify-content: ${props => props.is_foreign_message ? 'start' : 'end'};
    background-color: var(--background-color);
    width: 100%;
    max-width: 730px;
`

export const Message = styled.div<{ is_foreign_message: boolean }>`
    --time: ${props => props.is_foreign_message ? 'rgba(var(--color-text-meta-rgb), 0.75)' : 'var(--color-message-meta-own)'};
    --background-color: ${props => props.is_foreign_message ? 'var(--color-background)' : 'var(--color-background-own)'};
    background-color: var(--background-color);
    padding: .3125rem .5rem .375rem;
    border-radius: 10px;
    max-width: 30rem;
`

export const MessageText = styled.span``

export const MessageTime = styled.span`
    color: var(--time);
    font-size: 12px;
    position: relative;
    top: .375rem;
    bottom: 0;
    float: right;
    line-height: 1.35rem;
    height: 21px;
    margin-left: .4375rem;
    margin-right: .1875rem;
`
