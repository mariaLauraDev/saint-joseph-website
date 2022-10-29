<template>
<div>
  <Navbar />
  <div>
      <router-view></router-view>
  </div>
  <Footer />
  <div>
    
  </div>
</div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
*{
  font-family: 'Montserrat', sans-serif;
}
</style>
