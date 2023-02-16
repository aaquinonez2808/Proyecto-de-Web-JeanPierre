import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import  GeneroPage  from '../pages/genero/GeneroPage'

export const GeneroRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<GeneroPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
