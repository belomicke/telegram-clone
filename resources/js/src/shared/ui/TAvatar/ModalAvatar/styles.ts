import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, .9);
`

export const Avatar = styled.div<{ path: string }>`
    background-image: url(${ props => props.path });
    background-size: cover;
    position: relative;
    width: 640px;
    height: 640px;
`
