import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteEstudiante,
} from "../../../store/estudiante/thunks";
import { EstudianteFormPage } from "./EstudianteFormPage";
import { EstudianteList } from "./EstudianteList";

const EstudiantePage = () => {
  const {estudiantes} = useSelector((state) => state.estudiante);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [accionForm, setAccionForm] = React.useState("add");
  const handleCreateStudent = () => {
    setAccionForm("add");
    console.log(estudiantes);
    handleOpen();
  };

  const handleDeleteStudent = (index) => {
    dispatch(startDeleteEstudiante(index));
  };

  return (
    <div className="w-full mx-12">
      <h1 className="text-4xl font-bold my-4 text-center">Estudiantes</h1>
      <div className="mb-4 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateStudent}
        >
          Crear Estudiante
        </button>
      </div>
      {estudiantes.length > 0 ? (
        <EstudianteList
          handleOpen={handleOpen}
          estudiantes={estudiantes}
          setOpen={setOpen}
          setAccionForm={setAccionForm}
        />
      ) : (
        <h1 className="text-2xl font-bold my-4 text-center">
          No hay estudiantes
        </h1>
      )}
      <div className="w-3/5">
        {open && (
          <EstudianteFormPage
            setOpen={setOpen}
            accion={accionForm}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default EstudiantePage;
