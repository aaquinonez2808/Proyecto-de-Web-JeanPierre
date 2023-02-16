import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import { EstudianteRoutes } from "./EstudianteRoutes";
import { GeneroRoutes } from "./GeneroRoutes";
import { LibroRoutes } from "./LibroRoutes";
import { PrestamoRoutes } from "./PrestamoRoutes";

export const BibliotecaRoutes = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estudiantes/*" element={<EstudianteRoutes />} />
        <Route path="/generos/*" element={<GeneroRoutes />} />
        <Route path="/libros/*" element={<LibroRoutes />} />
        <Route path="/prestamos/*" element={<PrestamoRoutes/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
