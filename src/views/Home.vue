<template>

   <main>
        <section class="hero">
            <div class="background-image"></div>
            <div class="diagonal">
              <div class="hero-content-area">
              <h1>Your Personal Toothbrush</h1>
              <h3>Get your personal Toothbrush!</h3>
              <router-link to="/product" class="btn">Get one!</router-link>
              </div>
              </div>
          </section>    

          <section class="reasons">

            <h3 class="title">Reasons to get a bamboo toothbrush today:</h3>
            <hr>
            <p class="reason-text">It reduces the environmental pollution and plastic waste in our oceans</p>     
            <p class="reason-text">The antibacterial properties of bamboo allow to cultivate it without using toxics</p>
            <p class="reason-text">It has a biodegradable handle that easily deteriorate.</p>
            <p class="reason-text">Not tested on animals</p>
           
          </section>

      </main>

      <footer>
        <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
        <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
        <ul>
          <li><a href="#"><i class="fa fa-twitter-square fa-2x"></i></a></li>
          <li><a href="#"><i class="fa fa-facebook-square fa-2x"></i></a></li>
          <li><a href="#"><i class="fa fa-snapchat-square fa-2x"></i></a></li>
        </ul>
      </footer>

</template>

<script>
export default {
  name: "Home", 
  data() {
    return{
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
