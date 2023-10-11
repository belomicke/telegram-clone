import { useEffect, useState } from 'react'
import { viewerApi } from '@/Entities/Viewer/api'
import { useViewerStore } from '@/Entities/Viewer/model'

export const useViewer = () => {
    const viewer = useViewerStore((state) => state.user)
    const setViewer = useViewerStore((state) => state.setUser)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!viewer) {
            mutate().finally(() => {
                setIsLoading(false)
            })
        }
    }, [])

    const mutate = async () => {
        const res = await viewerApi.getViewer()
        const data = res.data

        if (data.success) {
            setViewer(data.viewer)
        }

        return data
    }

    return {
        viewer,
        isLoading
    }
}
