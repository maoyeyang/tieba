import Vue from 'vue'
import Router from 'vue-router'
import routerRole from './routerRole'

import Home from 'pages/home/home'
import Join from 'pages/join/join'
import Login from 'pages/login'

import HomeFocus from 'pages/home/HomeFocus'
import HomeContent from 'pages/home/HomeContent'
import HomeTopic from 'pages/home/HomeTopic'
import HomeLive from 'pages/home/HomeLive'
import JoinFocus from 'pages/join/JoinFocus'
import JoinRecommend from 'pages/join/JoinRecommend'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    name: Home,
    path: '/home',
    component: Home,
    children: [{
      path: '',
      redirect: 'content'
    },
    {
      path: 'focus',
      name: 'HomeFocus',
      component: HomeFocus
    },
    {
      path: 'content',
      name: 'Header',
      component: HomeContent
    },
    {
      path: 'topic',
      name: 'HomeTopic',
      component: HomeTopic
    },
    {
      path: 'live',
      name: 'HomeLive',
      component: HomeLive
    }
    ]
  }, {
    path: '/join',
    name: Join,
    component: Join,
    children: [{
      path: '',
      redirect: 'recommend'
    },
    {
      path: 'focus',
      name: 'JoinFocus',
      component: JoinFocus
    }, {
      path: 'recommend',
      name: 'JoinRecommend',
      component: JoinRecommend
    }
    ]
  }, {
    path: '/login',
    name: Login,
    component: Login
  }],
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)

  if (routerRole.some(route => route.path === to.path) && !sessionStorage.getItem('user')) {
    next('/login')
    return
  }
  next()
})

export default router
