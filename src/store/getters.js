let getters = {
  scrolled(state){
    return state.scrolled
  },
  loading(state){
    return state.loading
  },
  categories(state){
    return state.categories
  },
  top_products(state){
    return state.top_products
  },
  new_products(state){
    return state.new_products
  }
}

export default getters
