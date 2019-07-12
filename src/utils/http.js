import axios from 'axios' // 引入axios依赖
import Cookies from 'js-cookie' // 引入cookie操作依赖
import JsonWebToken from 'jsonwebtoken'
import store from '../store'
import {
  Message
} from 'iview'

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.withCredentials = true
axios.defaults.timeout = 5000

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
    if (response.data.statusCode !== 200) {
      Message.error(response.data.message)
      return Promise.reject(response)
    }
    return response
  },
  error => {
    Message.error('网络异常，请稍后再试')
    store.dispatch('hiddenLoading')
    return Promise.reject(error)
  }
)

export default axios
