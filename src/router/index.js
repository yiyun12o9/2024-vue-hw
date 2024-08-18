import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/week1',
      name: 'week1',
      component: () => import('../views/WeekOne.vue')
    },
    {
      path: '/week2',
      name: 'week2',
      component: () => import('../views/WeekTwo.vue')
    },
    {
      path: '/week3',
      name: 'week3',
      component: () => import('../views/WeekThree.vue')
    }
  ]
})

export default router
