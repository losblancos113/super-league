import Vuex from 'vuex';
const mutations = {
  increment(state) {
    state.counter++
  },
  setUser (state, payload) {
    state.user = payload
  },
  setTeamList (state, payload) {
    state.teams = payload
  }
}

export default mutations
