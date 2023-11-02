import { useViewer } from '@/entities/viewer'

export const getPrivateChannelPath = (id: number) => {
    const { viewer } = useViewer()

    return {
        channel: `private.${viewer.id > id ? viewer.id : id}.${viewer.id < id ? viewer.id : id}`
    }
}
