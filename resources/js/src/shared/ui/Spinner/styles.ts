import styled, { keyframes } from 'styled-components'

export const Container = styled.div<{ size: number }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
`

export const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Inner = styled.div<{ theme: 'dark' | 'light' }>`
    background-image: ${props => props.theme === 'dark' ? 'var(--spinner-dark-blue-data)' : 'var(--spinner-blue-data)'};

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    animation-name: ${Spin};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`
