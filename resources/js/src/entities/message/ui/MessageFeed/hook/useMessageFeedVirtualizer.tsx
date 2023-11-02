import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { defaultRangeExtractor, useVirtualizer } from '@tanstack/react-virtual'

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useMessageFeedVirtualizer = ({
    messages,
    stickyIndexes,
}) => {
    const ITEM_SIZE = 200

    const parentRef = useRef<HTMLDivElement>(null)
    const activeStickyIndexRef = useRef(0)
    const isSticky = (index: number) => stickyIndexes.includes(index)
    const isActiveSticky = (index: number) => activeStickyIndexRef.current === index
    const count = messages.length
    const getReverseIndex = useCallback((index: number) => count - 1 - index, [count])
    const virtualizerRef = useRef(null)

    if (
        virtualizerRef.current &&
        count !== virtualizerRef.current.options.count
    ) {
        const delta = count - virtualizerRef.current.options.count
        const nextOffset = virtualizerRef.current.scrollOffset + delta * ITEM_SIZE

        virtualizerRef.current.scrollOffset = nextOffset
        virtualizerRef.current.scrollToOffset(nextOffset, { align: 'start' })
    }

    const virtualizer = useVirtualizer({
        count,
        estimateSize: () => ITEM_SIZE,
        getItemKey: useCallback((index) => {
            const item = messages[getReverseIndex(index)]
            const isDate = typeof item === 'string'

            return isDate ? item : item.id
        }, [messages, getReverseIndex]),
        getScrollElement: () => parentRef.current,
        overscan: 5,

        rangeExtractor: useCallback((range) => {
            activeStickyIndexRef.current = getReverseIndex([...stickyIndexes].reverse()
                .find((index) => getReverseIndex(range.startIndex) <= index))

            const next = new Set([
                activeStickyIndexRef.current,
                ...defaultRangeExtractor(range).toReversed(),
            ])

            return [...next].sort((a, b) => a - b)
        },
        [stickyIndexes]),
    })

    useIsomorphicLayoutEffect(() => {
        virtualizerRef.current = virtualizer
    })

    return {
        isSticky,
        isActiveSticky,
        virtualizer,
        getReverseIndex,
        parentRef
    }
}
