import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import Viewer from '@/shared/types/Viewer/Viewer'

interface State {
    user: Viewer | undefined
}

interface Actions {
    setUser: (data: Viewer) => void
}

export const useViewerStore = create(
    immer<State & Actions>((set) => ({
        user: undefined,
        setUser: (data: Viewer) => {
            set((state) => {
                state.user = data
            })
        }
    }))
)
