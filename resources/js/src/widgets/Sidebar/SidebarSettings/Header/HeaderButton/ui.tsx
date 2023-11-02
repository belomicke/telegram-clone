import React, { HTMLAttributes } from 'react'
import { SidebarPages, useAppStore } from '@/entities/app/model'
import { Button, Icon } from './styles'

interface props extends HTMLAttributes<HTMLButtonElement> {
    icon: string
    path: SidebarPages
}

export const HeaderButton = ({ icon, path }: props) => {
    const setSidebarPage = useAppStore((state) => state.setSidebarPage)

    return (
        <Button onClick={() => setSidebarPage(path)}>
            <Icon className={`icon ${icon}`} />
        </Button>
    )
}
