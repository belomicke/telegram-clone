import { Button } from '@/widgets/PrivateChatMessages/BottomScrollButton/styles'
import { useEffect, useState } from 'react'

interface props {
    element: HTMLDivElement
}

export const BottomScrollButton = ({ element }: props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        if (!element) return

        element.addEventListener('scroll', scrollHandler)

        return () => {
            element.removeEventListener('scroll', scrollHandler)
        }
    }, [element])

    function scrollHandler () {
        setIsVisible(!(this.offsetHeight + this.scrollTop >= this.scrollHeight))
    }

    const scrollToBottom = () => {
        element.scroll({ top: element.scrollHeight })
    }

    return (
        <Button
            icon="icon-arrow-down"
            visible={isVisible}
            onClick={scrollToBottom}
        />
    )
}
