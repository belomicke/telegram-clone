import styled from "styled-components"

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 2rem;
    display: flex !important;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #fff;
    font-size: 3rem;
    cursor: var(--custom-cursor, pointer);
    position: relative;
    overflow: hidden;
    outline: none !important;
    transition: border-radius 200ms;

    &.filled::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.4);
    }
`

export const Icon = styled.i`
    transform: scale(1);
    transition: transform .15s linear;
    z-index: var(--z-register-add-avatar);

    ${Container}:hover & {
        transform: scale(1.2);
    }
`

export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
