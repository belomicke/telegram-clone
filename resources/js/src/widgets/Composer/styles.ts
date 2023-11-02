import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    background: var(--color-background);
    z-index: 1;
    position: relative;
    max-width: 730px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
`

export const Input = styled.input`
    color: var(--color-text);
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    padding: 17.5px 12px;
    padding-right: 0;
    line-height: 1.3125;
`

export const Placeholder = styled.span<{ text_length: number }>`
    position: absolute;
    color: #a2acb4;
    top: 17.5px;
    pointer-events: none;
    unicode-bidi: plaintext;
    text-align: initial;
    line-height: 1.3125;
    font-size: var(--composer-text-size, 1rem);
    bottom: auto;
    left: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    transition: opacity 200ms ease-out, transform 200ms ease-out;

    ${props => props.text_length ? `
        opacity: 0;
        transform: translateX(1rem);
    `
        :
        ''
};
`

export const SendButton = styled.button<{ text_length: number }>`
    outline: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    border: 0;
    background: var(--color-background);
    color: #fff;
    padding: 0;
    line-height: 1.2;
    cursor: pointer;
    transition: background-color .15s, opacity 200ms ease-out, transform 200ms ease-out;

    ${props => props.text_length ? `
        opacity: 1;
        transform: translateX(0);
    ` : `
        opacity: 0;
        transform: translateX(-1rem);
    `};

    &:hover {
        color: #fff;

        & > i {
            color: #fff;
        }
    }

    & > i {
        font-size: 1.5rem;
        color: var(--color-primary);
        transition: color .15s;
    }
`
