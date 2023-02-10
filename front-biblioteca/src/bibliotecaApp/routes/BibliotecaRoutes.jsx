import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";

export const BibliotecaRoutes = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
