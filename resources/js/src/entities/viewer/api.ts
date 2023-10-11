import axios from 'axios'
import SignInDto from '@/shared/types/Viewer/DTO/SignInDto'
import SignUpDto from '@/shared/types/Viewer/DTO/SignUpDto'
import SignUpResponse from '@/shared/types/Viewer/Response/SignUpResponse'
import SignInResponse from '@/shared/types/Viewer/Response/SingInResponse'
import GetViewerResponse from '@/shared/types/Viewer/Response/GetViewerResponse'

const signIn = async (data: SignInDto): Promise<SignInResponse> => {
    return await axios.post('http://localhost/api/auth/sign_in', data)
}

const signUp = async (data: SignUpDto): Promise<SignUpResponse> => {
    return await axios.post('http://localhost/api/auth/sign_up', data)
}

const getViewer = async (): Promise<GetViewerResponse> => {
    return await axios.get('http://localhost/api/auth/viewer')
}

export const viewerApi = {
    getViewer,

    signIn,
    signUp
}
