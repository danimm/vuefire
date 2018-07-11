<template lang="pug">
  #home
    .container
      h1.title Bienvenido {{ activeUser.displayName }}
      h3.subtitle Vamos a  empezar a escribir en la base de datos

    .box
      .media
        .media-left
          figure.image.is-64x64
            img(:src="activeUser.photoURL")
        .media-content
          .content
            p.title {{ activeUser.displayName }}
            p.subtitle Estos son los usuarios de Firebase: 
            ul(v-for="user in users", :key="user.key")
              li Nombre: {{ user.name }} 
              li Usuario: {{ user.userName }}
              li Email: {{ user.email }} 
            p User ID: {{ activeUser.uid }}

        
    .container
      .field.is-horizontal
        button.button.is-rounded Set
      .field.is-horizontal
        button.button.is-rounded.is-primary Update
      .field.is-horizontal
        button.button.is-rounded.is-danger Cerrar sesión
      
      
</template>

<script>
  import { db } from '@/firebaseConfigured'
  export default {
    data() {
      return {
        users: {}
      }
    },

    firebase: {
      users: db.ref('users')
    },

    props: {
      activeUser: {
        type: Object,
        required: true
      }
    }
    // firebase: {
    //   users: usersRef
    // },
  }

</script>

<style scoped>

</style>