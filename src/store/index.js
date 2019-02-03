import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'

const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

export default store;
