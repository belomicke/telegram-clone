import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface State {
    theme: 'light' | 'dark'
}

interface Actions {
    switchTheme: () => void
}

export const useAppStore = create(
    immer<State & Actions>((set) => ({
        theme: localStorage.getItem('theme')?? 'light',
        switchTheme: () => {
            set((state) => {
                if (state.theme === 'light') {
                    state.theme = 'dark'
                } else {
                    state.theme = 'light'
                }
            })
        }
    }))
)
