import SignInDto from '@/shared/types/Viewer/DTO/SignInDto'
import { viewerApi } from '@/Entities/Viewer/api'

export const useSignIn = () => {
    const mutate = async (dto: SignInDto) => {
        const res = await viewerApi.signIn(dto)
        const data = res.data

        if (data.success) {
            localStorage.setItem('token', data.token)
            console.log(data.token)
        }
    }

    return {
        mutate
    }
}
