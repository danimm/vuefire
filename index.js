const btnLogin = document.getElementById("conectar")
const btnLogOut = document.getElementById("logOut")

console.log(btnLogOut)

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  if (user) {
    console.log("tenemos usuario")
    btnLogin.style.display = 'none'
    btnLogOut.style.display = 'block'
  } else {
    console.log("no tenemos usuario")
  }
})

btnLogin.addEventListener("click", function(){
  // console.log("el boton furula")
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  firebase.auth().signInWithPopup(provider)
    .then(function(datosUsuario){
      console.log(datosUsuario)
    }).catch(function(err){
      console.log(err)
    })
})

btnLogOut.addEventListener("click", (evt) => {
  console.log("logoutWork")
  // firebase.auth().signOut()
  // .then(function(){
  //   console.log("cierre de sesion completado..")
  // })
})