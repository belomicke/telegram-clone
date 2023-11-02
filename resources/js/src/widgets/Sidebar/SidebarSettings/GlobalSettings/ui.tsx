import { useViewer } from '@/entities/viewer'
import { TAvatar } from '@/shared/ui/TAvatar'
import { Header, HeaderButton } from '../Header'
import { AvatarInfo } from './styles'

export const GlobalSettings = () => {
    const { viewer } = useViewer()

    return (
        <>
            <Header
                title="Настроки"
                prevPage="chats"
            >
                <HeaderButton
                    icon="icon-edit"
                    path="settings-edit-viewer"
                />
            </Header>
            <TAvatar
                size="auto"
                cover={viewer.avatar}
                colorNumber={Number(String(viewer.id).at(-1))}
                letter={viewer.name[0]}
                profile
                canOpen
            >
                <AvatarInfo>{viewer.name}</AvatarInfo>
            </TAvatar>
        </>
    )
}
