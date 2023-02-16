import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import {
  startNewPrestamo,
  startUpdatePrestamo,
} from "../../../store/prestamo/thunks";

export const PrestamoFormPage = ({ setOpen, accion = "create", handleClose }) => {
  const dispatch = useDispatch();
  const { prestamo } = useSelector((state) => state.prestamo);
  const {libros} = useSelector((state) => state.libro);
  const {estudiantes} = useSelector((state) => state.estudiante);
  const { fechaPrestamo, fechaDevolucion,estudianteID, libroID, onInputChange } = useForm({
    fechaPrestamo: accion === "update" ? prestamo.fechaPrestamo : "",
    fechaDevolucion: accion === "update" ? prestamo.fechaDevolucion : "",
    libroID: accion === "update" ? prestamo.libro.id : "",
    estudianteID: accion === "update" ? prestamo.estudiante.id : "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const estudiante = estudiantes.find((student) => student.id === parseInt(estudianteID));
    const libro = libros.find((lib) => lib.id === parseInt(libroID));
    if (accion === "update") {
      console.log(prestamo.id);
      dispatch(startUpdatePrestamo({fechaPrestamo, fechaDevolucion, libro, estudiante, id: prestamo.id }));
    } else {
      console.log({ fechaPrestamo, fechaDevolucion, libro, estudiante })
      dispatch(startNewPrestamo({ fechaPrestamo, fechaDevolucion, libro, estudiante }));
    }
    handleClose();
  };
  return (
    <>
      <div className="m-auto max-w-sm bg-slate-500 rounded p-6 fixed top-10 w-full left-0 right-0">
        <form onSubmit={onSubmit}>
          <h2 className="text-lg font-medium mb-2">Formulario de Prestamo</h2>
          <div className="grid gap-1 grid-cols-1">
            <div className="mb-2 flex items-center gap-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="fechaPrestamo"
              >
                Fecha de Prestamo
              </label>
              <input
                className="border border-gray-400 w-full p-2"
                type="date"
                id="fechaPrestamo"
                name="fechaPrestamo"
                value={fechaPrestamo}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-2 flex items-center gap-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="autor"
              >
                Fecha de Devolucion
              </label>
              <input
                className="border border-gray-400 w-full p-2"
                type="date"
                id="fechaDevolucion"
                name="fechaDevolucion"
                value={fechaDevolucion}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="estudianteID"
              >
                Estudiante
              </label>
              <select
                className="border border-gray-400 w-full p-2"
                type="text"
                id="estudianteID"
                name="estudianteID"
                value={estudianteID}
                onChange={onInputChange}
              >
                <option value="">Seleccione un Estudiante</option>
                {
                  estudiantes.map((estudiante) => (
                    <option key={estudiante.id} value={estudiante.id}>{estudiante.nombre}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="libroID"
              >
                Libro
              </label>
              <select
                className="border border-gray-400 w-full p-2"
                type="text"
                id=""
                name="libroID"
                value={libroID}
                onChange={onInputChange}
              >
                <option value="">Seleccione un Libro</option>
                {
                  libros.map((libro) => (
                    <option key={libro.id} value={libro.id}>{libro.titulo}</option>
                  ))
                }
              </select>
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
