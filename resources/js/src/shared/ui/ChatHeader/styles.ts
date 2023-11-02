import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    box-shadow: 0 2px 2px var(--color-light-shadow);
    background: var(--color-background);
    position: relative;
    padding: 10px 20px;
    flex-shrink: 0;
    height: 3.5rem;
`

export const ChatInfo = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 10px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    overflow: hidden;
`

export const Title = styled.h3`
    display: flex !important;
    align-items: center;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    white-space: pre;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    unicode-bidi: plaintext;
`
