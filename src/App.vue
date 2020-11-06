<template>
    <header>
        <h2><router-link to="/">Your Toothbrush</router-link></h2>
        <nav>
          <li><router-link to="/product">Get one</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
        </nav>
      </header>
  <router-view /> 
</template>
<script>
export default {
  name: "App",
}
</script>

<style  src="./assets/style.css">

</style>
