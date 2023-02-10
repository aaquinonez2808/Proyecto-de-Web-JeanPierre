import React from 'react'
import { UserProvider } from './context/UserProvider'
import { AppRoutes } from './routes/AppRoutes'

export const BibliotecaApp = () => {
  return (
    <UserProvider>
        <AppRoutes/>
    </UserProvider>
  )
}
