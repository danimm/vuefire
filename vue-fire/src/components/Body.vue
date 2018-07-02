<template lang="pug">
  #body
    h1 Bienvenido a la App del futuro
    p Para formar parte de esta fantastica aplicación necesitas iniciar sesión.
    .container
      button
        router-link(:to="{ name: 'login' }") Iniciar sesión
      button Registrarse
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
