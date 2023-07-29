import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from './components/HomeComponent.vue';
import FruitsComponent from './components/FruitsComponent.vue';

// роуты
const routes = [
    { path: '/', component: HomeComponent },
    { path: '/fruits', component: FruitsComponent }
];

// создание экземпляра маршрутизатора и передача опций `routes`
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;