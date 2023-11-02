import { useEffect, useState } from 'react'
import { getPrivateChannelPath } from '@/entities/chat/helpers/getPrivateChannelPath'
import { HookOptions } from '@/shared/types/HookOptions'

export const useIsTyping = (id: number, options: HookOptions) => {
    const [isTyping, setIsTyping] = useState<boolean>(false)
    const { channel } = getPrivateChannelPath(id)

    useEffect(() => {
        if (!options.enabled) return

        window.Echo.join(channel)
            .leaving(() => {
                setIsTyping(false)
            }).listenForWhisper('typing', (e) => {
                setIsTyping(e.user_id === id ? e.status : false)
            })

        return () => {
            window.Echo.leave(channel)
        }
    }, [id])

    return {
        status: isTyping
    }
}
