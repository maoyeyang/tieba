import Home from 'pages/home/home'

import HomeFocus from 'pages/home/HomeFocus'
import HomeContent from 'pages/home/HomeContent'
import HomeTopic from 'pages/home/HomeTopic'
import HomeLive from 'pages/home/HomeLive'

export default [{
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
    name: 'HomeContent',
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
}]
