import Vuex from 'vuex'
import Vue from 'vue'
import i18n from  '../main'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    scrolled: false,
    loading: true,
    locale: {
      lang: 'en'
    }
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
    setLocale(state, payload){
      state.locale.lang = payload.lang;
    }
  },
  getters: {
    scrolled(state){
      return state.scrolled
    },
    loading(state){
      return state.loading
    },
    locale(state){
        return state.locale
    }
  },
  actions: {
    scrolled(context, payload){
      context.commit('scrolled', payload)
    },
    setLocale(context, payload){
      context.commit('setLocale', payload)
    },
    loading(context, payload){
      context.commit('loading', payload)
    }
  }
})

export default store;
