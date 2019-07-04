import UserInfo from 'pages/info/userInfo'
import BaInfo from 'pages/info/baInfo'

export default [{
  path: '/userinfo/:id',
  name: 'UserInfo',
  component: UserInfo
}, {
  path: '/bainfo/:id',
  name: 'BaInfo',
  component: BaInfo
}]
