import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: .375rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0);
        border-radius: .375rem;
        box-shadow: 0 0 1px rgba(255, 255, 255, .01);
    }

    &:hover,
    &:focus,
    &:focus-within {
        scrollbar-color: rgba(90, 90, 90, 0.3) transparent;

        &::-webkit-scrollbar-thumb {
            background-color: rgba(90, 90, 90, 0.3);
        }
    }
`

export const FetchTrigger = styled.div`
    position: absolute;
    top: 0;
    height: 500px;
    width: 100%;
    pointer-events: none;
    z-index: 1000;
`
