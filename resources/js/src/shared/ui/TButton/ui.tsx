import React, { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export const AuthFormSubmitButton = ({ text, ...props }: props) => (
    <button className={styles.button} {...props}>{text}</button>
)
