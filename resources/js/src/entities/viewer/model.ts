import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import Viewer from '@/shared/types/Viewer/Viewer'

interface State {
    viewer: Viewer | undefined
}

interface Actions {
    setViewer: (data: Viewer) => void
    deleteViewer: () => void
}

export const useViewerStore = create(
    immer<State & Actions>((set) => ({
        viewer: undefined,
        setViewer: (data: Viewer) => {
            set((state) => {
                state.viewer = data
            })
        },
        deleteViewer: () => {
            set((state) => {
                state.viewer = undefined
            })
        }
    }))
)
