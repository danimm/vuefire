<template lang="pug">
  section.hero#body
    .hero-body
      .container
        img(src="@/assets/logo.png")
        h1.title Bienvenido a la App del futuro
        h2.subtitle Con esta App podrás usar un chat utilizando Firebase.
        h3 Elige un método de Inicio de sesión para formar 
          | parte de esta fantastica aplicación.
      .container.container-button
        router-link.button.is-info.is-medium(to="login")
          span Empezemos
    
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  a {
    color: white;
  }

  .container-button {
    margin-top: 20px;
  }
</style>
