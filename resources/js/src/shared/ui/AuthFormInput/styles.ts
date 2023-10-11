import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 3.375rem;
    padding: calc(.75rem - 1px) calc(.9rem - 1px);
    border: 1px solid var(--color-borders-input);
    border-radius: 0.75rem;
    color: var(--color-text);
    background-color: var(--color-background);
    outline: none;
    transition: border-color .15s ease;
    word-break: break-word;
    -webkit-appearance: none;
    font-size: 1rem;
    line-height: 1.25rem;

    &:-webkit-autofill, &:focus:-webkit-autofill {
        box-shadow: inset 0 0 0 10rem var(--color-background);
        -webkit-text-fill-color: var(--color-text);
    }

    &:hover {
        border-color: var(--color-primary);
    }

    &:focus {
        border-color: var(--color-primary);
        box-shadow: inset 0 0 0 1px var(--color-primary);
        caret-color: var(--color-primary);
    }
`

export const Label = styled.label<{ value_length: number }>`
    display: block;
    padding: 0 .25rem;
    position: absolute;
    left: .75rem;
    top: .9375rem;
    background-color: var(--color-background);
    font-size: 1rem;
    font-weight: 400;
    color: #a2acb4;
    cursor: text;
    pointer-events: none;
    transform-origin: left center;
    white-space: nowrap;
    transition: transform .15s ease-out,color .15s ease-out;

    ${Input}:focus + &, ${Input}:hover + & {
        color: var(--color-primary);
    }

    ${Input}:focus + &, ${Input}:-webkit-autofill + & {
        transform: scale(0.75) translate(-0.5rem, -2.25rem);
    }

    ${props => props.value_length && `
        transform: scale(0.75) translate(-0.5rem, -2.25rem);
    `};
`
