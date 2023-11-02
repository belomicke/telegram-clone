import styled from 'styled-components'

const getColorUser = (number: number) => {
    const colors = {
        '--color-user-1': '#e17076',
        '--color-user-2': '#7bc862',
        '--color-user-3': '#65aadd',
        '--color-user-4': '#a695e7',
        '--color-user-5': '#ee7aae',
        '--color-user-6': '#6ec9cb',
        '--color-user-7': '#faa774'
    }

    return colors[`--color-user-${number}`]
}

export const AvatarContainer = styled.div<{ canOpen: boolean }>`
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    z-index: var(--z-status);
    font-size: 1rem;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: initial;
    unicode-bidi: plaintext;
    cursor: ${props => props.canOpen ? 'pointer' : 'default'};
`

export const Avatar = styled.div<{ saved: boolean, path: string, size: 'auto' | 'large' | 'medium', no_photo: boolean, color_number: number, rounded: boolean }>`
    --color-user: ${props => props.saved ? 'var(--color-primary)' : getColorUser(props.color_number)};
    --radius: ${props => props.rounded ? '50%' : '0px'};
    flex: none;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    color: #fff;
    font-weight: bold;
    display: flex;
    white-space: nowrap;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
    font-size: 1.3125rem;
    transition: transform var(--layer-transition);

    ${props => props.saved && `
        background-image: linear-gradient(var(--color-white) -125%, var(--color-user));
    `};

    ${props => props.path && !props.saved && `
        background-image: url(${props.path});
        background-size: cover;
        background-position: center center;
    `};

    ${props => props.size === 'auto' && `
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
    `};

    ${props => props.size === 'large' && `
        width: 3.375rem;
        height: 3.375rem;
    `};

    ${props => props.size === 'medium' && `
        width: 2.5rem !important;
        height: 2.5rem !important;
    `};
`

export const AvatarInner = styled.span<{ size: 'large', profile: boolean }>`
    overflow: hidden;
    border-radius: var(--radius);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgb(255, 255, 255) -125%, var(--color-user));

    ${props => props.profile && `
        font-size: 14rem;
    `};

    ${props => props.size === 'large' && !props.profile && `
        font-size: 1.3125rem;
    `};
`

export const Badge = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 4;
    --outline-color: var(--color-background);
`

export const Online = styled.div`
    position: absolute;
    bottom: .0625rem;
    right: 0;
    width: .875rem;
    height: .875rem;
    border-radius: 50%;
    border: 2px solid var(--color-background);
    background-color: #0ac630;
    flex-shrink: 0;
    /* opacity: .5; */
    /* transform: scale(0); */
    transition: opacity 200ms,transform 200ms;
`

export const Content = styled.div`
    position: relative;
    z-index: 5;
    width: 100%;
    height: 100%;
`
