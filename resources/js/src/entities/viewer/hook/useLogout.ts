import { useViewerStore } from '@/entities/viewer'
import { viewerApi } from '@/entities/viewer/api'

export const useLogout = () => {
    const deleteViewer = useViewerStore((state) => state.deleteViewer)

    const mutate = async () => {
        const res = await viewerApi.logOut()
        const data = res.data

        if (data.success) {
            localStorage.removeItem('token')
            deleteViewer()
        }
    }

    return {
        mutate
    }
}
