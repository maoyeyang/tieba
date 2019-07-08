const allState = {
  state: {
    isTabbar: true,
    isMask: false,
    isLoading: false,
    release: 0
  },
  getters: {
    isTabbar: state => state.isTabbar,
    isMask: state => state.isMask,
    isLoading: state => state.isLoading,
    release: state => state.release
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
    },
    hiddenLoading ({
      commit
    }) {
      commit('updateLoading', false)
    },
    showLoading ({
      commit
    }) {
      commit('updateLoading', true)
    }
  },
  mutations: {
    updateTabbar (state, update) {
      state.isTabbar = update
    },
    updateMask (state, update) {
      state.isMask = update
    },
    updateLoading (state, update) {
      state.isLoading = update
    },
    updateRelease (state, update) {
      state.release = update
    }
  }
}
export default allState
