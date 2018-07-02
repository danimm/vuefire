import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAzYwdpMDSOnZU8JKdanfYRFqN2c0d-NBw",
  authDomain: "vuefire-15504.firebaseapp.com",
  databaseURL: "https://vuefire-15504.firebaseio.com",
  projectId: "vuefire-15504",
  storageBucket: "vuefire-15504.appspot.com",
  messagingSenderId: "367909420571"
}
firebase.initializeApp(config)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})