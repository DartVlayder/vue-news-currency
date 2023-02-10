import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CurrencyView',
    name: 'CurrencyView',
    component: () => import('../views/CurrencyView.vue')
  },
  {
    path: '/newsPage/:id',
    name: 'newsPage', 
    component: () => import('../components/newsPage.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
