import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    text-align: center;
    font-size: 1.5rem;
    line-height: 1;
    border-radius: 50% !important;
    color: var(--color-text-secondary);
    background-color: transparent;
    border: none;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: visible !important;
    font-weight: 400 !important;
    cursor: pointer !important;
    pointer-events: all !important;

    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    position: absolute;
    inset: 0;
    z-index: 2;
    margin: 0;
    transition: background-color .15s ease-in-out;

    &:hover {
        background-color: var(--color-interactive-element-hover);
    }
`

export const Icon = styled.div<{ state_back: boolean }>`
    --color: var(--color-text-secondary);
    position: absolute;
    width: 1.125rem;
    height: .125rem;
    border-radius: .125rem;
    background-color: var(--color);
    transform: rotate(0);

    transition: transform .25s;

    &:before {
        width: 1.125rem;
        height: .125rem;
        border-radius: .125rem;
        background-color: var(--color-text-secondary);
        transform: rotate(0);
        top: -.3125rem;
        transition: transform .25s;
        position: absolute;
        left: 0;
        content: "";
    }

    &:after {
        width: 1.125rem;
        height: .125rem;
        border-radius: .125rem;
        background-color: var(--color-text-secondary);
        transform: rotate(0);
        top: .3125rem;
        transition: transform .25s;
        position: absolute;
        left: 0;
        content: "";
    }

    ${props => props.state_back ? `
        transform: rotate(180deg);

        &:before {
            transform: rotate(45deg) scaleX(.75) translate(.375rem, -.1875rem);
        }

        &:after {
            transform: rotate(-45deg) scaleX(.75) translate(.375rem, .1875rem);
        }
    `
        :
        ''};
`
