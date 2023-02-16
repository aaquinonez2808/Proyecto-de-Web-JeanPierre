import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeletePrestamo,
} from "../../../store/prestamo/thunks";
import { PrestamoFormPage } from "./PrestamoFormPage";
import { PrestamoList } from "./PrestamoList";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PrestamoPage = () => {
  const {prestamos} = useSelector((state) => state.prestamo);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [accionForm, setAccionForm] = React.useState("add");

  const handleExportPdf = () => {
    generatePdf(prestamos);
  };
  const generatePdf = (prestamos) => {
    const doc = new jsPDF();
    doc.text("Reporte de Prestamos", 10, 10);
    doc.autoTable({
      startY: 20,
      head: [["Id", "Fecha de Prestamo", "Fecha de Devolucion", "Estudiante", "Libro"]],
      body: prestamos.map((item) => [
        item.id,
        item.fechaPrestamo,
        item.fechaDevolucion,
        item.estudiante.nombre,
        item.libro.titulo,
      ]),
      styles: {
        fontSize: 12,
        cellPadding: 2,
        valign: "middle",
        halign: "center",
      },
      headStyles: {
        fillColor: "#3f51b5",
        textColor: "#ffffff",
        lineWidth: 0.1,
      },
    });
    doc.save("reportePrestamos.pdf");
  };


  const handleCreateStudent = () => {
    setAccionForm("add");
    console.log(prestamos);
    handleOpen();
  };

  const handleDeleteStudent = (index) => {
    dispatch(startDeletePrestamo(index));
  };

  return (
    <div className="w-full mx-12">
      <h1 className="text-4xl font-bold my-4 text-center">Prestamos</h1>
      <div className="mb-4 flex justify-between">
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleExportPdf}
        >
          Generar Reporte PDF
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateStudent}
        >
          Crear Prestamo
        </button>
      </div>
      <div className="mx-16">
      {prestamos.length > 0 ? (
        <PrestamoList
          handleOpen={handleOpen}
          prestamos={prestamos}
          setOpen={setOpen}
          setAccionForm={setAccionForm}
        />
      ) : (
        <h1 className="text-2xl font-bold my-4 text-center">
          No hay prestamos
        </h1>
      )}
      </div>
      <div className="w-3/5">
        {open && (
          <PrestamoFormPage
            setOpen={setOpen}
            accion={accionForm}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default PrestamoPage;
