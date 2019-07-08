import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {
  routerLoginRole,
  TabbarRoutes
} from './routesRole'
import Cookies from 'js-cookie'

import routesHome from './routesHome'
import routesJoin from './routesJoin'
import routesMessage from './routesMessage'
import routesUser from './routesUser'
import routesInfo from './routesInfo'

import Login from 'pages/login'
import Register from 'pages/register'
import Search from 'pages/search'
import Release from 'pages/release'

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
  ...routesInfo,
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
  }, {
    path: '/release',
    name: 'Release',
    component: Release
  }
  ],
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // 一定需要登录的url 没有认证信息 进行登录
  if (routerLoginRole.some(route => to.path === route) && !Cookies.get('username')) {
    next('/login')
    return
  }
  // 要隐藏tabbar的页面进行隐藏
  if (TabbarRoutes.some(route => (to.path.indexOf(route) === 0))) {
    store.dispatch('hiddenTabbar')
  } else {
    store.dispatch('showTabbar')
  }
  if (store.getters.isTabbar === true) {
    store.commit('updateRelease', 0)
  }
  next()
})

export default router
