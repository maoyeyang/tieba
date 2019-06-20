import Vue from 'vue'
import Vuex from 'vuex'
import allState from './global_state'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    allState
  }
})
