import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'
import { useViewer } from '@/entities/viewer'
import { HomePage } from '@/pages/HomePage'
import { PrivateChatPage } from '@/pages/PrivateChatPage'
import { LoadingPage } from '@/pages/LoadingPage/ui'

export const Router = (): React.JSX.Element => {
    const { viewer, isLoading } = useViewer()

    useEffect(() => {
        if (viewer) {
            document.body.classList.add('auth')
        }
    }, [viewer])

    if (isLoading) return <LoadingPage />

    return (
        <BrowserRouter>
            <Routes>
                {viewer ?
                    <>
                        <Route path="/" element={<HomePage />}>
                            <Route path="/private/:id" element={<PrivateChatPage />} />
                        </Route>

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
