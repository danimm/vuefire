import VuefireBody from '@/components/Body.vue'
import vfLogin from '@/components/Login.vue'
import VuefireHome from '@/components/Home.vue'

const routes =
[
  { path: '/', component: VuefireBody, name: 'body'},
  { path: '/login', component: vfLogin, name: 'login'},
    { path: '/home', component: VuefireHome, name: 'home'}
]

export default routes
