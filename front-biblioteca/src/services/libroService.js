import { axiosInstance } from "./config";


export const getAllLibro = async () => {
    const {data}= await axiosInstance.get("api/libro/list");
    return data;
}

export const getLibro = async (id) => {
    const {data}= await axiosInstance.get(`api/libro/find/${id}`);
    console.log(data);
    return data;
}

export const createLibro = async (libro) => {
    const {data}= await axiosInstance.post("api/libro/save", libro);
    return data;
}

export const updateLibro = async (libro, id) => {
    const {data}= await axiosInstance.put(`api/libro/update/${id}`, libro);
    return data;
}

export const deleteLibro = async (id) => {
    const {data}= await axiosInstance.delete(`api/libro/delete/${id}`);
    return data;
}
