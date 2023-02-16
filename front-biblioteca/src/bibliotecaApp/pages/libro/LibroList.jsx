import React from 'react'
import { useDispatch } from 'react-redux';
import { getLibroA, startDeleteLibro } from '../../../store/libro/thunks';

export const LibroList = ({libros, handleOpen, setOpen, setAccionForm}) => {
    const dispatch = useDispatch();
    const handleUpdate = async(id)=>{
        await dispatch(getLibroA(id));
        setAccionForm("update");
        handleOpen();
      }
      const handleDelete = async(id)=>{
        await dispatch(startDeleteLibro(id));
      }
  return (
    <>
        <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-2 py-2 w-16">Id</th>
            <th className="px-2 py-2 w-16">Titulo</th>
            <th className="px-2 py-2 w-64">Autor</th>
            <th className="px-2 py-2 w-64">Editorial</th>
            <th className="px-2 py-2 w-64">Genero</th>
            <th className="px-2 py-2 w-64">Descripcion</th>
            <th className="px-4 py-2 w-32">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros && libros.map((libro) => (
            <tr key={libro.id}>
              <td className="border px-4 py-2">{libro.id}</td>
              <td className="border px-4 py-2">{libro.titulo}</td>
              <td className="border px-4 py-2">{libro.autor}</td>
              <td className="border px-4 py-2">{libro.editorial}</td>
              <td className="border px-4 py-2">{libro.genero.nombre}</td>
              <td className="border px-4 py-2">{libro.descripcion}</td>
              
              <td className="border px-4 py-2 flex gap-4 justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdate(libro.id)}
                >
                  Actualizar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(libro.id)}
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
