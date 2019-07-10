import axios from 'axios' // 引入axios依赖
import Cookies from 'js-cookie' // 引入cookie操作依赖
import JsonWebToken from 'jsonwebtoken'
import store from '../store'

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.withCredentials = true
axios.interceptors.request.use(
  config => {
    // 给$http请求设置cookie请求头
    store.dispatch('showLoading')
    const token = Cookies.get('username')
    const isTokenRight = !!(token && JsonWebToken.decode(token))
    if (isTokenRight) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    store.dispatch('hiddenLoading')
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
