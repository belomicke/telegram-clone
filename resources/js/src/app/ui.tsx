import { DisableScrollByKeyboardEventProvider } from './providers/DisableScrollByKeyboardEventProvider'
import { NewMessageHandleProvider } from './providers/NewMessageHandleProvider'
import { ThemeProvider } from './providers/ThemeProvider'
import { Router } from '@/pages'
import './styles/styles.scss'

export const App = () => {
    return (
        <NewMessageHandleProvider>
            <ThemeProvider>
                <DisableScrollByKeyboardEventProvider>
                    <Router />
                </DisableScrollByKeyboardEventProvider>
            </ThemeProvider>
        </NewMessageHandleProvider>
    )
}
