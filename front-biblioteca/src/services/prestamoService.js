import { axiosInstance } from "./config";


export const getAllPrestamo = async () => {
    const {data}= await axiosInstance.get("api/prestamo/list");
    return data;
}

export const getPrestamo = async (id) => {
    const {data}= await axiosInstance.get(`api/prestamo/find/${id}`);
    console.log(data);
    return data;
}

export const createPrestamo = async (prestamo) => {
    const {data}= await axiosInstance.post("api/prestamo/save", prestamo);
    return data;
}

export const updatePrestamo = async (prestamo, id) => {
    const {data}= await axiosInstance.put(`api/prestamo/update/${id}`, prestamo);
    return data;
}

export const deletePrestamo = async (id) => {
    const {data}= await axiosInstance.delete(`api/prestamo/delete/${id}`);
    return data;
}
