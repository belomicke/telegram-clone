import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0;
    border: 0;
    height: 40px;
    width: 40px;
    color: var(--color-text-secondary);
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: var(--color-interactive-element-hover);
    }
`

export const Icon = styled.i`
    font-size: 1.5rem;
`
