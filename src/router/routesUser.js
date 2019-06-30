import User from 'pages/user/user'
import Setting from 'pages/user/setting'
import FocusList from 'pages/user/focusList'

export default [{
  path: '/user',
  name: 'User',
  component: User
}, {
  path: '/setting',
  name: 'Setting',
  component: Setting
}, {
  path: '/focuslist',
  name: 'FocusList',
  component: FocusList
}]
