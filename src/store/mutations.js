let mutations = {
  scrolled (state, payload) {
    state.scrolled = payload.scrolled
  },
  loading(state, loading) {
    if (!loading) {
      setTimeout(function () {
        state.loading = false
      }, 700)
    }
    else {
      state.loading = true
    }
  },
  setLocale(state, payload){
    state.locale.lang = payload.lang;
  },
  setCategories(state, payload){
    state.categories = payload
  },
  setTopProducts(state, payload){
    state.top_products = payload
  },
  setNewProducts(state, payload){
    state.top_products = payload
  }
}

export default mutations
