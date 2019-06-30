const allState = {
  state: {
    isTabbar: true
  },
  getters: {
    isTabbar: state => state.isTabbar
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
    }
  },
  mutations: {
    updateTabbar (state, update) {
      state.isTabbar = update
    }
  }
}
export default allState
