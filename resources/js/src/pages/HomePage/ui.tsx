import { Outlet } from 'react-router'
import { Sidebar } from '@/widgets/Sidebar'
import { useAppStore } from '@/entities/app'
import { Container, Content } from './styles'

export const HomePage = () => {
    const theme = useAppStore((state) => state.theme)

    return (
        <Container theme={theme}>
            <Sidebar />
            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}
