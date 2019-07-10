const allState = {
  state: {
    isTabbar: true,
    isMask: false,
    isLoading: false,
    release: 0,
    isScroll: false,
    isRefresh: false,
    refreshData: false
  },
  getters: {
    isTabbar: state => state.isTabbar,
    isMask: state => state.isMask,
    isLoading: state => state.isLoading,
    isScroll: state => state.isScroll,
    isRefresh: state => state.isRefresh,
    release: state => state.release,
    refreshData: state => state.refreshData
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
    },
    updateScrollStatus (state, update) {
      state.isScroll = update
    },
    updateRefreshStatus (state, update) {
      state.isRefresh = update
    },
    updateRefreshData (state, update) {
      state.refreshData = update
    }
  }
}
export default allState
