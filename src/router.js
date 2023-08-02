import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from './components/HomeComponent.vue';
import FruitsComponent from './components/FruitsComponent.vue';

// роуты
const routes = [
    { path: '/', component: HomeComponent, name: 'home' },
    { path: '/fruits', component: FruitsComponent },
    { path: '/user/login', component: () => import('@/components/User/UserLogin'), name: 'user.login' },
    { path: '/user/registration', component: () => import('@/components/User/UserRegistration'), name: 'user.registration' },
];

// создание экземпляра маршрутизатора и передача опций `routes`
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;