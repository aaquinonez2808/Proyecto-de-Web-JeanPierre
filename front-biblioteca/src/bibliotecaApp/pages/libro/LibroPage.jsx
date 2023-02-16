import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteLibro,
} from "../../../store/libro/thunks";
import { LibroFormPage } from "./LibroFormPage";
import { LibroList } from "./LibroList";

const LibroPage = () => {
  const {libros} = useSelector((state) => state.libro);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [accionForm, setAccionForm] = React.useState("add");
  const handleCreateStudent = () => {
    setAccionForm("add");
    console.log(libros);
    handleOpen();
  };

  const handleDeleteStudent = (index) => {
    dispatch(startDeleteLibro(index));
  };

  return (
    <div className="w-full mx-12">
      <h1 className="text-4xl font-bold my-4 text-center">Libros</h1>
      <div className="mb-4 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateStudent}
        >
          Crear Libro
        </button>
      </div>
      <div className="mx-16">
      {libros.length > 0 ? (
        <LibroList
          handleOpen={handleOpen}
          libros={libros}
          setOpen={setOpen}
          setAccionForm={setAccionForm}
        />
      ) : (
        <h1 className="text-2xl font-bold my-4 text-center">
          No hay libros
        </h1>
      )}
      </div>
      <div className="w-3/5">
        {open && (
          <LibroFormPage
            setOpen={setOpen}
            accion={accionForm}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default LibroPage;
