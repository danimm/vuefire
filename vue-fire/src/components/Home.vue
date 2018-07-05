<template lang="pug">
  #home
    .container
      h1.title Bienvenido {{ user.name }}
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
                img(:src="user.photo")
          .media-content
            p.title {{ user.name }}
            p.subtitle {{ user.email }}
          .content
            p Curabitur interdum justo euismod turpis mattis porttitor. Integer sed ullamcorper erat. Vestibulum nec sollicitudin felis, vulputate dapibus lacus. Cras sed libero ac nisi auctor placerat. Quisque sed felis a leo laoreet rhoncus. Suspendisse ut massa eu sapien fringilla aliquam. Phasellus fermentum tincidunt metus et volutpat.
        
    .container
      button.button.is-rounded Set
      button.button.is-rounded.is-primary Update
      button.button.is-rounded.is-danger Delete
</template>

<script>
import firebase from 'firebase'
// const refTest = firebase.database().ref('test')
// const currentUser = firebase.auth().currentUser
  export default {
    data() {
      return {
        user: {
          name: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          photo: firebase.auth().currentUser.photoURL
        }
      }
    }
    
  //   methods: {
  //     btnSet () {
  //       refTest.push(this.user.name)
  //     }
  //   }
  }
</script>

<style scoped>

</style>