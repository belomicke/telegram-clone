import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from './LoginPage/ui'

export const Router = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
