import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

import 'swiper/dist/css/swiper.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
