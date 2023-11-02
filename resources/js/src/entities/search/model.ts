import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Chat } from '@/shared/types/Chat/Chat'

export interface SearchResult {
    query: string
    chats: Chat[]
}

interface State {
    results: SearchResult[]
}

interface Actions {
    addResult: (query: string, chats: Chat[]) => void
}

export const useSearchStore = create(
    immer<State & Actions>((set) => ({
        results: [],
        addResult: (query, chats) => {
            set((state) => {
                const result = state.results.find(item => item.query === query)

                if (result) {
                    result.chats = chats
                } else {
                    state.results.push({
                        query,
                        chats
                    })
                }
            })
        }
    }))
)
