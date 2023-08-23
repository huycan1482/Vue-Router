import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../components/HomePage.vue'
import ErrorPage from '../components/ErrorPage.vue'
import ProductPage from '../components/ProductsPage.vue'
import AboutPage from '../components/AboutPage.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/products', component: ProductPage},
    {path: '/about', component: AboutPage},
    {path: '/:pathMatch(.*)*', component: ErrorPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router