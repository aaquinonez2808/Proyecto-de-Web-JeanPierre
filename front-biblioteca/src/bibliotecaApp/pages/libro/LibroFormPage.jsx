import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import {
  startNewLibro,
  startUpdateLibro,
} from "../../../store/libro/thunks";

export const LibroFormPage = ({ setOpen, accion = "create", handleClose }) => {
  const dispatch = useDispatch();
  const { libro } = useSelector((state) => state.libro);
  const {generos} = useSelector((state) => state.genero);
  const { descripcion, titulo,autor, editorial, onInputChange, generoID } = useForm({
    descripcion: accion === "update" ? libro.descripcion : "",
    titulo: accion === "update" ? libro.titulo : "",
    autor: accion === "update" ? libro.autor : "",
    editorial: accion === "update" ? libro.editorial : "",
    generoID: accion === "update" ? libro.genero.id : "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const genero = generos.find((gene) => gene.id === parseInt(generoID));
    if (accion === "update") {
      dispatch(startUpdateLibro({editorial, autor, genero, descripcion, titulo, id: libro.id }));
    } else {
      dispatch(startNewLibro({ editorial, autor, genero, descripcion, titulo }));
    }
    handleClose();
  };
  return (
    <>
      <div className="m-auto max-w-sm bg-slate-500 rounded p-6 fixed top-10 w-full left-0 right-0">
        <form onSubmit={onSubmit}>
          <h2 className="text-lg font-medium mb-2">Formulario de Libro</h2>
          <div className="grid gap-1 grid-cols-1">
            <div className="mb-2 flex items-center gap-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="titulo"
              >
                Titulo
              </label>
              <input
                className="border border-gray-400 w-full p-2"
                type="text"
                id="titulo"
                name="titulo"
                value={titulo}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-2 flex items-center gap-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="autor"
              >
                Autor
              </label>
              <input
                className="border border-gray-400 w-full p-2"
                type="text"
                id="autor"
                name="autor"
                value={autor}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-2 flex items-center gap-2">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="editorial"
              >
                Editorial
              </label>
              <input
                className="border border-gray-400 w-full p-2"
                type="text"
                id="editorial"
                name="editorial"
                value={editorial}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="categoria"
              >
                Genero
              </label>
              <select
                className="border border-gray-400 w-full p-2"
                type="text"
                id="generoID"
                name="generoID"
                value={generoID}
                onChange={onInputChange}
              >
                <option value="">Seleccione un genero</option>
                {
                  generos.map((genero) => (
                    <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-2">
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
