import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import './utils/iview'
import './utils/filter'

Vue.use(preview)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.withCredentials = true

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
