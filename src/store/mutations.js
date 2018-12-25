let mutations = {
  scrolled (state, payload) {
    state.scrolled = payload.scrolled
  },
  loading(state, loading) {
    state.loading = true
    window.scrollTo({
      top: 100, // could be negative value
      left: 0,
      behavior: 'smooth'
    })

    setTimeout(function () {
      state.loading = false
    }, 600)
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
