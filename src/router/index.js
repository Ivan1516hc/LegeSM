import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import RegistroUsuario from '../views/RegistroUsuario.vue'
import RecuperarContraseña from '../views/RecuperarContraseña.vue'
import ErrorMenssage from '../views/ErrorMenssage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Registro',
        name: 'RegistroUsuario',
        component: RegistroUsuario
    },
    {
        path: '/Recuperar',
        name: 'RecuperarContraseña',
        component: RecuperarContraseña
    },
    {
        path: '*',
        name: 'ErrorMenssage',
        component: ErrorMenssage
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router