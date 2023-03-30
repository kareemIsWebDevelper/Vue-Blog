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
      path: "/details/:id",
      name: "Details",
      props: true,
      component: () => import("../views/Details.vue")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../views/Register.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login.vue")
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import("../views/Feed.vue")
    },
  ]
})

export default router
