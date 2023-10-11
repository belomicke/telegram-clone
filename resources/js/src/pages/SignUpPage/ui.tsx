import { NavLink } from 'react-router-dom'
import { AuthLayout } from '@/shared/ui/AuthLayout'
import { SignUp } from '@/features/auth/SignUp'

export const SignUpPage = () => {
    return (
        <AuthLayout>
            <SignUp />
            <p>Уже есть аккаунт? <NavLink to="/sign_in">Войти</NavLink></p>
        </AuthLayout>
    )
}
