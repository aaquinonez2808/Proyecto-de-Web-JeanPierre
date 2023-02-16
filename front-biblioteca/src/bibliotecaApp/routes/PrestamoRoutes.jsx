import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import  PrestamoPage  from '../pages/prestamo/PrestamoPage'

export const PrestamoRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PrestamoPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
