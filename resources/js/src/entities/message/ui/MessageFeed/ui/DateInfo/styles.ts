import styled from 'styled-components'

export const DateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    width: 100%;
    margin: 10px 0 20px;
    padding: 0 20px;
`

export const DateText = styled.span<{ theme: 'light' | 'dark' }>`
    display: inline-block;
    background: ${props => props.theme === 'light' ? '#4A8E3A8C' : '#0A0A0A8C'};
    color: #fff;
    font-size: calc(var(--message-text-size, 1rem) - .0625rem);
    font-weight: 500;
    line-height: 1.75;
    padding: 0 .5rem;
    border-radius: var(--border-radius-messages);
    word-break: break-word;
    position: relative;
    text-transform: capitalize;
    z-index: 0;
`
