// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Lists from '../views/lists/Lists.vue'
import List from '../views/lists/List.vue'

// TODO
const requireAuth = () => {
  return true
}

// TODO
const noAuth = () => {
  return true
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: noAuth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: noAuth
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    // beforeEnter: requireAuth
  },
  {
    path: '/my-lists',
    name: 'Lists',
    component: Lists,
    beforeEnter: requireAuth
  },
  {
    path: '/my-lists/list',
    name: 'List',
    component: List,
    // beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
