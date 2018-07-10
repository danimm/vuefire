<template lang="pug">
  #app
    vfireHeader(
      :active-user="activeUser",
      :autentificado="autentificado",
      @cerrarSesion="setAutentificado"
      )
    section.section
      .container
        router-view(:active-user="activeUser")
    vffooter
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'
import vfireHeader from "@/components/layout/Header.vue";
import vflogin from "@/components/Login.vue";
import vffooter from "@/components/layout/Footer.vue";
import "bulma/css/bulma.css";

export default {
  name: "app",
  data () {
    return {
      msg: "Vue + Firebase App",
      autentificado: false,
      activeUser: null
    };
  },
  components: { vfireHeader, vffooter },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("tenemos usuario activo")
        this.activeUser = user
        this.autentificado = true
        console.info('active user', this.activeUser)
        console.info('autentificado en app', this.autentificado)
      } else {
        console.log("no hay usuario activo");
      }
    })
  },

  methods: {
    setAutentificado () {
      this.autentificado = false,
      this.activeUser = null
    }
  }
}
</script>

<style lang="scss">
@import "./scss/styles.scss";
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

h1,
h2 {
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
