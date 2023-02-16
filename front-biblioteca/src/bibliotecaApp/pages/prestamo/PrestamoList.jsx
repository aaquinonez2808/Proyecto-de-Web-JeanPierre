import React from 'react'
import { useDispatch } from 'react-redux';
import { getPrestamoA, startDeletePrestamo } from '../../../store/prestamo/thunks';

export const PrestamoList = ({prestamos, handleOpen, setOpen, setAccionForm}) => {
    const dispatch = useDispatch();
    const handleUpdate = async(id)=>{
        await dispatch(getPrestamoA(id));
        setAccionForm("update");
        handleOpen();
      }
      const handleDelete = async(id)=>{
        await dispatch(startDeletePrestamo(id));
      }
  return (
    <>
        <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-2 py-2 w-16">Id</th>
            <th className="px-2 py-2 w-64">Fecha de Prestamo</th>
            <th className="px-2 py-2 w-64">Fecha de Devolucion</th>
            <th className="px-2 py-2 w-64">Estudiante</th>
            <th className="px-2 py-2 w-64">Libro</th>
            <th className="px-4 py-2 w-32">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {prestamos && prestamos.map((prestamo) => (
            <tr key={prestamo.id}>
              <td className="border px-4 py-2">{prestamo.id}</td>
              <td className="border px-4 py-2">{prestamo.fechaPrestamo}</td>
              <td className="border px-4 py-2">{prestamo.fechaDevolucion}</td>
              <td className="border px-4 py-2">{prestamo.estudiante.nombre}</td>
              <td className="border px-4 py-2">{prestamo.libro.titulo}</td>
              
              <td className="border px-4 py-2 flex gap-4 justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdate(prestamo.id)}
                >
                  Actualizar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(prestamo.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
