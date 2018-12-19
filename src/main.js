import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueI18n from 'vue-i18n'
import VueHZoom from 'vue-h-zoom';

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)
Vue.use(VueHZoom);

import 'swiper/dist/css/swiper.css'
import store from './store'
import {messages} from './translations'

const i18n = new VueI18n({
  locale: store.getters.locale.lang, // set locale
  messages, // set locale messages
})


new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

