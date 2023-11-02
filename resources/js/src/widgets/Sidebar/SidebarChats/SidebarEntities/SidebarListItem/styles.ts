import styled from 'styled-components'

export const Container = styled.div<{ active: boolean }>`
    ${props => props.active ?
        `
            --background-color: var(--color-chat-active) !important;
            --color-text: var(--color-white);
            --color-text-meta-colored: var(--color-white);
            --color-text-meta: var(--color-white);
            --color-text-secondary: var(--color-white);
            --color-error: var(--color-white);
            --color-list-icon: var(--color-white);
            --color-chat-username: var(--color-white);
        `
        :
        `
            --background-color: var(--color-background);
            --background-hover-color: var(--color-chat-hover);
        `
}
    display: flex;
    align-items: center;
    grid-gap: 10px;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    padding: 10px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    color: var(--color-text);
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer !important;

    &:hover {
        --background-color: ${props => props.active ? 'var(--color-chat-active) !important' : 'var(--color-chat-hover)'};
    }
`

export const Info = styled.div`
    flex: 1;
    overflow: hidden;
`

export const InfoRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`

export const TitleContainer = styled.div`
    display: flex !important;
    justify-content: flex-start;
    align-items: center;
    gap: .25rem;
    text-align: initial;
    unicode-bidi: plaintext;
    text-overflow: ellipsis;
    line-height: 1.5rem;
    overflow: hidden;
`

export const Title = styled.h3`
    font-weight: 500;
    text-align: initial;
    unicode-bidi: plaintext;
    overflow: hidden;
    font-size: 1rem;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const Separator = styled.div`
    flex-grow: 1;
    min-width: .5rem;
`

