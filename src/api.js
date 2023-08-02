import axios from 'axios';

// Создаем экземпляр axios
const api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
});

// Добавляем интерцептор запросов
api.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('jwt3_access_token');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;
