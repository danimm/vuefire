<template lang="pug">
  nav.navbar.is-transparent
    .navbar-brand
      router-link.navbar-item(to="/")
        img(src="@/assets/logo.png")
        strong.navbar-item Vue + Fire
      .navbar-burger.burger(data-target="navbar")
        span
        span
        span
    .navbar-menu#navbar
      .navbar-start
        .navbar-item
          router-link(to="home").navbar-item
            span.icon
              i.fas.fa-home
            span Inicio
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link Ir a..
          .navbar-dropdown.is-boxed
            a.navbar-item overview
            a.navbar-item Colums
            a.navbar-item Modifiers
      .navbar-end
        .navbar-item
          .field.is-grouped
            p.control ¿ Tienes cuenta ?
            p.control
              button.button.is-link
                router-link(to="login") Iniciar sesión
</template>

<script>
  document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
  export default {
    
  }
</script>

<style scoped>
  button > a {
    color: white;
  }

</style>