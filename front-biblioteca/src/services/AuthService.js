import { axiosInstance } from "./config";


export const login = async (email, password) => {
    const {data}= await axiosInstance.post("/login", { email, password });
    return data;
};