import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import OglasiView from '../views/OglasiView.vue'
import ChatView from '../views/ChatView.vue'


Vue.use(VueRouter)

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: LoginView
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: RegisterView
  },
  {
    path: '/oglasi',
    name: 'oglasi',
    component: OglasiView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
