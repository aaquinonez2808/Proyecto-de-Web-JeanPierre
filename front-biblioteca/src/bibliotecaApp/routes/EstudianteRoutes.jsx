import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import  EstudiantePage  from '../pages/estudiante/EstudiantePage'

export const EstudianteRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<EstudiantePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
