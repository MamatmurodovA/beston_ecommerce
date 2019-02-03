let mutations = {
  scrolled (state, payload) {
    state.scrolled = payload.scrolled
  },
  loading(state, loading) {
    state.loading = true
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth'
    })

    setTimeout(function () {
      state.loading = false
    }, 600)
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
