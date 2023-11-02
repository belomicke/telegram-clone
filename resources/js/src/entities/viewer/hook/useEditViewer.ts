import { useViewer, useViewerStore } from '@/entities/viewer'
import { EditViewerDto } from '@/shared/types/Viewer/DTO/EditViewerDto'
import { viewerApi } from '@/entities/viewer/api'

export const useEditViewer = () => {
    const { viewer } = useViewer()
    const setViewer = useViewerStore((state) => state.setViewer)

    const mutate = async (dto: EditViewerDto) => {
        const formData = new FormData()

        if (dto.name !== viewer.name) formData.append('name', dto.name)
        if (dto.avatar) formData.append('avatar', dto.avatar)

        const res = await viewerApi.editViewer(formData)
        const data = res.data

        if (data.success) {
            setViewer(data.viewer)
        }
    }

    return {
        mutate
    }
}
