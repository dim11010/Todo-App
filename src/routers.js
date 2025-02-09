import home from './components/home.vue'
import SignUp from "./components/SignUp.vue"
import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        name:'home',
        component:home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
