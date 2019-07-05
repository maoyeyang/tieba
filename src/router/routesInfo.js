import UserInfo from 'pages/info/userInfo'
import BaInfo from 'pages/info/baInfo'
import TieInfo from 'pages/info/tieInfo'

export default [{
  path: '/userinfo/:id',
  name: 'UserInfo',
  component: UserInfo
}, {
  path: '/bainfo/:id',
  name: 'BaInfo',
  component: BaInfo
}, {
  path: '/tieinfo/:id',
  name: 'TieInfo',
  component: TieInfo
}]
