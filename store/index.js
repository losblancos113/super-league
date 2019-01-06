import Vuex from 'vuex';
import mutations from './muatations';

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations
  })
}

export default createStore
