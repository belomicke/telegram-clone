import { forwardRef, useImperativeHandle, useMemo } from 'react'
import { DateInfo } from './ui/DateInfo'
import { MessageFeedItem } from './ui/MessageFeedItem'
import { useMessageFeedVirtualizer } from './hook/useMessageFeedVirtualizer'
import { getVirtualItemStyles } from './helpers/getVirtualItemStyles'
import { getUniqueDatesFromMessageList } from './helpers/getUniqueDatesFromMessageList'
import { getMessagesWithDates } from './helpers/getMessagesWithDates'
import { InfinityScroll } from '@/shared/ui/InfinityScroll'
import { Message } from '@/shared/types/Message/Message'
import { ScrollToBottomButton } from '@/entities/message/ui/MessageFeed/ui/ScrollToBottomButton'

interface props {
    messages: Message[]
    fetch: () => void
}

export interface PrivateChat {
    scrollToBottom(): void
}

export const MessageFeed = forwardRef<PrivateChat, props>(({ messages, fetch }, ref) => {
    const messagesWithDates = useMemo(() => {
        return getMessagesWithDates(messages)
    }, [messages])

    const stickyIndexes = useMemo(() => {
        const mwd = getMessagesWithDates(messages)
        const dates = getUniqueDatesFromMessageList(messages)

        const result = []

        dates.forEach(date => {
            result.push(mwd.indexOf(date))
        })

        return result
    }, [messages])

    const {
        virtualizer,
        isSticky,
        isActiveSticky,
        getReverseIndex,
        parentRef
    } = useMessageFeedVirtualizer({
        messages: messagesWithDates,
        stickyIndexes,
    })

    const buttonIsVisible = useMemo(() => {
        const element = virtualizer.scrollElement

        if (!element) return

        const scrollProgress = element.scrollHeight - element.scrollTop

        return scrollProgress !== virtualizer.scrollRect.height
    }, [virtualizer.isScrolling])


    const scrollToBottom = () => {
        virtualizer.scrollBy(virtualizer.scrollElement.scrollHeight)
    }

    useImperativeHandle(ref, () => ({
        scrollToBottom
    }))

    return (
        <>
            <InfinityScroll
                count={messages.length}
                getMore={fetch}
                ref={parentRef}
            >
                <div
                    style={{
                        height: virtualizer.getTotalSize(),
                        position: 'relative'
                    }}
                >
                    {virtualizer.getVirtualItems().map((virtualRow) => {
                        if (!virtualRow) return <></>

                        const index = getReverseIndex(virtualRow.index)
                        const data = messagesWithDates[index]

                        return (
                            <div
                                style={getVirtualItemStyles({
                                    virtualRow,
                                    isSticky: isSticky(index),
                                    isActiveSticky: isActiveSticky(virtualRow.index)
                                })}
                                key={virtualRow.key}
                                data-index={virtualRow.index}
                                ref={virtualizer.measureElement}
                            >
                                {isSticky(index) ?
                                    <DateInfo
                                        date={data}
                                    />
                                    :
                                    <MessageFeedItem
                                        message={data}
                                    />
                                }
                            </div>
                        )
                    })}
                </div>
            </InfinityScroll>
            <ScrollToBottomButton
                visible={buttonIsVisible}
                onClick={scrollToBottom}
            />
        </>
    )
})

MessageFeed.displayName = 'MessageFeed'
