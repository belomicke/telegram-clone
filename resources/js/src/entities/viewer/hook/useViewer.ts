import { useEffect, useState } from 'react'
import { viewerApi } from '@/entities/viewer/api'
import { useViewerStore } from '@/entities/viewer'

export const useViewer = () => {
    const viewer = useViewerStore((state) => state.viewer)
    const setViewer = useViewerStore((state) => state.setViewer)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!viewer) {
            mutate().catch((e) => {
                if (e.response.status === 401) {
                    localStorage.removeItem('token')
                }
            }).finally(() => {
                setIsLoading(false)
            })
        }
    }, [])

    const mutate = async () => {
        if (!localStorage.getItem('token')) return

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
