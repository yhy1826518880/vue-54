import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login/login.vue'
// @指的是src下 相当于 ./src
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'users',
      path: '/',
      component: URLSearchParams,
    }
  ]
})
