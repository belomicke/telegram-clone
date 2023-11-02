import styled from 'styled-components'

export const Container = styled.div<{ theme: string }>`
    display: flex;
    background-image: url(${props => `/storage/static/chat-bg-pattern-${props.theme}.png`});
    background-position: top right;
    background-size: 510px auto;
    background-repeat: repeat;
    height: 100%;
    width: 100%;

    ${props => props.theme === 'light' && 'background-color: #99BA92'};
`

export const Content = styled.div`
    border-left: 1px solid var(--color-borders);
    width: calc(100% - 425px);
`
