import {
  deleteGenero,
  getAllGenero,
  getGenero,
  createGenero,
  updateGenero
} from "../../services/generoService";
import { saveNewGenero, getListGenero, getGeneroOne, updateGeneroOne, deleteGeneroOne } from "./generoSlice";

export const startNewGenero = (genero) => async (dispatch) => {
  try {
    const data  = await createGenero(genero);
    dispatch(saveNewGenero(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListGeneros = () => async (dispatch) => {
  try {
    const response = await getAllGenero();
    if (response === "") {
      dispatch(getListGenero({ data: [], message: "No hay datos" }));
    } else {
      dispatch(
        getListGenero({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getGeneroA = (id) => async (dispatch) => {
  try {
    const data = await getGenero(id);
    dispatch(getGeneroOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateGenero = (genero) => async (dispatch) => {
  try {
    const data = await updateGenero(genero, genero.id);
    dispatch(updateGeneroOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteGenero = (id) => async (dispatch) => {
  try {
    const data = await deleteGenero(id);
    dispatch(deleteGeneroOne(id));
  } catch (error) {
    console.log(error);
  }
}
