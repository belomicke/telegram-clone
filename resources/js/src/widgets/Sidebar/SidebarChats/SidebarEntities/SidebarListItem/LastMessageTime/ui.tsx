import { useMemo } from 'react'
import moment, { Moment } from 'moment'
import { LastMessage, LastMessageContainer } from './styles'

interface props {
    messageDate: string
    active: boolean
}

export const LastMessageTime = ({ messageDate, active }: props) => {
    const getMonthName = (number: number) => {
        const months = {
            1: 'янв.',
            2: 'фев.',
            3: 'мар.',
            4: 'апр.',
            5: 'май.',
            6: 'июн.',
            7: 'июл.',
            8: 'авг.',
            9: 'сент.',
            10: 'окт.',
            11: 'ноя.',
            12: 'дек.',
        }

        return months[number]
    }

    const getWeekDayName = (number: number) => {
        const weekdays = {
            1: 'пн',
            2: 'вт',
            3: 'ср',
            4: 'чт',
            5: 'пт',
            6: 'сб',
            7: 'вс',
        }

        return weekdays[number]
    }

    const getNumberWithZero = (number: number) => {
        if (number < 10) {
            return `0${number}`
        }

        return number
    }


    const date = useMemo(() => {
        const n = moment(new Date())
        const d = moment(messageDate)

        const messageMonth = d.month() + 1
        const minutes = getNumberWithZero(d.minutes())

        if (n.year() !== d.year()) {
            return `${d.year()}-${messageMonth}-${getNumberWithZero(d.date())}`
        } else if (n.month() !== messageMonth) {
            return `${getNumberWithZero(d.date())} ${getMonthName(messageMonth)}`
        } else if (d.dayOfYear() === n.dayOfYear()) {
            return `${getNumberWithZero(d.hour())}:${minutes}`
        } else if (d.week() === n.week()) {
            return getWeekDayName(d.weekday())
        } else {
            return `${getNumberWithZero(d.date())} ${getMonthName(messageMonth)}`
        }
    }, [messageDate, active])

    return (
        <LastMessageContainer>
            <LastMessage active={active}>{date}</LastMessage>
        </LastMessageContainer>
    )
}
