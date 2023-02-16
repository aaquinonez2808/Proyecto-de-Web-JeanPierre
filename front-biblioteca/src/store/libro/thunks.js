import {
  deleteLibro,
  getAllLibro,
  getLibro,
  createLibro,
  updateLibro
} from "../../services/libroService";
import { saveNewLibro, getListLibro, getLibroOne, updateLibroOne, deleteLibroOne } from "./libroSlice";

export const startNewLibro = (libro) => async (dispatch) => {
  try {
    const data  = await createLibro(libro);
    dispatch(saveNewLibro(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListLibros = () => async (dispatch) => {
  try {
    const response = await getAllLibro();
    if (response === "") {
      dispatch(getListLibro({ data: [], message: "No hay datos" }));
    } else {
      dispatch(
        getListLibro({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLibroA = (id) => async (dispatch) => {
  try {
    const data = await getLibro(id);
    dispatch(getLibroOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateLibro = (libro) => async (dispatch) => {
  try {
    const data = await updateLibro(libro, libro.id);
    dispatch(updateLibroOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteLibro = (id) => async (dispatch) => {
  try {
    const data = await deleteLibro(id);
    dispatch(deleteLibroOne(id));
  } catch (error) {
    console.log(error);
  }
}
