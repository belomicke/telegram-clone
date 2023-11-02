import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    position: relative;
    max-width: 730px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
`

export const Input = styled.input<{ focused: boolean }>`
    color: var(--color-text);
    background-color: var(--color-background);
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 16px;
    padding: 17.5px 12px;
    padding-right: 0;
    line-height: 1.3125;
    transition: border-bottom-right-radius .15s, border-top-right-radius .15s, width .15s;

    ${props => props.focused && `
        width: calc(100% - 66px);
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    `};
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

export const SendButton = styled.button<{ text_length: number, focused: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 56px;
    border: 0;
    background-color: var(--color-background);
    color: #fff;
    padding: 0;
    line-height: 1.2;
    outline: none !important;
    position: absolute;
    right: 0;

    transition: background-color .15s, opacity 200ms ease-out, transform 200ms ease-out, border-radius .15s;

    ${props => props.focused && `
        cursor: pointer;
        border-radius: 50%;

        &:hover {
            background-color: var(--color-primary);
            color: #fff;

            & > i {
                color: #fff;
            }
        }
    `};


    & > i {
        font-size: 1.5rem;
        color: var(--color-primary);
        transition: color .15s;
    }
`

export const SendButtonIcon = styled.i<{ focused: boolean }>`
    opacity: ${props => props.focused ? '1' : '0'};
    transition: color .15s, opacity .15s !important;
`
