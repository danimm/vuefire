<template lang="pug">
  section.section#login
    .subtitle Elige una forma de acceder:
    .container
      .card
        header.card-header
          p.card-header-title Email
        .card-content
          .content
            .field
              label.label Email
              .control
                input.input(v-model="email" type="text" placeholder="Introduce tu email")
            .field
              label.label password
              .control
                input.input(v-model="password" type="password")
            .field
              .control
                p.buttons
                  button.button.is-link(@click="loginEmail") Iniciar sesión
                  button.button.is-info(@click="logOut") Cerrar sesión

      .card
        header.card-header
          .card-header-title Google
        .card-content(height="500px")
          .content.card-google
            .container-2-items
              img(src="@/assets/google.jpg" width="100px")
              .container-text
                p Inicia sesión con tu cuenta de Google 
                .control
                  button.button.is-link(@click="loginGoogle") Iniciar sesión
</template>

<script>
import firebase from 'firebase'
export default {

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    loginEmail () {
      firebase.
        auth ()
        .signInWithEmailAndPassword (this.email, this.password)
        .then((user) => this.$router.push('home'), (error) => console.error(error))
    },

    loginGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

      firebase
        .auth()
        .signInWithPopup(provider)
        .then( (result) => {
          var user = result.user;
          console.log(user)
          this.$router.push('home')
          }, (error) => console.error(error))
    },

    logOut() {
      firebase
        .auth()
        .signOut()
        .then((user) => alert('Has cerrado sesión'), (error) => console.error(error))
    }
  }
}
</script>

<style scoped>

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  .container-2-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-2-items > img {
    width: 40%;
    height: 100%;
  }

  .card-google {
    display: flex;
    height: 100%;
    align-items: flex-end;
  }

</style>
