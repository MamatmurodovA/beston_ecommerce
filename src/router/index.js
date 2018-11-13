import Vue from 'vue'
import Router from 'vue-router'
import HomeBase from '../components/Base/HomeBase'
import ProductsBase from '../components/Base/ProductsBase'
import Home from '../components/Pages/Home'
import ProductListPage from '../components/Pages/ProductListPage'
import ProductPageNew from '../components/Pages/ProductPageNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: HomeBase,
      children: [
        {
            path: '/',
            component: Home,
            name: 'HomeBase',
        },
        {
          path: '/products',
          component: ProductListPage,
          name: 'product_list',
        },
        {
          path: '/ProductPageNew',
          component: ProductPageNew,
          name: 'ProductPageNew',
        }
      ],
    },
  ],
  mode: 'history'
})
