const mutations = {
  increment(state) {
    state.counter++
  },
  setUser (state, payload) {
    state.user = payload
  },
  setTeamList (state, payload) {
    state.teams = payload
  },
  setIndexDb(state, payload) {
    state.indexDb = payload
  }
}

export default mutations
