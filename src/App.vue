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

:root{
  --primary-color:#181D26;
  --secondary-color:#7ED93D;
  --third-color:#75BF2A;
  --fourth-color:#ADD94E;
  --fiveth-color:#AB815A;
  --sixth-color: #59992B;
  --seventh-color: #485773;
  --wp--preset--font-size--small: 13px;
  --wp--preset--font-size--medium: 20px;
  --wp--preset--font-size--large: 36px;
  --wp--preset--font-size--x-large: 42px;
  --wp--preset--font-size--normal: 16px;
  --wp--preset--font-size--huge: 42px;
}
</style>
