import { InputHTMLAttributes, useRef } from 'react'
import { Container, Input, Label } from './styles'

interface props extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    value: string
    setValue: (value: string) => void
}

export const AuthFormInput = ({ label, value, setValue, ...props }: props) => {
    const ref = useRef<HTMLInputElement>(null)

    return (
        <Container>
            <Input
                value={value}
                dir="auto"
                onChange={(e) => setValue(e.target.value)}
                autoComplete="off"
                ref={ref}
                {...props}
            />
            <Label value_length={value.length}>
                {label}
            </Label>
        </Container>
    )
}
