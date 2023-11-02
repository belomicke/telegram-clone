import React, { forwardRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Container, FetchTrigger } from '@/shared/ui/InfinityScroll/styles'

interface props {
    count: number
    getMore: () => void
    children: React.ReactNode
}

export const InfinityScroll = forwardRef<HTMLDivElement, props>(({ count, getMore, children }, ref) => {
    const { ref: fetchTriggerRef, inView } = useInView()

    useEffect(() => {
        if (count <= 1) {
            getMore()
        }
    }, [])

    useEffect(() => {
        if (inView && count > 1) {
            getMore()
        }
    }, [inView])

    return (
        <Container ref={ref}>
            <FetchTrigger ref={fetchTriggerRef} />
            {children}
        </Container>
    )
})

InfinityScroll.displayName = 'InfinityScroll'
