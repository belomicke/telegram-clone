import styled from 'styled-components'

export const Container = styled.div`
    --border-width: 1px;
    --height: 42px;
    --border-radius: 22px;
    --padding-horizontal: calc(var(--height) + 3px - var(--border-width));
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    --padding: 1rem;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    width: 100%;
    position: relative;
    z-index: 1;
    --border-width: inherit;
    --padding-horizontal: inherit;
    background-color: var(--color-background);
    border: 1px solid var(--color-borders);
    padding: 0 var(--padding-horizontal);
    height: var(--height);
    min-height: var(--height) !important;
    max-height: var(--height) !important;
    line-height: var(--height);
    transition: border-color .2s ease-in-out;
    caret-color: var(--primary-color);
    color: var(--primary-text-color);

    &:focus {
        outline: none;
        border-width: 2px;
        border-color: var(--color-primary);

        &:hover {
            outline: none;
            border-color: var(--color-primary);
        }
    }
`

export const Icon = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    inset-inline-start: .8125rem;
    pointer-events: none;
    position: absolute;
    text-align: center;
    font-size: 1.5rem;
    color: var(--color-text-secondary);
    line-height: 1;
    z-index: 1;

    ${Input}:focus ~ & {
        color: var(--color-primary);
    }
`

export const Placeholder = styled.span`
    position: absolute;
    color: var(--color-text-secondary);
    z-index: 1;
    white-space: nowrap;
    left: calc(var(--padding-horizontal) + var(--border-width));
    pointer-events: none;
    transform-origin: left center;
`
