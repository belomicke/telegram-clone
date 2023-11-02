import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSignUp } from '@/entities/viewer'
import * as AuthForm from '@/shared/ui/AuthForm'
import { AuthFormInput } from '@/shared/ui/AuthFormInput'
import { TButton } from '@/shared/ui/TButton'

export const SignUp = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const { mutate } = useSignUp()

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault()
        const success = await mutate({
            username,
            email,
            password,
        })

        if (success) navigate('sign_in')
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
