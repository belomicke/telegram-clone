import styled from 'styled-components'

export const Container = styled.div`
    padding: 6.8125rem 1.5rem 1.5rem;
    max-width: 25.5rem;
    text-align: center;
    margin: 0 auto;
`

export const Logo = styled.div`
    background: url('http://localhost/storage/static/telegram-logo.svg') center no-repeat;
    width: 10rem;
    height: 10rem;
    margin-bottom: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    background-size: 100%;
`

export const Title = styled.h1`
    font-size: 1.25rem;
    line-height: 1;
    margin-bottom: 3rem;

    @media (min-width: 600px) {
        & {
            font-size: 2rem;
            line-height: 1.5;
        }
    }
`
