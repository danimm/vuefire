<template lang="pug">
  #app
    vfireHeader
    section.section
      .container
        router-view
    vffooter
</template>

<script>
import firebase from 'firebase'
const refTest = firebase.database().ref('test')

import vfireHeader from '@/components/layout/Header.vue'
import vflogin from '@/components/Login.vue'
import vffooter from '@/components/layout/Footer.vue'
import 'bulma/css/bulma.css'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue + Firebase App'
    }
  },
  components: { vfireHeader, vffooter }
}
</script>

<style lang="scss">
@import './scss/styles.scss';
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
