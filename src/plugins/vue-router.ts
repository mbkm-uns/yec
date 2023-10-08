import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import App from '../App.vue'
// @ts-ignore
import { setupLayouts } from 'virtual:generated-layouts'
import { definePlugin } from '@/core'
import { VueQueryPlugin } from '@tanstack/vue-query'

import Cookies from 'js-cookie'

const app = createApp(App)
const routes = setupLayouts(generatedRoutes)
app.use(VueQueryPlugin)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default definePlugin((app) => {
  app.use(router)
})
router.beforeEach((to, from, next) => {
  const loggedIn = !!Cookies.get('token')
  console.log(to.path)
  if (to.path === '/auth/login' && loggedIn) return next('/')
  if (to.meta.requiresAuth && !loggedIn) return next('/login')
  {
    next()
  }
  if (!to.meta.requiresAuth && loggedIn) return next()
})
