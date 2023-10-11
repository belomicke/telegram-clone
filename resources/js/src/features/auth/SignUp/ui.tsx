import * as AuthForm from '@/shared/ui/AuthForm'
import { AuthFormInput } from '@/shared/ui/AuthFormInput'
import { TButton } from '@/shared/ui/TButton'
import { FormEvent, useState } from 'react'
import useSignIn from '@/features/auth/SignIn/model'

export const SignUp = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

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
        <AuthForm.Container onSubmit={submit}>
            <AuthForm.Form>
                <AuthFormInput
                    label="Имя пользователя"
                    value={username}
                    setValue={setUsername}
                    type="text"
                />
                <AuthFormInput
                    label="Адрес электронной почты"
                    value={email}
                    setValue={setEmail}
                    type="email"
                />
                <AuthFormInput
                    label="Пароль"
                    value={password}
                    setValue={setPassword}
                    type="password"
                />
            </AuthForm.Form>
            <AuthForm.Footer>
                <TButton
                    type="submit"
                    text="Зарегистрироваться"
                />
            </AuthForm.Footer>
        </AuthForm.Container>
    )
}
