import { useState } from 'react'
import styles from './styles.module.scss'
import { AuthLayout } from '@/shared/ui/AuthLayout'
import { AuthFormInput } from '@/shared/ui/AuthFormInput'
import { TButton } from '@/shared/ui/TButton'
import * as AuthForm from '@/shared/ui/AuthForm'
import { TCheckbox } from '@/shared/ui/TCheckbox'
import { NavLink } from 'react-router-dom'

export const LoginPage = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const submit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <AuthLayout>
            <div
                className={styles.logo}
                style={{ backgroundImage: 'url(storage/static/telegram-logo.svg)' }}
            />
            <h1 className={styles.title}>Telegram</h1>
            <AuthForm.Container onSubmit={submit}>
                <AuthForm.Form>
                    <AuthFormInput
                        label="Имя пользователя"
                        value={username}
                        setValue={setUsername}
                        type="text"
                    />
                    <AuthFormInput
                        label="Пароль"
                        value={password}
                        setValue={setPassword}
                        type="password"
                    />
                    <TCheckbox
                        value={rememberMe}
                        setValue={setRememberMe}
                        label="Запомнить меня"
                    />
                </AuthForm.Form>
                <AuthForm.Footer>
                    <TButton
                        type="submit"
                        text="Войти"
                    />
                </AuthForm.Footer>
            </AuthForm.Container>
            <p>Ещё нет аккаунта? <NavLink to="/sign_up">Зарегистрируйтесь сейчас</NavLink></p>
        </AuthLayout>
    )
}
