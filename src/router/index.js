import Vue from 'vue'
import Router from 'vue-router'
import HomeBase from '../components/Base/HomeBase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeBase',
      component: HomeBase,
      children: [
        {
          path: ''
        }
      ]
    }
  ],
  mode: 'history'
})
