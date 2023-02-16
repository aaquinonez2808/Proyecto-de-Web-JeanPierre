import React from 'react'
import { useDispatch } from 'react-redux';
import { getGeneroA, startDeleteGenero } from '../../../store/genero/thunks';

export const GeneroList = ({generos, handleOpen, setOpen, setAccionForm}) => {
    const dispatch = useDispatch();
    const handleUpdate = async(id)=>{
        await dispatch(getGeneroA(id));
        setAccionForm("update");
        handleOpen();
      }
      const handleDelete = async(id)=>{
        await dispatch(startDeleteGenero(id));
      }
  return (
    <>
        <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-2 py-2 w-16">Nombre</th>
            <th className="px-2 py-2 w-64">Descripcion</th>
            <th className="px-4 py-2 w-32">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {generos && generos.map((genero) => (
            <tr key={genero.id}>
              <td className="border px-4 py-2">{genero.nombre}</td>
              <td className="border px-4 py-2">{genero.descripcion}</td>
              <td className="border px-4 py-2 flex gap-4 justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdate(genero.id)}
                >
                  Actualizar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(genero.id)}
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
