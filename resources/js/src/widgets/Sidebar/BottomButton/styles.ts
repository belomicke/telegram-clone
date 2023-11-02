import styled from 'styled-components'

export const Button = styled.button<{ visible: boolean }>`
    outline: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    border: 0;
    background-size: cover;
    padding: .625rem;
    line-height: 1.2;
    cursor: var(--custom-cursor, pointer);
    text-transform: uppercase;
    flex-shrink: 0;
    overflow: hidden;
    transition: background-color .15s, color .15s;
    text-decoration: none !important;

    position: absolute;
    bottom: 1rem;
    z-index: 2;

    width: 3.5rem;
    border-radius: 50%;

    background-color: var(--color-primary);
    color: var(--color-white);
    --ripple-color: rgba(0, 0, 0, 0.08);
    right: 1.5rem;

    ${props => props.visible ? 'opacity: 1' : 'opacity: 0'};

    &:hover {
        background-color: var(--color-primary-shade);
    }
`

export const Icon = styled.i`
    font-size: 1.5rem;
`
