import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () =>
      import(/* webpackChunkName: "Pedidos" */ '../views/Schedule.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "Pedidos" */ '../views/Contact.vue')
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () =>
      import(/* webpackChunkName: "Pedidos" */ '../views/Activities.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
