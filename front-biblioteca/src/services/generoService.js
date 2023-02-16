import { axiosInstance } from "./config";


export const getAllGenero = async () => {
    const {data}= await axiosInstance.get("api/genero/list");
    return data;
}

export const getGenero = async (id) => {
    const {data}= await axiosInstance.get(`api/genero/find/${id}`);
    console.log(data);
    return data;
}

export const createGenero = async (genero) => {
    const {data}= await axiosInstance.post("api/genero/save", genero);
    return data;
}

export const updateGenero = async (genero, id) => {
    const {data}= await axiosInstance.put(`api/genero/update/${id}`, genero);
    return data;
}

export const deleteGenero = async (id) => {
    const {data}= await axiosInstance.delete(`api/genero/delete/${id}`);
    return data;
}
