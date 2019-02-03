import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeBase from '../components/Base/HomeBase'
import LoginBase from '../components/Base/LoginBase'
import Home from '../components/Pages/Home'
import NotFound from '../components/Pages/NotFound'
import ProductListPage from '../components/Pages/ProductList'
import ProductDetail from '../components/Pages/ProductDetail'
import ProductSubcategory from '../components/Pages/ProductSubcategory'
import AddProducts from '../components/Pages/AddProducts'
import SignIn from '../components/Pages/Account/SignIn'
import SignUp from '../components/Pages/Account/SignUp'
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
          path: '/category/:category_slug/',
          pathToRegexpOptions: { strict: true },
          component: ProductSubcategory,
          name: 'product_category_page',
        },
        {
          path: '/category/:category_slug/products/',
          pathToRegexpOptions: { strict: true },
          component: ProductListPage,
          name: 'product_list_page',
        },
        {
          path: '/category/:category_slug/:product_slug/',
          pathToRegexpOptions: { strict: true },
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
      path: '/account/',
      component: LoginBase,
      children: [
        {
          path: 'login/',
          name: 'sign_in_page',
          component: SignIn,
          pathToRegexpOptions: { strict: true },
        },
        {
          path: 'register/',
          name: 'sign_up_page',
          component: SignUp,
          pathToRegexpOptions: { strict: true },
        }
      ]
    },
    {
      path: '/**',
      component: NotFound
    }
  ],
  mode: 'history',
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  store.commit('loading')
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
})

export default router
