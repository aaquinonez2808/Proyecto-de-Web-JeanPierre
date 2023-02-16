import {
  deleteEstudiante,
  getAllEstudiante,
  getEstudiante,
  createEstudiante,
  updateEstudiante,
} from "../../services/estudianteService";
import {
  saveNewEstudiante,
  getListEstudiante,
  updateEstudianteOne,
  deleteEstudianteOne,
  getEstudianteOne,
} from "./estudianteSlice";

export const startNewEstudiante = (estudiante) => async (dispatch) => {
  try {
    const data  = await createEstudiante(estudiante);
    console.log(data);
    dispatch(saveNewEstudiante(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListEstudiantes = () => async (dispatch) => {
  try {
    const response = await getAllEstudiante();
    if (response === "") {
      dispatch(getListEstudiante({ data: [], message: "No hay datos" }));
    } else {
      dispatch(
        getListEstudiante({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getEstudianteA = (id) => async (dispatch) => {
  try {
    const  data  = await getEstudiante(id);
    console.log(data);
    dispatch(getEstudianteOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateEstudiante = (estudiante) => async (dispatch) => {
  try {
    const data = await updateEstudiante(estudiante, estudiante.id);
    console.log(data);
    dispatch(updateEstudianteOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteEstudiante = (id) => async (dispatch) => {
  try {
    const data = await deleteEstudiante(id);
    console.log(data);
    dispatch(deleteEstudianteOne(id));
  } catch (error) {
    console.log(error);
  }
};
