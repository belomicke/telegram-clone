import { getArrayWithUniqueItems } from '@/shared/helpers/getArrayWithUniqueItems'
import { Message } from '@/shared/types/Message/Message'

export const getUniqueDatesFromMessageList = (messages: Message[]) => {
    const dates = messages.map(item => item.created_at.slice(0, 10))

    return getArrayWithUniqueItems(dates).toReversed()
}
