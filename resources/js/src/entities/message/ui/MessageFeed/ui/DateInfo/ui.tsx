import { forwardRef } from 'react'
import { useAppStore } from '@/entities/app'
import { DateContainer, DateText } from './styles'
import moment, { Moment } from 'moment'
import 'moment/dist/locale/ru.js'

interface props {
    date: string
}

export const DateInfo = forwardRef<HTMLDivElement, props>(({ date, ...props }: props) => {
    const theme = useAppStore((state) => state.theme)

    const isToday = (x: Moment, y: Moment) => {
        return x.year() === y.year()
            && x.month() === y.month()
            && x.date() === y.date()
    }

    const isYesterday = (x: Moment, y: Moment) => {
        return x.year() === y.year()
            && x.month() === y.month()
            && x.date() - y.date() === 1
    }

    const onThisWeek = (x: Moment, y: Moment) => {
        return x.year() === y.year() && x.week() === y.week()
    }

    const parseDate = (date: string) => {
        const now = moment(new Date())
        const d = moment(date)

        try {
            if (isToday(now, d)) {
                return 'Сегодня'
            } else if (isYesterday(now, d)) {
                return 'Вчера'
            } else if (onThisWeek(now, d)) {
                return Intl.DateTimeFormat('ru', {
                    weekday: 'long',
                }).format(new Date(date))
            } else {
                return d.format('DD MMMM YYYYг.')
            }
        } catch (e) {
            return ''
        }
    }

    return (
        <DateContainer {...props}>
            <DateText theme={theme}>{parseDate(date)}</DateText>
        </DateContainer>
    )
})

DateInfo.displayName = 'DateInfo'
