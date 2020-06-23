import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Document from '../views/document.vue'
import Login from '../views/login.vue'
import Notfound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/document',
    name: 'Document',
    component: Document
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: 'Notfound',
    component: Notfound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router