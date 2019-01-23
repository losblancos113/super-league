import Vuex from 'vuex';
import mutations from './muatations';
import actions from './actions';
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js';

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      user: null,
      teams: []
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      },
      teamAvailable: (state, getters) => {
        return state.teams
      }
    },
    mutations,
    actions
  })
}

export default createStore
