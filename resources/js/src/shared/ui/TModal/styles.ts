import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100000;
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100001;
`

export const Content = styled.div`
    position: relative;
    z-index: 100002;
`
