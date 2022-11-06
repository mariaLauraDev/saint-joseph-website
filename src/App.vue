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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --first-color:#181D26;
  --second-color:#AB815A;
  --third-color: #485773;
  --fourth-color: #483F59;
}
</style>
