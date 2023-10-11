import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'
import { useViewer } from '@/entities/viewer'
import { HomePage } from '@/pages/HomePage'

export const Router = (): React.JSX.Element => {
    const { viewer, isLoading } = useViewer()

    if (isLoading) return <>Loading...</>

    return (
        <BrowserRouter>
            <Routes>
                {viewer ?
                    <>
                        <Route path="/" element={<HomePage />} />

                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                    :
                    <>
                        <Route path="sign_in" element={<SignInPage />} />
                        <Route path="sign_up" element={<SignUpPage />} />

                        <Route path="*" element={<Navigate to="/sign_in" />} />
                    </>
                }
            </Routes>
        </BrowserRouter>
    )
}
