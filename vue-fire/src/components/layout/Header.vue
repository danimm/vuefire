<template lang="pug">
  nav.navbar.is-transparent
    .navbar-brand
      router-link.navbar-item(to="/")
        img(src="@/assets/logo.png")
        strong.navbar-item Vue + Fire
      .navbar-burger.burger(data-target="navbar")
        span
        span
        span
    .navbar-menu#navbar
      .navbar-start
        .navbar-item
          router-link(to="home").navbar-item
            span.icon
              i.fas.fa-home
            span Inicio
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link Ir a..
          .navbar-dropdown.is-boxed
            router-link.navbar-item(to="register") Registrar
            a.navbar-item Colums
            a.navbar-item Modifiers
      .navbar-end
        .navbar-item
          .field.is-grouped(v-if="!autentificado")
            p.control ¿ Tienes cuenta ?
            p.control
              button.button.is-link
                router-link(to="login") Iniciar sesión
          .field.is-grouped(v-if="autentificado")
            p.control Bienvenido {{ activeUser.displayName }}
            p.control
              button.button.is-link(@click="logOut") Cerrar sesión
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/auth'
  export default {
    data () {
      return {
        
      }
    },

    props: {
      autentificado : { type: Boolean },
      activeUser : { type: Object },
    },

    created() {
      console.info('autentificado en header es: ', this.autentificado)
    },

    methods: {
      logOut() {
        firebase
          .auth()
          .signOut()
          .then((user) => {
              console.log('Has cerrado sesión')
              this.$emit('cerrarSesion')
              this.$router.push('login')
            },
            (error) => console.error(error))
      }
    }
  }
</script>

<style scoped>
  button > a {
    color: white;
  }

  .is-grouped {
    align-items: center;
  }

</style>