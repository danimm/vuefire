import './firebaseConfigured'
import Vue from 'vue'
import Vuefire from 'vuefire'
import App from './App.vue'

import VueRouter from 'vue-router'
import routes from '@/routes'

// Initialize Firebase
Vue.use(Vuefire)

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
