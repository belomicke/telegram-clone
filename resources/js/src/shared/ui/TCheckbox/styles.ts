import styled from 'styled-components'

export const Container = styled.label`
    display: block;
    position: relative;
    padding-left: 4.5rem;
    text-align: left;
    margin-bottom: 1.5rem;
    line-height: 1.5rem;
    cursor: pointer;
`

export const Checkbox = styled.div`

`

export const Label = styled.span`
    display: flex;
    align-items: center;
    text-align: initial;
    flex-wrap: wrap;
    column-gap: .25rem;

    &::before, &::after {
        pointer-events: none;
        content: "";
        display: block;
        position: absolute;
        left: 1.1875rem;
        top: .1875rem;
        width: 1.125rem;
        height: 1.125rem;
    }

    &::before {
        border: 2px solid rgb(218, 220, 224);
        border-radius: .25rem;
        background-color: var(--color-background);
        transition: border-color .1s ease,background-color .1s ease;
    }

    &::after {
        background: center no-repeat url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjkuOEw1LjggOC45IDIuMSA1LjJjLS40LS40LTEuMS0uNC0xLjYgMC0uNC40LS40IDEuMSAwIDEuNkw1IDExLjJjLjQuNCAxLjEuNCAxLjYgMGw4LjktOC45Yy40LS40LjQtMS4xIDAtMS42LS41LS40LTEuMi0uNC0xLjYuMXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==);
        background-size: .875rem;
        opacity: 0;
        transition: opacity .1s ease;
    }

    input:checked~&::before {
        border-color: var(--color-primary);
        background-color: var(--color-primary);
    }

    input:checked~&::after {
      opacity: 1;
    }
`
