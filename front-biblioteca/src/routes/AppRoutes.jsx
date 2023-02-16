import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { BibliotecaRoutes } from "../bibliotecaApp/routes/BibliotecaRoutes";
import { useCheckAuth } from "../hooks/useAuthenticated";

export const AppRoutes = () => {
  const status = useCheckAuth();
  console.log(status);
  return (
    <>
      {status === "authenticated" ? (
        <Routes>
          <Route path="/*" element={<BibliotecaRoutes />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<AuthRoutes />} />
        </Routes>
      )}
    </>
  );
};
