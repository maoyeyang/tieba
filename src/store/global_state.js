const allState = {
  state: {
    isTabbar: true,
    isMask: false
  },
  getters: {
    isTabbar: state => state.isTabbar,
    isMask: state => state.isMask
  },
  actions: {
    hiddenTabbar ({
      commit
    }) {
      commit('updateTabbar', false)
    },
    showTabbar ({
      commit
    }) {
      commit('updateTabbar', true)
    },
    hiddenMask ({
      commit
    }) {
      commit('updateMask', false)
    },
    showMask ({
      commit
    }) {
      commit('updateMask', true)
    }
  },
  mutations: {
    updateTabbar (state, update) {
      state.isTabbar = update
    },
    updateMask (state, update) {
      state.isMask = update
    }
  }
}
export default allState
