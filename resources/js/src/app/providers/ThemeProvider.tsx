import React, { useEffect } from 'react'
import { useAppStore } from '@/entities/app'

interface props {
    children: React.ReactNode
}


export const ThemeProvider = ({ children }: props) => {
    const theme = useAppStore((state) => state.theme)

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.remove('light')
            document.body.classList.add(theme)
        } else {
            document.body.classList.remove('dark')
            document.body.classList.add(theme)
        }
    }, [theme])

    return children
}
