import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteGenero,
} from "../../../store/genero/thunks";
import { GeneroFormPage } from "./GeneroFormPage";
import { GeneroList } from "./GeneroList";

const GeneroPage = () => {
  const {generos} = useSelector((state) => state.genero);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [accionForm, setAccionForm] = React.useState("add");
  const handleCreateStudent = () => {
    setAccionForm("add");
    console.log(generos);
    handleOpen();
  };

  const handleDeleteStudent = (index) => {
    dispatch(startDeleteGenero(index));
  };

  return (
    <div className="w-full mx-12">
      <h1 className="text-4xl font-bold my-4 text-center">Generos</h1>
      <div className="mb-4 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateStudent}
        >
          Crear Genero
        </button>
      </div>
      <div className="mx-16">
      {generos.length > 0 ? (
        <GeneroList
          handleOpen={handleOpen}
          generos={generos}
          setOpen={setOpen}
          setAccionForm={setAccionForm}
        />
      ) : (
        <h1 className="text-2xl font-bold my-4 text-center">
          No hay generos
        </h1>
      )}
      </div>
      <div className="w-3/5">
        {open && (
          <GeneroFormPage
            setOpen={setOpen}
            accion={accionForm}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default GeneroPage;
