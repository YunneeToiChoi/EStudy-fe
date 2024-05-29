import axios from 'axios';

const request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
})

export const get = async (path:any, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
}

export const post = async (path:any, data:any, option = {}) => {
    const response = await request.post(path, data, option);
    return response.data;
};

export const del = async (path:any, option = {}) => {
    const response = await request.delete(path, option);
    return response.data;
};

export default request;