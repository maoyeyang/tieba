const allState = {
  state: {
    isTabbar: true,
    user_id: null
  },
  getters: {
    isTabbar: state => state.isTabbar,
    getUserId: state => state.user_id
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
    },
    updateUserId (state, update) {
      state.user_id = update
    }
  }
}
export default allState
