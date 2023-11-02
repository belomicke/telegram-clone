import { useMemo } from 'react'
import { SidebarChats } from './SidebarChats'
import { SidebarSettings } from './SidebarSettings'
import { useAppStore } from '@/entities/app'
import { Container } from './styles'

export const Sidebar = () => {
    const sidebarPage = useAppStore((state) => state.sidebarPage)

    const page = useMemo(() => {
        if (sidebarPage === 'chats') {
            return <SidebarChats />
        } else if (sidebarPage.startsWith('settings')) {
            return <SidebarSettings />
        }
    }, [sidebarPage])

    return (
        <Container>
            {page}
        </Container>
    )
}
