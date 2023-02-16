import React from 'react'
import { useDispatch } from 'react-redux';
import { getEstudianteA, startDeleteEstudiante } from '../../../store/estudiante/thunks';

export const EstudianteList = ({estudiantes, handleOpen, setOpen, setAccionForm}) => {
    const dispatch = useDispatch();
    const handleUpdate = async(id)=>{
        await dispatch(getEstudianteA(id));
        setAccionForm("update");
        handleOpen();
      }
      const handleDelete = async(id)=>{
        await dispatch(startDeleteEstudiante(id));
      }
  return (
    <>
        <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">Cedula</th>
            <th className="px-4 py-2">Direccion</th>
            <th className="px-4 py-2">Telefono</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes && estudiantes.map((student) => (
            <tr key={student.id}>
              <td className="border py-2">{student.nombre}</td>
              <td className="border py-2">{student.apellido}</td>
              <td className="border py-2">{student.cedula}</td>
              <td className="border py-2">{student.direccion}</td>
              <td className="border py-2">{student.telefono}</td>
              <td className="border py-2">{student.email}</td>
              <td className="border py-2 flex gap-4 justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdate(student.id)}
                >
                  Actualizar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(student.id)}
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
