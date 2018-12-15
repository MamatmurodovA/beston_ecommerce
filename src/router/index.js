import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeBase from '../components/Base/HomeBase'
import Home from '../components/Pages/Home'
import NotFound from '../components/Pages/NotFound'
import ProductListPage from '../components/Pages/ProductList'
import ProductDetail from '../components/Pages/ProductDetail'
import ProductSubcategory from '../components/Pages/ProductSubcategory'
import AddProducts from '../components/Pages/AddProducts'
import store from '../store'

Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      path: '',
      component: HomeBase,
      children: [
        {
          path: '/',
          component: Home,
          name: 'home_page',
        },
        {
          path: '/category/:category_slug',
          component: ProductSubcategory,
          name: 'product_category_page',
        },
        {
          path: '/category/:category_slug/products/',
          component: ProductListPage,
          name: 'product_list_page',
        },
        {
          path: '/category/:category_slug/products/:id',
          component: ProductDetail,
          name: 'product_detail_page',
        },
        {
          path: '/addproducts',
          component: AddProducts,
          name: 'add_products',
        },
      ],
    },
    {
      path: '/**',
      component: NotFound
    }
  ],
  mode: 'history'
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    store.dispatch('loading', true)
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  store.dispatch('loading', false)
})

export default router
