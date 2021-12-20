import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "Menu" */ '../views/Menu.vue')
  },
  {
    path: '/Gestion_Usuarios',
    name: 'GestionUsuarios',
    component: () => import(/* webpackChunkName: "GestionUsuarios" */ '../views/GestionUsuarios.vue')
  },
  {
    path: '/GeneracionReportes',
    name: 'GeneracionReportes',
    component: () => import(/* webpackChunkName: "GeneracionReportes" */ '../views/GeneracionReportes.vue')
  },
  {
    path: '/MantenimientoTags',
    name: 'MantenimientoTags',
    component: () => import(/* webpackChunkName: "GestionUsuarios" */ '../views/MantenimientoTags.vue')
  },
  {
    path: '/RegistroInformacionTelepeaje',
    name: 'RegistroInformacionTelepeaje',
    component: () => import(/* webpackChunkName: "GestionUsuarios" */ '../views/RegistroinformacionTelepeaje.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
