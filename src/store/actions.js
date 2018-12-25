import Vue from 'vue'
import * as config from '../config'

let actions = {
  scrolled(state, payload){
    state.commit('scrolled', payload)
  },
  setLocale(state, payload){
    state.commit('setLocale', payload)
  },
  loadCategories(state, payload){
    Vue.axios.get(`${config.API_ROOT}/categories/`)
      .then(response => {
        this.commit('setCategories', response.data.results)
      })
  },
  loadTopProducts(state, payload){
    Vue.axios.get(`${config.API_ROOT}/products/?top_rated=2`)
      .then(response => {
        this.commit('setTopProducts', response.data.results)
      })
  },
  loadNewProducts(state, payload){
    Vue.axios.get(`${config.API_ROOT}/products/?new=2`)
      .then(response => {
        this.commit('setNewProducts', response.data.results)
      })
  }
}
export default actions
