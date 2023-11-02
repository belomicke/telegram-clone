import { forwardRef } from 'react'
import { useAppStore } from '@/entities/app'
import { DateContainer, DateText } from './styles'

interface props {
    date: string
}

export const DateInfo = forwardRef<HTMLDivElement, props>(({ date, ...props }: props) => {
    const theme = useAppStore((state) => state.theme)

    const parseDate = (date: string) => {
        const now = new Date()
        const d = new Date(date)

        try {
            if (now.getFullYear() === d.getFullYear() && now.getMonth() === d.getMonth() && now.getDate() === d.getDate()) {
                return 'Сегодня'
            } else {
                return Intl.DateTimeFormat('ru', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }).format(d)
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
