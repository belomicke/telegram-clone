import { SignInDto } from '@/shared/types/Viewer/DTO/SignInDto'
import { viewerApi } from '@/entities/viewer/api'

export const useSignIn = () => {
    const mutate = async (dto: SignInDto) => {
        const res = await viewerApi.signIn(dto)
        const data = res.data

        if (data.success) {
            localStorage.setItem('token', data.token)
            window.location.reload()
        }
    }

    return {
        mutate
    }
}
