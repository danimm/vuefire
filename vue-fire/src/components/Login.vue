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
                input.input(type="text" placeholder="Introduce tu email")
            .field
              label.label password
              .control
                input.input(type="password")
            .field
              .control
                p.buttons
                  button.button.is-link Iniciar sesión
                  button.button.is-info ¿No tienes cuenta?
                
                
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
                  button.button.is-link Iniciar sesión
</template>

<script>
export default {
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
