import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 425px;
    background-color: var(--color-background);
    min-width: var(--left-column-min-width);
    max-width: var(--left-column-max-width);
    overflow: hidden;
    position: relative;
`
