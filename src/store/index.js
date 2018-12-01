import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    scrolled: false,
    loading: true,
  },
  mutations: {
    scrolled (state, payload) {
        state.scrolled = payload.scrolled
    },
    loading(state, loading) {
      if (!loading) {
        setTimeout(function () {
          state.loading = false
        }, 500)

      }
      else {
        state.loading = true
      }
    },
  },
  getters: {
    scrolled(state){
      return state.scrolled
    },
    loading(state){
      return state.loading
    }
  },
  actions: {
    scrolled(context, payload){
      context.commit('scrolled', payload)
    }
  }
})

export default store;
