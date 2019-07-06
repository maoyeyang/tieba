import User from 'pages/user/user'
import Setting from 'pages/user/setting'
import FocusList from 'pages/user/focusList'
import FansList from 'pages/user/fansList'
import FocusBaList from 'pages/user/focusBaList'
import TieList from 'pages/user/tieList'
import UserHome from 'pages/user/userHome'
import UserEdit from 'pages/user/userEdit'
import BrowseHistory from 'pages/user/browseHistory'
import Collection from 'pages/user/collection'

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
}, {
  path: '/fanslist',
  name: 'FansList',
  component: FansList
}, {
  path: '/focusbalist',
  name: 'FocusBaList',
  component: FocusBaList
}, {
  path: '/tielist',
  name: 'TieList',
  component: TieList
}, {
  path: '/userhome',
  name: 'UserHome',
  component: UserHome
}, {
  path: '/useredit',
  name: 'UserEdit',
  component: UserEdit
}, {
  path: '/browsehistory',
  name: 'BrowseHistory',
  component: BrowseHistory
}, {
  path: '/collection',
  name: 'Collection',
  component: Collection
}]
