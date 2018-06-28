<template>
  <div id="app">
    <img src="@/assets/firebase.png">
    <h1>{{ msg }}</h1>
    <h2>Firebase.auth</h2>
    <h1>{{userActive}}</h1>
    <div class="container">
      <button @click="GoogleLogin">Iniciar sesión con Google</button>
      <button @click="LogOut">Cerrar sesión</button>
    </div>
    <pre>{{ $data }}</pre>
    <div class="container container-email">
      <h3>Inicia sesión con Email</h3>
      <label for="email">Email</label>
      <input name="email" v-model="email" type="text" placeholder="introduce tu email..">
      <label for="password">password</label>
      <input name="password" v-model="password" type="password">
      <div class="button-container">
        <button @click="EmailLogin">Iniciar sesión</button>
        <button @click="LogOut">Cerrar sesión</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Firebase + Vue',
      userActive: 'No hay user activo',
      email: '',
      password: ''
    }
  },
  methods: {
    GoogleLogin: function () {
      let provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth().signInWithPopup(provider)
        .then(function (datosUsuario) {
          console.log(datosUsuario, 'Tenemos usuario!')
        }).catch(function (err) {
          console.log(err)
        })
    },
    LogOut: function (evt) {
      firebase.auth().signOut()
        .then(() => {
          console.log('cierre de sesion completado..')
        })
    },
    EmailLogin () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => console.log('usuario logueado'), (error) => console.error(error))
    }
  }
}
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

button {
  font-size: 18px;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
}

button:hover {
  background-color: darkgreen;
  color: white;
  cursor: pointer;
}

.container {
  margin: 40px 20% 10px 20%;
  border: 1px solid black;
  border-radius: 5px;
  width: 60%;
  background-color: lightgray;

}
.container-email{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input {
  font-size: 18px;
  margin: 5px;
}

</style>
