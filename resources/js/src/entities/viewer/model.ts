import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Viewer } from '@/shared/types/Viewer/Viewer'

export interface ViewerChat {
    id: number
    type: 'private'
}

interface State {
    viewer: Viewer | undefined
    chats: ViewerChat[]
}

interface Actions {
    setViewer: (data: Viewer) => void
    addViewerChat: (data: ViewerChat) => void
    deleteViewer: () => void
}

export const useViewerStore = create(
    immer<State & Actions>((set) => ({
        viewer: undefined,
        chats: [],
        setViewer: (data: Viewer) => {
            set((state) => {
                state.viewer = data
            })
        },
        deleteViewer: () => {
            set((state) => {
                state.viewer = undefined
            })
        },
        addViewerChat: (data) => {
            set((state) => {
                if (!state.chats.find(item => item.id === data.id && item.type === data.type)) {
                    state.chats.unshift(data)
                }
            })
        }
    }))
)
