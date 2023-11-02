import { AxiosResponse } from 'axios'
import { Viewer } from '@/shared/types/Viewer'

export type EditViewerResponse = AxiosResponse<{ success: boolean, viewer: Viewer }>
