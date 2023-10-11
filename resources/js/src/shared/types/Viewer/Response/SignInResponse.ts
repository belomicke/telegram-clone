import { AxiosResponse } from 'axios'

export type SignInResponse = AxiosResponse<{ success: true, token: string }>
