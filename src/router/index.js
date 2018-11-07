import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/products/',
      name: 'Products',
      component: Products
    }
  ],
  mode: 'history'
})
