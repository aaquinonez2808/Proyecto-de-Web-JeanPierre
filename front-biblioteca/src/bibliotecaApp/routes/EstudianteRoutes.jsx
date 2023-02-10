import React from 'react'
import { EstudianteFormPage } from '../pages/estudiante/EstudianteFormPage'
import { EstudiantePage } from '../pages/estudiante/EstudiantePage'

export const EstudianteRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<EstudiantePage />} />
        <Route path="/form" element={<EstudianteFormPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
