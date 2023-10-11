import { AxiosResponse } from 'axios'

export type SingInResponse = AxiosResponse<{ success: true, token: string }>
