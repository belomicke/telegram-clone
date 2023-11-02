import { getUniqueDatesFromMessageList } from '@/entities/message/ui/MessageFeed/helpers/getUniqueDatesFromMessageList'
import { Message } from '@/shared/types/Message/Message'

export const getMessagesWithDates = (items: Message[]) => {
    const result = []
    const dates = getUniqueDatesFromMessageList(items)

    dates.forEach(date => {
        const m = items.filter(item => item.created_at.startsWith(date))

        result.push(date, ...m.toReversed())
    })

    return result.toReversed()
}
