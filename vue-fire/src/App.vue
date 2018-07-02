<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    button
      router-link(to="login") Iniciar sesión
    router-view
    vfbody
</template>

<script>
import vflogin from '@/components/Login.vue'
import vfbody from '@/components/Body.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue + Firebase App'
    }
  },
  components: { vfbody }
}
</script>

<style lang="scss">
@import './scss/styles.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
