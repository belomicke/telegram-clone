import styled from 'styled-components'

export const Button = styled.button<{ variant: 'primary' }>`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none !important;
    width: 100%;
    height: 3.5rem;
    border: 0;
    border-radius: 0.75rem;
    background-size: cover;
    padding: .625rem;
    line-height: 1.2;
    cursor: pointer;
    text-transform: uppercase;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    transition: background-color .15s,color .15s;
    text-decoration: none !important;

    ${props => props.variant === 'primary' && `
        background: var(--color-primary);
        color: #ffffff;

        &:hover {
            background-color: var(--color-primary-shade);
        }
    `}
`
