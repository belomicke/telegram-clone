import styled from 'styled-components'

export const Container = styled.div`
    background: none;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    line-height: 1.5rem;
    white-space: nowrap;
    color: var(--color-text);
    --ripple-color: rgba(0, 0, 0, 0.08);
    cursor: var(--custom-cursor, pointer);
    unicode-bidi: plaintext;

    font-size: .875rem;
    margin: .125rem .25rem;
    padding: .25rem;
    border-radius: .375rem;
    width: auto;
    font-weight: 500;
    transform: scale(1);
    transition: .15s ease-in-out transform;

    &:hover {
        background: var(--color-background-compact-menu-hover);
        text-decoration: none;
    }
`

export const Icon = styled.i`
    max-width: 1.25rem;
    font-size: 1.25rem;
    margin-left: .5rem;
    margin-right: 1.25rem;
    color: var(--color-icon-secondary);
`
