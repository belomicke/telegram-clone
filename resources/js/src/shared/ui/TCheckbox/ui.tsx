import { Container, Label } from './styles'

interface props {
    value: boolean
    setValue: (value: boolean) => void
    label: string
}

export const TCheckbox = ({ value, setValue, label }: props) => {
    return (
        <Container>
            <input
                type="checkbox"
                value={Number(value)}
                onChange={() => setValue(!value)}
                style={{ display: 'none' }}
            />
            <Label>{label}</Label>
        </Container>
    )
}
