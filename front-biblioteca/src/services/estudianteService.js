import { axiosInstance } from "./config";


export const getAllEstudiante = async () => {
    const {data}= await axiosInstance.get("api/estudiante/list");
    return data;
}

export const getEstudiante = async (id) => {
    const {data}= await axiosInstance.get(`api/estudiante/find/${id}`);
    console.log(data);
    return data;
}

export const createEstudiante = async (estudiante) => {
    const {data}= await axiosInstance.post("api/estudiante/save", estudiante);
    return data;
}

export const updateEstudiante = async (estudiante, id) => {
    const {data}= await axiosInstance.put(`api/estudiante/update/${id}`, estudiante);
    return data;
}

export const deleteEstudiante = async (id) => {
    const {data}= await axiosInstance.delete(`api/estudiante/delete/${id}`);
    return data;
}
