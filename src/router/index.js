import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue'),
    props: () => {
      return {
        nombre: "Desayunos",
        descripcion: "Contamos con desayunos deliciosos y nutritivos",
        precio: 2000,
        cantidad: "Para dos personas",
      };
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
