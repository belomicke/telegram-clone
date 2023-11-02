import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const DropdownContainer = styled.div<{ visible: boolean }>`
    overflow: hidden;
    display: block;
    list-style: none;
    margin: 0;
    position: absolute;
    background-color: var(--color-background);
    box-shadow: 0 .25rem .5rem .125rem var(--color-default-shadow);
    border-radius: var(--border-radius-default);
    z-index: var(--z-menu-bubble);
    overscroll-behavior: contain;
    color: var(--color-text);
    --offset-y: calc(100% + 0.5rem);
    --offset-x: 0;

    opacity: ${props => props.visible ? '1' : '0'};

    background: var(--color-background);
    padding: .25rem 0;
    min-width: 17rem;
    max-height: calc(100*var(--vh) - 3.75rem);
    overflow-y: auto;

    transition: opacity 150ms cubic-bezier(0.2, 0, 0.2, 1), transform 150ms cubic-bezier(0.2, 0, 0.2, 1) !important;
`
