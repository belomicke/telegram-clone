import { FormEvent, useEffect, useRef, useState } from 'react'
import { useSignIn } from '@/entities/viewer'
import * as AuthForm from '@/shared/ui/AuthForm'
import { AuthFormInput } from '@/shared/ui/AuthFormInput'
import { TCheckbox } from '@/shared/ui/TCheckbox'
import { TButton } from '@/shared/ui/TButton'

export const SignInForm = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const { mutate } = useSignIn()

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault()
        await mutate({
            username,
            password,
            remember: rememberMe
        })
    }

    return (
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
    )
}
