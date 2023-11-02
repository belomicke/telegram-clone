import { useMemo } from 'react'
import { GlobalSettings } from './GlobalSettings'
import { EditViewerSettings } from './EditViewerSettings'
import { useAppStore } from '@/entities/app'

export const SidebarSettings = () => {
    const sidebarPage = useAppStore((state) => state.sidebarPage)

    return useMemo(() => {
        const pages = {
            'settings-global': <GlobalSettings />,
            'settings-edit-viewer': <EditViewerSettings />
        }

        return pages[sidebarPage]
    }, [sidebarPage])
}
