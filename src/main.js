import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueI18n from 'vue-i18n'
import VueHZoom from 'vue-h-zoom';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)
Vue.use(VueHZoom);

import 'swiper/dist/css/swiper.css'
import store from './store'
import {messages} from './translations'

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en', // set locale
  messages, // set locale messages
})

axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang')
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

