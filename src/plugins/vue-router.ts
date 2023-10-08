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
  console.log(to)

  const loggedIn = !!Cookies.get('token')
  if (to.meta.requiresAuth && !loggedIn) return next('/login')
  if (to.name == 'login' && loggedIn) return next('/dashboard')
  next()
})
