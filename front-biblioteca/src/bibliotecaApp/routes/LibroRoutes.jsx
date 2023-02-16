import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import  LibroPage  from '../pages/libro/LibroPage'

export const LibroRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LibroPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
