<template lang="pug">
  #home
    .container
      h1.title Bienvenido {{ activeUser.displayName }}
      h3.subtitle Vamos a  empezar a escribir en la base de datos

    // .container
    //   .field.is-horizontal
    //     .field-label
    //       label.label Nombre
    //     .field-body
    //       .field
    //         p.control {{ user.name }}
      
    //   .field.is-horizontal
    //     .field-label
    //       label.label Email
    //     .field-body
    //       .field
    //         p.control {{ user.email }}

    .container
      .card
        .card-content
          .media
            .media-left
              figure.image.is-128x128
                img(:src="activeUser.photoURL")
          .media-content
            p.title {{ activeUser.displayName }}
            p.subtitle Email: {{ activeUser.email }}
          .content
            p Curabitur interdum justo euismod turpis mattis porttitor. Integer sed ullamcorper erat. Vestibulum nec sollicitudin felis, vulputate dapibus lacus. Cras sed libero ac nisi auctor placerat. Quisque sed felis a leo laoreet rhoncus. Suspendisse ut massa eu sapien fringilla aliquam. Phasellus fermentum tincidunt metus et volutpat.
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

  export default {
    data() {
      return {
        user: {
          // name: dataUser.displayName,
          // email: dataUser.email,
          // photo: dataUser.photoURL
        }
      }
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