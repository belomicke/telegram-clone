import axios, { AxiosResponse } from 'axios'
import SuccessResponse from '@/shared/types/api/SuccessResponse'
import { GetViewerResponse, SignInDto, SignInResponse, SignUpDto, SignUpResponse } from '@/shared/types/Viewer'

const signIn = async (data: SignInDto): Promise<SignInResponse> => {
    return await axios.post('http://localhost/api/auth/sign_in', data)
}

const signUp = async (data: SignUpDto): Promise<SignUpResponse> => {
    return await axios.post('http://localhost/api/auth/sign_up', data)
}

const getViewer = async (): Promise<GetViewerResponse> => {
    return await axios.get('http://localhost/api/auth/viewer')
}

const logOut = async (): Promise<AxiosResponse<SuccessResponse>> => {
    return await axios.delete('http://localhost/api/auth/log_out')
}

export const viewerApi = {
    getViewer,

    signIn,
    signUp,
    logOut
}
