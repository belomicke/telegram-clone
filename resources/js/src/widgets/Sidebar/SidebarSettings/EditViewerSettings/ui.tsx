import { useMemo, useState } from 'react'
import { AvatarChanger } from './AvatarChanger'
import { BottomButton } from '../../BottomButton'
import { Header } from '@/widgets/Sidebar/SidebarSettings/Header'
import { useViewer } from '@/entities/viewer'
import { useEditViewer } from '@/entities/viewer/hook/useEditViewer'
import { AuthFormInput } from '@/shared/ui/AuthFormInput'
import { useAppStore } from '@/entities/app'
import { Body } from './styles'

export const EditViewerSettings = () => {
    const { viewer } = useViewer()
    const [name, setName] = useState<string>(viewer.name)
    const [avatar, setAvatar] = useState<File | undefined>()
    const { mutate } = useEditViewer()
    const setSidebarPage = useAppStore((state) => state.setSidebarPage)

    const avatarChangeHandler = (file: File) => {
        setAvatar(file)
    }

    const formIsValid = useMemo(() => {
        if (name !== viewer.name) return true
        if (avatar !== undefined) return true

        return false
    }, [name, avatar])

    const changeViewerSettings = async () => {
        await mutate({
            name,
            avatar
        })
        setSidebarPage('settings-global')
    }

    return (
        <>
            <Header
                title="Изменить профиль"
                prevPage="settings-global"
            />
            <Body>
                <AvatarChanger
                    onChange={avatarChangeHandler}
                />
                <AuthFormInput
                    label='Имя'
                    value={name}
                    setValue={setName}
                />
            </Body>
            <BottomButton
                icon='icon-check'
                visible={formIsValid}
                onClick={changeViewerSettings}
            />
        </>
    )
}
