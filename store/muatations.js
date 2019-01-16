import Vuex from 'vuex';
const mutations = {
  increment(state) {
    state.counter++
  },
  setUser (state, payload) {
    state.user = payload
  }
}

export default mutations
