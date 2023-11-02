import { useEffect } from 'react'

export const DisableScrollByKeyboardEventProvider = ({ children }) => {
    useEffect(() => {
        window.addEventListener('keydown', function (e) {
            const keys = ['Home', 'Down', 'PageUp', 'PageDown']

            if (e.key in keys) {
                e.preventDefault()
            }
        })
    }, [])

    return children
}
