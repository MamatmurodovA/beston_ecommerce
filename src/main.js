import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

import 'swiper/dist/css/swiper.css'
import store from './store'


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
