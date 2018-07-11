<template lang="pug">
  #register
    .box
      .field
        label.label Name
        .control
          input.input(
            v-model="dataUser.name",
            type="text", placeholder="Introduce your name here")
      .field
        label.label Username
        .control.has-icons-left
          input.input(
            v-model="dataUser.userName",
            type="text", placeholder="Your Username come here!")
          span.icon.is-small.is-left
            i.fas.fa-user
      .field
        label.label Email
        .control
          input.input(
            v-model="dataUser.email",
            type="email", placeholder="Show me your email adress")
      .field.is-grouped
        .control
          button.button.is-link(@click="newUser") Submit
        .control
          button.button.is-text Cancel
    .notification.is-success(v-show="showNotification") Usuario creado correctamente !
      button.delete
</template>

<script>
  import { db } from '@/firebaseConfigured.js'
  export default {
    data () {
      return {
        showNotification: false,
        dataUser: {
          name: '',
          userName: '',
          email: ''
        }
      }
    },

    methods: {
      newUser() {
        let dataUser = this.dataUser
        this.$firebaseRefs.users.push(dataUser).then(() => {
          console.log('datos subidos correctamente!')
          this.dataUser = {}
          this.showNotification = true
          setTimeout(() => {
            this.showNotification = false
          }, 2000)
        }, (error) => console.error(error))

      }
    },

    firebase: {
      users: {
        source: db.ref('users'),
        cancelCallback (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<style scoped>

</style>