import Router, { RouteConfig } from 'vue-router';
import { LoginPageContainer } from './pages/login';
import { HomePage } from './pages/home/list';

const routes: RouteConfig[] = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginPageContainer },
    { path: '/home', component: HomePage },
];

export const router = new Router({
    routes,
})