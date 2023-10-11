import { AxiosResponse } from 'axios'
import { Viewer } from '@/shared/types/Viewer'

export type GetViewerResponse = AxiosResponse<{ success: boolean, viewer: Viewer }>
