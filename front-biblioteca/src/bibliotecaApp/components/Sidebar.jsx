import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

const Sidebar = () => {
  const dispatch = useDispatch();
    const {nombre, email} = useSelector(state => state.auth);
  return (
    <aside className="bg-gray-800 p-3 w-72">
      <div className="flex flex-col">
        {/* Perfil */}
        <div className="bg-gray-900 p-3 rounded-lg text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-16 h-16 rounded-full mb-3 mx-auto"
          />
          <h3 className="text-white font-medium">{nombre}</h3>
          <p className="text-gray-500 text-sm">{email}</p>
          <button
          onClick={() => {
            dispatch(startLogout());
          }
          }
           className="bg-red-700 text-white text-xs font-medium px-5 py-1 rounded-full mt-2 hover:bg-red-600">
            Salir <FontAwesomeIcon icon="sign-out-alt" />
          </button>

        </div>
        {/* Menú */}
        <nav className="mt-4 flex flex-col gap-3 bg-gray-900 rounded-lg p-5 h-[68vh]">
        <Link to="/" className="flex text-white p-3 cursor-pointer justify-between items-center hover:bg-white hover:text-black rounded-md">
            <span>Home</span>
          </Link>
          <Link to="/libros" className="flex text-white p-3 cursor-pointer justify-between items-center hover:bg-white hover:text-black rounded-md">
            <span>Gestionar Libros</span>
          </Link>
          <Link to="/generos" className="flex text-white p-3 cursor-pointer justify-between items-center hover:bg-white hover:text-black rounded-md">
            <span>Gestionar Generos</span>

          </Link>
          <Link to="/estudiantes" className="flex text-white p-3 cursor-pointer justify-between items-center hover:bg-white hover:text-black rounded-md">
            <span>Gestionar Estudiantes</span>
          </Link>
          <Link to="/prestamos" className="flex text-white p-3 cursor-pointer justify-between items-center hover:bg-white hover:text-black rounded-md">
            <span>Gestionar Prestamos</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
