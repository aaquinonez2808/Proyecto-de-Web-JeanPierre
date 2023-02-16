import {
  deletePrestamo,
  getAllPrestamo,
  getPrestamo,
  createPrestamo,
  updatePrestamo
} from "../../services/prestamoService";
import { saveNewPrestamo, getListPrestamo, getPrestamoOne, updatePrestamoOne, deletePrestamoOne } from "./prestamoSlice";

export const startNewPrestamo = (prestamo) => async (dispatch) => {
  try {
    const data  = await createPrestamo(prestamo);
    dispatch(saveNewPrestamo(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListPrestamos = () => async (dispatch) => {
  try {
    const response = await getAllPrestamo();
    if (response === "") {
      dispatch(getListPrestamo({ data: [], message: "No hay datos" }));
    } else {
      dispatch(
        getListPrestamo({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPrestamoA = (id) => async (dispatch) => {
  try {
    const data = await getPrestamo(id);
    dispatch(getPrestamoOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdatePrestamo = (prestamo) => async (dispatch) => {
  try {
    const data = await updatePrestamo(prestamo, prestamo.id);
    dispatch(updatePrestamoOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeletePrestamo = (id) => async (dispatch) => {
  try {
    const data = await deletePrestamo(id);
    dispatch(deletePrestamoOne(id));
  } catch (error) {
    console.log(error);
  }
}
