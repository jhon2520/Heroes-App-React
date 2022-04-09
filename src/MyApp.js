import React from 'react'
import  { AuthProvider } from './auth/authContext'
import AppRouter from './routers/AppRouter'


const MyApp = () => {

    return (
        <AuthProvider>
        <AppRouter/>
        </AuthProvider>
    )
}

export default MyApp