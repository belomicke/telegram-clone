import { Container, Inner } from './styles'
import { useAppStore } from '@/entities/app'

export const Spinner = () => {
    const theme = useAppStore((state) => state.theme)

    return (
        <Container size={24}>
            <Inner theme={theme} />
        </Container>
    )
}
