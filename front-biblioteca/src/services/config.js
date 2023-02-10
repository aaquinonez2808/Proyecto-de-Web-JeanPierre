import axios from 'axios';

const config = {
    baseURL: 'http://localhost:8080/api',
    headers: {
        "Content-type": "application/json",
        "authorization": "Bearer " + localStorage.getItem("token")
    }
};

export const axiosInstance = axios.create(config);
