import Router, { RouteConfig } from 'vue-router';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/home/list';

const routes: RouteConfig[] = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginPage },
    { path: '/recipe', component: HomePage },
];

export const router = new Router({
    routes,
})