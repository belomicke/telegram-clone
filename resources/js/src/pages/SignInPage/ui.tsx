import { SignInForm } from '@/features/auth/SignIn'
import { AuthLayout } from '@/shared/ui/AuthLayout'
import { NavLink } from 'react-router-dom'

export const SignInPage = () => {
    return (
        <AuthLayout>
            <SignInForm />
            <p>Ещё нет аккаунта? <NavLink to="/sign_up">Зарегистрируйтесь сейчас</NavLink></p>
        </AuthLayout>
    )
}
