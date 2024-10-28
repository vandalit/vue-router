<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container px-4">
      <a class="navbar-brand" href="#"><img src="../../assets/logo.png" alt="logo de suricata" /></a>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link text-light" href="#">Inicio <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<router-link class="nav-link active" aria-current="page"
        to="/">Home</router-link>
        <router-link class="nav-link" :to="{name:
        'productos'}">Productos</router-link>
        <router-link class="nav-link" :to="{name:
        'contacto'}">Contacto</router-link>
<script>
export default {
  
}
</script>
<style scoped>
</style>