import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeBase from '../components/Base/HomeBase'
import Home from '../components/Pages/Home'
import NotFound from '../components/Pages/NotFound'
import ProductListPage from '../components/Pages/ProductList'
import ProductDetail from '../components/Pages/ProductDetail'
import ProductSubcategory from '../components/Pages/ProductSubcategory'
import AddProducts from '../components/Pages/AddProducts'

Vue.use(VueRouter)

export default new VueRouter({
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
          path: '/category/:category_id',
          component: ProductSubcategory,
          name: 'product_category_page',
        },
        {
          path: '/category/:category_id/products/',
          component: ProductListPage,
          name: 'product_list_page',
        },
        {
          path: '/category/:category_id/products/:id',
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
