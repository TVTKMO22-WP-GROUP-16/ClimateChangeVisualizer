import axios from 'axios';

axios.defaults.baseURL = ""

const api = axios.create({
    baseURL: ''
});

export const register = async (username, password) => {
    const response = await api.post('/register', { username, password });
    return response.data;
};

export const login = async (username, password) => {
    const response = await api.post('/login', { username, password });
    return response.data;
};

export const getPrivateData = async (token) => {
    const response = await api.get('/private', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
