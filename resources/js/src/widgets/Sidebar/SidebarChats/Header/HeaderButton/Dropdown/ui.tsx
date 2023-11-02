import { useAppStore } from '@/entities/app'
import { TMenuItem } from '@/shared/ui/TMenuItem'
import { SidebarPages } from '@/entities/app/model'
import { useLogout, useViewer } from '@/entities/viewer'
import { useNavigate } from 'react-router'

interface props {
    close: () => void
}

export const Dropdown = ({ close }: props) => {
    const toggleTheme = useAppStore((state) => state.toggleTheme)
    const setSidebarPage = useAppStore((state) => state.setSidebarPage)
    const { mutate: logout } = useLogout()

    const { viewer } = useViewer()
    const navigate = useNavigate()

    const changePage = (value: SidebarPages) => {
        setSidebarPage(value)
        close()
    }

    const logOut = async () => {
        await logout()
        close()
    }

    const savedMessagesHandler = () => {
        navigate(`/private/${viewer.id}`)
        close()
    }

    return (
        <>
            <TMenuItem
                icon="icon-saved-messages"
                name="Избранное"
                onClick={savedMessagesHandler}
            />
            <TMenuItem
                icon="icon-darkmode"
                name="Ночной режим"
                onClick={toggleTheme}
            />
            <TMenuItem
                icon="icon-settings"
                name="Настройки"
                onClick={() => changePage('settings-global')}
            />
            <TMenuItem
                icon="icon-logout"
                name="Выйти"
                onClick={logOut}
            />
        </>
    )
}
