import React, { ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    variant?: 'primary'
}

export const TButton = ({ text, variant = 'primary', ...props }: props) => (
    <Button variant={variant} {...props}>{text}</Button>
)
