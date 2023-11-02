import { useState } from 'react'
import { SidebarEntities } from './SidebarEntities'
import { useViewerChats } from '@/entities/chat/hook/useViewerChats'
import { useSearchUsers } from '@/entities/search/hook/useSearchUsers'
import { Header } from './Header/ui'

export const SidebarChats = () => {
    const { data: chats } = useViewerChats()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [stateBack, setStateBack] = useState<boolean>(false)

    const {
        data: results,
        fetch,
        isLoading
    } = useSearchUsers({ enabled: stateBack })

    const headerButtonClickHandler = () => {
        if (stateBack) {
            setSearchQuery('')
            setStateBack(false)
        }
    }

    const inputValueChangeHandler = async (value: string) => {
        setSearchQuery(value)
        await fetch(value)
    }

    const clickHandler = () => {
        setSearchQuery('')
        setStateBack(false)
    }

    return (
        <>
            <Header
                stateBack={stateBack}
                searchQuery={searchQuery}
                isFetching={isLoading}
                dropdownButtonClickHandler={headerButtonClickHandler}
                searchInputChangeHandler={inputValueChangeHandler}
                searchInputFocusHandler={() => setStateBack(true)}
            />
            {stateBack ?
                <SidebarEntities
                    chats={results ? results : []}
                    onClick={clickHandler}
                />
                :
                <SidebarEntities
                    chats={chats}
                    withLastMessage
                    withOnlineStatus
                    canBeActive
                />
            }
        </>
    )
}
