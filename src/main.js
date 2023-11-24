import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from "./pages/Home.vue";
import Favorite from "./pages/Favorite.vue";
import Preview from "./pages/Preview.vue";

import {createRouter, createWebHashHistory} from "vue-router";
const routes=[
    {path:'/',component:Home},
    {path: '/favorite',component: Favorite},
    {path: '/preview/:id',component: Preview},

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
