import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

const routes = [
  { path: '/', component: Login, name: 'login' },
  { path: '/home', component: Home, name: 'home' }
]

export default routes
