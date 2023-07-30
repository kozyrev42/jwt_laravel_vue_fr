import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'

const app = createApp(App);                             // Создание экземпляра приложения Vue
app.config.globalProperties.$axios = axios;             // Подключение axios
app.use(router);                                        // Подключение router
app.mount('#app');