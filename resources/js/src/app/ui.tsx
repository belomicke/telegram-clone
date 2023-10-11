import { Router } from '@/pages'
import { useEffect } from 'react'
import { useAppStore } from '@/entities/app'
import './styles.scss'

export const App = () => {
    const theme = useAppStore((state) => state.theme)

    useEffect(() => {
        document.body.classList.add(theme)
    }, [])

    return (
        <Router />
    )
}
