import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    scrolled: false
  },
  mutations: {
    scrolled (state, payload) {
        state.scrolled = payload.scrolled
    }
  },
  getters: {
    scrolled(state){
      return state.scrolled
    }
  },
  actions: {
    scrolled(context, payload){
      context.commit('scrolled', payload)
    }
  }
})

export default store;
