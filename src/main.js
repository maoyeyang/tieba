import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './utils/http'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import './utils/iview'
import './utils/filter'
import Cookies from 'js-cookie'

Vue.use(preview)
Vue.config.productionTip = false
Vue.prototype.$Cookies = Cookies
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
