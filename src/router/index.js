import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {
  routerLoginRole,
  TabbarRoutes
} from './routesRole'
import {
  getCookie
} from '../common/methods'
import JsonWebToken from 'jsonwebtoken'

import routesHome from './routesHome'
import routesJoin from './routesJoin'
import routesMessage from './routesMessage'
import routesUser from './routesUser'

import Login from 'pages/login'
import Register from 'pages/register'
import Search from 'pages/search'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  ...routesHome,
  ...routesJoin,
  ...routesMessage,
  ...routesUser,
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }
  ],
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // console.log(from)
  // console.log(to)
  // 给$http请求设置cookie请求头
  const token = getCookie('username')
  const isTokenRight = !!(token && JsonWebToken.decode(token))
  if (isTokenRight) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
  }
  // 符合登录条件的url 进行登录
  if (routerLoginRole.some(route => route === to.path) && !getCookie('username')) {
    next('/login')
    return
  }
  // 要隐藏tabbar的页面进行隐藏
  if (TabbarRoutes.some(route => route === to.path)) {
    store.dispatch('hiddenTabbar')
    next()
    return
  }
  store.dispatch('showTabbar')
  next()
})

export default router
