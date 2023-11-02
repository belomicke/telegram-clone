import { useEffect, useState } from 'react'
import { getPrivateChannelPath } from '@/entities/chat/helpers/getPrivateChannelPath'
import { HookOptions } from '@/shared/types/HookOptions'

export const useIsOnline = (id: number, options: HookOptions) => {
    const [isOnline, setIsOnline] = useState<boolean | undefined>(undefined)
    const { channel } = getPrivateChannelPath(id)

    useEffect(() => {
        if (!options.enabled) return

        window.Echo.join(channel)
            .here((users) => {
                setIsOnline(users.length > 1)
            }).joining(() => {
                setIsOnline(true)
            }).leaving(() => {
                setIsOnline(false)
            })

        return () => {
            window.Echo.leave(channel)
        }
    }, [id])

    return {
        status: isOnline
    }
}
