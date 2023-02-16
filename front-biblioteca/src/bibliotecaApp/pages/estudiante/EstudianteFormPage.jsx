import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { startNewEstudiante, startUpdateEstudiante } from '../../../store/estudiante/thunks';

export const EstudianteFormPage = ({setOpen, accion="create", handleClose}) => {
  const dispatch = useDispatch();
    const { estudiante } = useSelector((state) => state.estudiante);
    console.log(estudiante);
  const {apellido,nombre, cedula, telefono, direccion, email, onInputChange } = useForm(
    {
      email: accion === "update" ? estudiante.email : "",
        nombre: accion === "update" ? estudiante.nombre : "",
        cedula: accion === "update" ? estudiante.cedula : "",
        telefono: accion === "update" ? estudiante.telefono : "",
        direccion: accion === "update" ? estudiante.direccion : "",
        apellido: accion === "update" ? estudiante.apellido : "",
    }
  );


  const onSubmit = (event) => {
    event.preventDefault();
    if(accion === "update"){
        dispatch(startUpdateEstudiante({apellido,nombre, cedula, telefono, direccion, email, id: estudiante.id }));
    }else{
        dispatch(startNewEstudiante({nombre, cedula, telefono, direccion, email, apellido }));
    }
    handleClose();
  };
  return (
    <>
          <div className="m-auto max-w-sm bg-slate-500 rounded p-6 fixed top-3 w-full left-0 right-0">
            <form onSubmit={onSubmit}>
              <h2 className="text-lg font-medium mb-4">Formulario de Estudiante</h2>
              <div className="grid gap-4 grid-cols-2">
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
                  htmlFor="cedula"
                >
                  Cédula
                </label>
                <input
                  className="border border-gray-400 w-full p-2"
                  type="text"
                  id="cedula"
                  name="cedula"
                  value={cedula}
                  onChange={onInputChange}

                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="direccion"
                >
                  Dirección
                </label>
                <input
                  className="border border-gray-400 w-full p-2"
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={direccion}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="direccion"
                >
                  Apellido
                </label>
                <input
                  className="border border-gray-400 w-full p-2"
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={apellido}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  className="border border-gray-400 w-full p-2"
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={telefono}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2 "
                  htmlFor="telefono"
                >
                  Email
                </label>
                <input
                  className="border border-gray-400 w-full p-2"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded mr-4"
                >
                  Cerrar
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded" type='submit'>
                  Guardar
                </button>
              </div>
            </form>
          </div>
    </>
  )
}
