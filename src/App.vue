<template>
  <TheNavigation />
  <router-view /> 
</template>
<script>
import TheNavigation from "../src/components/TheNavogation"
export default {
  components: {
    TheNavigation
  },
  name: "App",
}
</script>

<style  src="./assets/style.css">

</style>
