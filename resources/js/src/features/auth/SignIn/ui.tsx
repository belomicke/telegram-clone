import { FormEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as AuthForm from '@/shared/ui/AuthForm'
import { AuthFormInput } from '@/shared/ui/AuthFormInput'
import { TCheckbox } from '@/shared/ui/TCheckbox'
import { TButton } from '@/shared/ui/TButton'
import { AuthLayout } from '@/shared/ui/AuthLayout'
import SignInDto from '@/shared/types/Viewer/DTO/SignInDto'

interface props {
    onSubmit: (data: SignInDto) => void
}

export const SignInForm = ({ onSubmit }: props) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
        onSubmit({
            username,
            password,
            remember: rememberMe
        })
    }

    return (
        <AuthLayout>
            <AuthForm.Container onSubmit={onSubmitHandler}>
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
