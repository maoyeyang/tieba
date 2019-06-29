import Join from 'pages/join/join'

import JoinFocus from 'pages/join/JoinFocus'
import JoinRecommend from 'pages/join/JoinRecommend'

export default [{
  path: '/join',
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
}]
