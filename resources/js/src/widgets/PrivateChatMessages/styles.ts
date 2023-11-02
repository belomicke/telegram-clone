import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 10px;
    max-width: var(--messages-container-width);
    min-height: 100%;
    position: relative;
    margin: auto auto 0;
    transition: transform var(--layer-transition);
`

export const FetchTrigger = styled.div`
    position: absolute;
    top: 0;
    height: 500px;
    width: 100%;
    pointer-events: none;
    z-index: 1000;
`
