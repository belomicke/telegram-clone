import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { getThemeFromLocalStorage } from '@/shared/helpers/getThemeFromLocalStorage'

export type SidebarPages = 'chats' | 'settings-global' | 'settings-edit-viewer'

interface State {
    theme: 'light' | 'dark',
    sidebarPage: SidebarPages
}

interface Actions {
    toggleTheme: () => void
    setSidebarPage: (value: SidebarPages) => void
}

export const useAppStore = create(
    immer<State & Actions>((set) => ({
        theme: getThemeFromLocalStorage(),
        sidebarPage: 'chats',
        toggleTheme: () => {
            set((state) => {
                if (state.theme === 'light') {
                    localStorage.setItem('theme', 'dark')
                    state.theme = 'dark'
                } else {
                    localStorage.setItem('theme', 'light')
                    state.theme = 'light'
                }
            })
        },
        setSidebarPage: (value) => {
            set((state) => {
                state.sidebarPage = value
            })
        }
    }))
)
