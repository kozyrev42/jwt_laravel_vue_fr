import axios from 'axios';
import router from "@/router";

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

// Добавляем интерцептор ответов
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log('Interceptor response error:', error);

        // Если статус ответа 401 (Unauthorized), перенаправляем на страницу логина
        if (error.response && error.response.status === 401) {
            router.push({ name: 'user.login' });
        }

        return Promise.reject(error);
    }
);

export default api;
