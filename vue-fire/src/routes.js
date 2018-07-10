import VuefireBody from '@/components/Body.vue'
import VuefireLogin from '@/components/Login.vue'
import VuefireHome from '@/components/Home.vue'

import firebase from 'firebase'

const routes =
[
  { path: '/', component: VuefireBody, name: 'body'},
  { path: '/login', component: VuefireLogin, name: 'login'},
  { path: '/home',
    component: VuefireHome,
    name: 'home',
    meta: {
      atentificado: true
    },
    beforeEnter: (to, from, next) => {
      let user = firebase.auth().currentUser
      // console.log(user)
      let autorizacion = to.matched.some(record => record.meta.atentificado)

      if (autorizacion && !user) {
        next('login')
      } else if (!autorizacion && user) {
        next('home')
      } else {
        next()
      }
    }
  }
]

export default routes
