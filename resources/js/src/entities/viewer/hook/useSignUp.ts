import { SignUpDto } from '@/shared/types/Viewer/DTO/SignUpDto'
import { viewerApi } from '@/entities/viewer/api'

export const useSignUp = () => {
    const mutate = async (dto: SignUpDto) => {
        const res = await viewerApi.signUp(dto)
        const data = res.data

        return data.success
    }

    return {
        mutate
    }
}
