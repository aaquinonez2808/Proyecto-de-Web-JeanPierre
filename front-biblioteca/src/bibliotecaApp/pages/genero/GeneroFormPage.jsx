import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import {
  startNewGenero,
  startUpdateGenero,
} from "../../../store/genero/thunks";

export const GeneroFormPage = ({ setOpen, accion = "create", handleClose }) => {
  const dispatch = useDispatch();
  const { genero } = useSelector((state) => state.genero);
  const { descripcion, nombre, onInputChange } = useForm({
    descripcion: accion === "update" ? genero.descripcion : "",
    nombre: accion === "update" ? genero.nombre : "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (accion === "update") {
      console.log(genero.id);
      dispatch(startUpdateGenero({ descripcion, nombre, id: genero.id }));
    } else {
      dispatch(startNewGenero({ nombre, descripcion }));
    }
    handleClose();
  };
  return (
    <>
      <div className="m-auto max-w-sm bg-slate-500 rounded p-6 fixed top-20 w-full left-0 right-0">
        <form onSubmit={onSubmit}>
          <h2 className="text-lg font-medium mb-4">Formulario de Genero</h2>
          <div className="grid gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="border border-gray-400 w-full p-2"
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="descripcion"
              >
                Descripcion
              </label>
              <textarea
                className="border border-gray-400 w-full p-2"
                type="text"
                id="descripcion"
                name="descripcion"
                value={descripcion}
                onChange={onInputChange}
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded mr-4"
            >
              Cerrar
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
