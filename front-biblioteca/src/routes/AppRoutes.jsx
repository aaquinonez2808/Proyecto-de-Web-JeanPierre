import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { BibliotecaRoutes } from '../bibliotecaApp/routes/BibliotecaRoutes';
import { useAuthenticated } from '../hooks/useAuthenticated'

export const AppRoutes = () => {

    const {authenticated, loading, setAuthenticated} = useAuthenticated();
    if(loading) return <div>Cargando...</div>

  return (
    <>
        {authenticated ? <Routes>
            <Route path="/*" element={<BibliotecaRoutes/>} />
        </Routes> : <Routes>
            <Route path="/*" element={<AuthRoutes/>} />
        </Routes>}
    </>
  )
}
